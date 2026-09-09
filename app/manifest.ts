import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammed Mahshook Ali P | Software Engineer & AI Engineer",
    short_name: "Mahshook Ali",
    description:
      "Building scalable software and practical AI systems from idea to production. Specializing in full-stack, RAG, LLMs, and cloud deployments.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
