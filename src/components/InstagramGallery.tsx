import Image from "next/image";
import { site } from "@/config/site";
import { instagramPosts } from "@/content/media";
import { InstagramIcon } from "./Icons";

export function InstagramGallery({ limit }: { limit?: number }) {
  const posts = limit ? instagramPosts.slice(0, limit) : instagramPosts;
  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {posts.map((p, i) => (
          <li key={i}>
            <a
              href={p.href || site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-2xl bg-brand-soft"
            >
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 via-ink/10 to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-sm leading-snug text-white">{p.caption}</span>
              </span>
              <InstagramIcon className="absolute right-3 top-3 h-5 w-5 text-white drop-shadow" />
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline">
          <InstagramIcon className="h-4 w-4" /> {site.social.instagramHandle} hesabını takip edin
        </a>
      </div>
    </div>
  );
}
