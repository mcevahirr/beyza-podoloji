import { fullAddress, mapsDirectionsUrl, mapsEmbedUrl, site } from "@/config/site";
import { PinIcon } from "./Icons";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-line bg-surface ${className}`}>
      <iframe
        title={`${site.name} Google Haritalar konumu`}
        src={mapsEmbedUrl()}
        className="h-80 w-full border-0 md:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-3 text-sm text-ink">
          <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          {fullAddress()}
        </p>
        <a href={mapsDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline shrink-0">
          Yol Tarifi Al
        </a>
      </div>
    </div>
  );
}
