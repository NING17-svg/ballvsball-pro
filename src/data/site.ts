import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Ball VS Ball Guide",
  brandMark: "BVB",
  gameName: "Ball VS Ball",
  domain: "ballvsball.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://ballvsball.pro").replace(/\/$/, ""),
  description:
    "Independent fan guide for the Roblox arena PvP ball-selector game Ball VS Ball (Universe 10685282333, Creator Group ATYS 3) — covering active codes, ball roster, how to play, tips, updates, and controls.",
  tagline: "Codes, ball roster, how to play, tips, and controls for Ball VS Ball on Roblox.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Ball VS Ball Fan Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Roblox game page",
      href: "https://www.roblox.com/games/10685282333",
      description: "Official Roblox universe page for Ball VS Ball (Universe 10685282333, Creator Group ATYS 3, group id 1034205759).",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide. All facts are sourced from Roblox universe pages, the official Roblox Games API, and the creator group's social channels; nothing here is an official statement by Roblox or Creator Group ATYS 3.",
};
