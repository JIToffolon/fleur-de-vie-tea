import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fleur de Vie",
    short_name: "Fleur de Vie",
    description: "Asesor Virtual de Té & Infusiones de Fleur de Vie Luxury Tea",
    start_url: "/",
    display: "standalone",
    background_color: "#0F382C",
    theme_color: "#0F382C",
    orientation: "portrait",
    icons: [
      {
        src: "/images/icon-oficial.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
