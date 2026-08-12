import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 40,
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
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "#D4AF37",
            color: "#D4AF37",
            fontSize: 26,
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
