import type { Metadata, Viewport } from "next";
import { Lora, Open_Sans, Averia_Libre } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const averia = Averia_Libre({
  variable: "--font-averia",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Dynamic base URL detection for Vercel deployment & local dev
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Fleur de Vie - Asesor Virtual de Té",
    template: "%s | Fleur de Vie Luxury Tea",
  },
  description:
    "Descubrí tu té blend o infusión ideal con la experiencia ritual e interactiva de Fleur de Vie Luxury Tea.",
  keywords: [
    "Té",
    "Luxury Tea",
    "Tisana",
    "Capullos Florecientes",
    "Blends de Autor",
    "Fleur de Vie",
    "Asesor Virtual",
  ],
  authors: [{ name: "Fleur de Vie" }],
  creator: "Fleur de Vie",
  publisher: "Fleur de Vie",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: getBaseUrl(),
    siteName: "Fleur de Vie Luxury Tea",
    title: "Fleur de Vie - Asesor Virtual de Té",
    description:
      "Descubrí tu té blend o infusión ideal con nuestra experiencia interactiva y ritual de bienestar.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fleur de Vie Luxury Tea - Asesor Virtual de Té",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleur de Vie - Asesor Virtual de Té",
    description:
      "Descubrí tu té blend o infusión ideal con nuestra experiencia interactiva.",
    images: ["/images/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${lora.variable} ${openSans.variable} ${averia.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FDFBF7] text-[#1A2521]">
        {children}
      </body>
    </html>
  );
}
