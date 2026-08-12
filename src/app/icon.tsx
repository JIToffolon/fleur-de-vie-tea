import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "images",
    "icon-oficial.png"
  );
  const buffer = fs.readFileSync(filePath);
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

