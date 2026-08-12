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

export const metadata: Metadata = {
  metadataBase: new URL("https://fleur-de-vie-tea-app.vercel.app"),
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
    url: "https://www.fleurdevietea.com.ar",
    siteName: "Fleur de Vie Luxury Tea",
    title: "Fleur de Vie - Asesor Virtual de Té",
    description:
      "Descubrí tu té blend o infusión ideal con nuestra experiencia interactiva y ritual de bienestar.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fleur de Vie Luxury Tea - Asesor Virtual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleur de Vie - Asesor Virtual de Té",
    description:
      "Descubrí tu té blend o infusión ideal con nuestra experiencia interactiva.",
    images: ["/opengraph-image"],
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
