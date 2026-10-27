import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "Richard Zago — Desenvolvedor Full Stack com foco em Back-end";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 80,
        background: "linear-gradient(135deg, #101e34 0%, #080f1e 100%)",
        color: "#f1f5f9",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 30,
          fontWeight: 600,
          color: "#60a5fa",
          marginBottom: 28,
        }}
      >
        PORTFÓLIO
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        Richard Zago
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 32,
          color: "#94a3b8",
          marginTop: 24,
        }}
      >
        Full Stack • Back-end • APIs
      </div>
    </div>,
    size,
  );
}
