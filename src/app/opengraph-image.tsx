import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Fleur de Vie Luxury Tea - Asesor Virtual de Té";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#0F382C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
          borderWidth: 12,
          borderStyle: "solid",
          borderColor: "#D4AF37",
          position: "relative",
        }}
      >
        {/* Inner Gold Frame Accent */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "rgba(212, 175, 55, 0.4)",
            display: "flex",
          }}
        />

        {/* Brand Emblem Rosette */}
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: 55,
            borderWidth: 3,
            borderStyle: "solid",
            borderColor: "#D4AF37",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#D4AF37",
            fontSize: 42,
            fontWeight: "bold",
            marginBottom: 20,
            backgroundColor: "rgba(10, 39, 30, 0.6)",
          }}
        >
          FdV
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: 64,
            fontWeight: "bold",
            color: "#D4AF37",
            letterSpacing: "0.08em",
            marginBottom: 8,
          }}
        >
          Fleur de Vie
        </div>

        {/* Category Tagline */}
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#FDFBF7",
            letterSpacing: "0.3em",
            marginBottom: 28,
            opacity: 0.9,
          }}
        >
          TEA EXPERIENCE • ASESOR VIRTUAL DE TÉ
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "serif",
            fontStyle: "italic",
            fontSize: 26,
            color: "rgba(253, 251, 247, 0.85)",
            textAlign: "center",
            maxWidth: 750,
            lineHeight: 1.4,
          }}
        >
          &ldquo;Descubrí tu té blend o infusión ideal con nuestra experiencia ritual e interactiva.&rdquo;
        </div>
      </div>
    ),
    { ...size }
  );
}
