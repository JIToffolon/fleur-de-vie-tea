import sharp from "sharp";
import fs from "fs";
import path from "path";

const svgStandard = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F382C" />
      <stop offset="100%" stop-color="#0A271E" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C365" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#B89628" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>
  <!-- Background with subtle luxury rounded corners -->
  <rect width="512" height="512" rx="100" fill="url(#bgGrad)"/>
  <!-- Gold Outer Ring -->
  <circle cx="256" cy="256" r="215" stroke="url(#goldGrad)" stroke-width="4" fill="none" opacity="0.6"/>
  <!-- Sacred Geometry Rosette -->
  <g filter="url(#glow)" stroke="url(#goldGrad)" fill="none">
    <circle cx="256" cy="256" r="180" stroke-width="6"/>
    <circle cx="256" cy="158" r="98" stroke-width="4.5"/>
    <circle cx="256" cy="354" r="98" stroke-width="4.5"/>
    <circle cx="158" cy="256" r="98" stroke-width="4.5"/>
    <circle cx="354" cy="256" r="98" stroke-width="4.5"/>
    <circle cx="186.7" cy="186.7" r="98" stroke-width="4.5"/>
    <circle cx="325.3" cy="186.7" r="98" stroke-width="4.5"/>
    <circle cx="186.7" cy="325.3" r="98" stroke-width="4.5"/>
    <circle cx="325.3" cy="325.3" r="98" stroke-width="4.5"/>
    <circle cx="256" cy="256" r="24" fill="url(#goldGrad)" stroke="none"/>
  </g>
</svg>
`;

const svgMaskable = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F382C" />
      <stop offset="100%" stop-color="#0A271E" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C365" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#B89628" />
    </linearGradient>
  </defs>
  <!-- Full rectangular background without radius for Android adaptive masking -->
  <rect width="512" height="512" fill="url(#bgGrad)"/>
  <!-- Safe Zone Rosette (scaled to fit within 65% safe area) -->
  <g transform="translate(76.8, 76.8) scale(0.70)" stroke="url(#goldGrad)" fill="none">
    <circle cx="256" cy="256" r="215" stroke-width="5" opacity="0.6"/>
    <circle cx="256" cy="256" r="180" stroke-width="7"/>
    <circle cx="256" cy="158" r="98" stroke-width="5"/>
    <circle cx="256" cy="354" r="98" stroke-width="5"/>
    <circle cx="158" cy="256" r="98" stroke-width="5"/>
    <circle cx="354" cy="256" r="98" stroke-width="5"/>
    <circle cx="186.7" cy="186.7" r="98" stroke-width="4.5"/>
    <circle cx="325.3" cy="186.7" r="98" stroke-width="4.5"/>
    <circle cx="186.7" cy="325.3" r="98" stroke-width="4.5"/>
    <circle cx="325.3" cy="325.3" r="98" stroke-width="4.5"/>
    <circle cx="256" cy="256" r="26" fill="url(#goldGrad)" stroke="none"/>
  </g>
</svg>
`;

async function generate() {
  const imagesDir = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  await sharp(Buffer.from(svgStandard(512))).png({ quality: 100 }).toFile(path.join(imagesDir, "icon-512.png"));
  await sharp(Buffer.from(svgStandard(192))).png({ quality: 100 }).toFile(path.join(imagesDir, "icon-192.png"));
  await sharp(Buffer.from(svgStandard(180))).png({ quality: 100 }).toFile(path.join(imagesDir, "apple-touch-icon.png"));
  await sharp(Buffer.from(svgStandard(512))).png({ quality: 100 }).toFile(path.join(imagesDir, "icon-oficial.png"));
  await sharp(Buffer.from(svgMaskable(512))).png({ quality: 100 }).toFile(path.join(imagesDir, "icon-maskable-512.png"));

  await sharp(Buffer.from(svgStandard(192))).png({ quality: 100 }).toFile(path.join(process.cwd(), "public", "icon-192.png"));
  await sharp(Buffer.from(svgStandard(512))).png({ quality: 100 }).toFile(path.join(process.cwd(), "public", "icon-512.png"));
  await sharp(Buffer.from(svgStandard(180))).png({ quality: 100 }).toFile(path.join(process.cwd(), "public", "apple-touch-icon.png"));

  console.log("Successfully generated all high-resolution PWA and Apple Touch icons!");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
