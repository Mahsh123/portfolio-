import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#F1F5F9",
        brand: {
          dark: "#030712",
          navy: "#070E1C",
          surface: "#0B1528",
          card: "rgba(11, 22, 42, 0.7)",
          border: "rgba(56, 189, 248, 0.12)",
          borderHover: "rgba(56, 189, 248, 0.35)",
          cyan: "#38BDF8",
          blue: "#60A5FA",
          indigo: "#818CF8",
          purple: "#A855F7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(56, 189, 248, 0.18)",
        "glow-purple": "0 0 40px -10px rgba(168, 85, 247, 0.18)",
        card: "0 20px 40px -15px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
