import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0F382C",
          borderRadius: 36,
          borderWidth: 4,
          borderStyle: "solid",
          borderColor: "#D4AF37",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 74,
            height: 74,
            borderRadius: 37,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "#D4AF37",
            color: "#D4AF37",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          FdV
        </div>
      </div>
    ),
    { ...size }
  );
}
