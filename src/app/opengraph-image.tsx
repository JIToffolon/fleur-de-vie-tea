import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const alt = "Fleur de Vie Luxury Tea - Asesor Virtual de Té";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "images",
    "og-image.png"
  );
  const buffer = fs.readFileSync(filePath);
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

