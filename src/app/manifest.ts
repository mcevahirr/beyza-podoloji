import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`,
    display: "standalone",
    background_color: "#fbfcfe",
    theme_color: "#24438f",
    lang: "tr",
    icons: [{ src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg`, sizes: "any", type: "image/svg+xml" }],
  };
}
