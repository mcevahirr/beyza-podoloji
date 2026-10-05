import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const dynamic = "force-static";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg, #eaf0fb 0%, #fbfcfe 55%, #dce6f7 100%)", color: "#13213f" }}>
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#24438f" }}>Podolog · Ayak Sağlığı</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>Beyzanur Daşdemir</div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#55627d" }}>Darıca, Kocaeli · Batık tırnak · Nasır · Tırnak mantarı</div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 30, background: "#24438f", color: "#fff", padding: "16px 32px", borderRadius: 999, alignSelf: "flex-start" }}>WhatsApp ile Randevu</div>
      </div>
    ),
    size,
  );
}
