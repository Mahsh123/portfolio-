from PIL import Image, ImageFilter
import numpy as np

def create_cutout(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    w, h = img.size
    data = np.array(img, dtype=np.float32)

    r = data[:, :, 0]
    g = data[:, :, 1]
    b = data[:, :, 2]

    # Brightness / luminance
    brightness = 0.299 * r + 0.587 * g + 0.114 * b

    # Create radial distance mask from subject center (x=w*0.5, y=h*0.42)
    y_coords, x_coords = np.ogrid[:h, :w]
    # normalized distance from center
    dx = (x_coords - w * 0.5) / (w * 0.48)
    dy = (y_coords - h * 0.42) / (h * 0.52)
    dist = np.sqrt(dx * dx + dy * dy)

    # Edge fade factor based on distance from center
    # Inner region (dist < 0.6) has full opacity
    # Outer region (dist > 0.95) fades to 0
    fade = np.clip((1.0 - (dist - 0.55) / 0.40), 0.0, 1.0)
    # smoothstep
    fade = fade * fade * (3.0 - 2.0 * fade)

    # Also vertical bottom fade
    bottom_fade = np.clip((1.0 - (y_coords - h * 0.70) / (h * 0.28)), 0.0, 1.0)
    bottom_fade = bottom_fade * bottom_fade * (3.0 - 2.0 * bottom_fade)

    # Combine fades
    alpha_mask = fade * bottom_fade

    # In dark background areas (brightness < 18), fade out even faster
    dark_fade = np.clip(brightness / 20.0, 0.0, 1.0)
    # only apply dark fade when dist > 0.4
    dist_weight = np.clip((dist - 0.35) / 0.35, 0.0, 1.0)
    combined_alpha = alpha_mask * (1.0 - dist_weight * (1.0 - dark_fade))

    final_alpha = np.clip(combined_alpha * 255.0, 0, 255).astype(np.uint8)
    
    # Smooth the alpha slightly
    alpha_img = Image.fromarray(final_alpha).filter(ImageFilter.GaussianBlur(radius=2))
    
    img.putalpha(alpha_img)
    img.save(output_path, "PNG")
    print("Cutout created successfully:", output_path)

if __name__ == "__main__":
    create_cutout("d:/portfoloio/public/images/portrait.jpg", "d:/portfoloio/public/images/portrait-cutout.png")
