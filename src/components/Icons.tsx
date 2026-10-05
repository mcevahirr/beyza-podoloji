import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36A9.4 9.4 0 0 1 2.6 12.05c0-5.2 4.24-9.44 9.46-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.05-17.5A11.32 11.32 0 0 0 12.05.67C5.78.67.67 5.77.67 12.05c0 2.01.52 3.97 1.52 5.7L.57 23.33l5.7-1.5a11.36 11.36 0 0 0 5.78 1.47h.01c6.27 0 11.38-5.1 11.38-11.38 0-3.04-1.18-5.9-3.34-8.05z" />
  </svg>
);
export const InstagramIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
);
export const PhoneIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
);
export const PinIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const ClockIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M20 6 9 17l-5-5" /></svg>
);
export const ArrowIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ShieldIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6l-8-3z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const HeartIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" /></svg>
);
export const SparkIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
);
export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden {...p}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" /></svg>
);
export const FootIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M8 21c-2.5 0-4-2-4-4.5S6 11 6 8.5 7 4 9.5 4 13 6 13 9s-1 4.5-1 7-1.5 5-4 5z" /><circle cx="15.5" cy="4.5" r="1.3" /><circle cx="18.3" cy="6.6" r="1.1" /><circle cx="19.6" cy="9.7" r="1" /><circle cx="19.5" cy="12.8" r=".9" /></svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base} aria-hidden {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
