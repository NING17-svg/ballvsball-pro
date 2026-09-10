import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/how-to-play", labels: { "en-US": "How to Play" } },
  { href: "/codes", labels: { "en-US": "Codes" } },
  { href: "/balls", labels: { "en-US": "Balls" } },
  { href: "/best-balls", labels: { "en-US": "Best Balls" } },
  { href: "/tips", labels: { "en-US": "Tips" } },
  { href: "/updates", labels: { "en-US": "Updates" } },
  { href: "/controls", labels: { "en-US": "Controls" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/how-to-play", labels: { "en-US": "How to Play" } },
  { href: "/codes", labels: { "en-US": "Codes" } },
  { href: "/balls", labels: { "en-US": "Balls" } },
  { href: "/tips", labels: { "en-US": "Tips" } },
  { href: "/updates", labels: { "en-US": "Updates" } },
  { href: "/controls", labels: { "en-US": "Controls" } },
  { href: "/faq", labels: { "en-US": "FAQ" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}