import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fleur de Vie Luxury Tea",
    short_name: "Fleur de Vie",
    description: "Asesor Virtual de Té & Infusiones de Fleur de Vie Luxury Tea",
    start_url: "/",
    display: "standalone",
    background_color: "#0F382C",
    theme_color: "#0F382C",
    orientation: "portrait",
    categories: ["lifestyle", "shopping"],
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
