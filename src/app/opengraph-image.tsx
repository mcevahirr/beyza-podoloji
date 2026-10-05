import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const dynamic = "force-static";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg, #e6f4f1 0%, #fbfaf7 55%, #f3ddd3 100%)", color: "#17302d" }}>
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#2f8f83" }}>Podolog · Ayak Sağlığı</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>Beyza Nur Daşdemir</div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#5b6f6c" }}>Batık tırnak · Nasır · Diyabetik ayak · Medikal pedikür</div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 30, background: "#2f8f83", color: "#fff", padding: "16px 32px", borderRadius: 999, alignSelf: "flex-start" }}>WhatsApp ile Randevu</div>
      </div>
    ),
    size,
  );
}
