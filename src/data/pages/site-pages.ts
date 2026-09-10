import type { PageContent } from "@/types/content";

export const contactPage: PageContent = {
  id: "contact",
  translationKey: "contact",
  locale: "en-US",
  routeKind: "fixed",
  slug: "contact",
  url: "/contact",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Contact Ball VS Ball Guide",
  seoTitle: "Contact | Ball VS Ball Guide",
  metaDescription:
    "Contact page for the Ball VS Ball guide: corrections, official source updates, and feedback.",
  summary:
    "A trust page for corrections, source updates, and feedback about the Ball VS Ball guide.",
  hero: {
    eyebrow: "Contact",
    subtitle:
      "Reach out for corrections, official source updates, and feedback about the Ball VS Ball guide.",
    ctas: [{ label: "Read How to Play", href: "/how-to-play" }],
  },
  quickAnswer:
    "Use the support mailbox linked on this site to send corrections, official source updates, and feedback about the Ball VS Ball guide. Do not include private account credentials.",
  keyFacts: [
    { label: "Primary use", value: "Corrections and feedback" },
    { label: "Channel", value: "support@ballvsball.pro" },
    { label: "Scope", value: "Guide content only — not Roblox or Creator Group ATYS 3 support" },
  ],
  modules: [
    {
      id: "contact-method",
      type: "prose",
      heading: "Contact method",
      body:
        "Send corrections, official source updates, and feedback to support@ballvsball.pro. The mailbox is configured through the Cloudflare Email Routing integration on this domain and forwards to the verified owner account.",
    },
    {
      id: "contact-corrections",
      type: "prose",
      heading: "Corrections",
      body:
        "Invite readers to send official source links when facts change. Do not ask for private account information or game account credentials. Updates to the dated status statements on each guide page are recorded with the source URL and the date the page was refreshed.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["home", "privacy-policy", "terms"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-10",
};

export const privacyPolicyPage: PageContent = {
  id: "privacy-policy",
  translationKey: "privacy-policy",
  locale: "en-US",
  routeKind: "fixed",
  slug: "privacy-policy",
  url: "/privacy-policy",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Privacy Policy",
  seoTitle: "Privacy Policy | Ball VS Ball Guide",
  metaDescription:
    "Privacy policy for the Ball VS Ball guide: analytics, contact messages, and policy updates.",
  summary:
    "Starter privacy policy for the Ball VS Ball guide: aggregate GA4 analytics, contact messages, and policy update notes.",
  hero: {
    eyebrow: "Privacy",
    subtitle:
      "Explain what data the Ball VS Ball guide collects, why it is used, and how visitors can contact the maintainers.",
    ctas: [{ label: "Terms", href: "/terms" }],
  },
  quickAnswer:
    "The Ball VS Ball guide collects aggregate analytics when GA4 is configured, stores contact messages sent to support@ballvsball.pro, and updates this policy when the deployed setup changes.",
  keyFacts: [
    { label: "Analytics", value: "GA4 only when configured" },
    { label: "Accounts", value: "No user accounts" },
    { label: "Contact mailbox", value: "support@ballvsball.pro" },
  ],
  modules: [
    {
      id: "privacy-data",
      type: "prose",
      heading: "Data collected",
      body:
        "The Ball VS Ball guide collects aggregate page-view analytics through Google Analytics 4 when the measurement ID is configured, and stores contact messages sent to the support@ballvsball.pro mailbox. No user accounts are created on this site, and no third-party tracking beyond GA4 is loaded.",
    },
    {
      id: "privacy-contact",
      type: "prose",
      heading: "Contact messages",
      body:
        "Messages sent to support@ballvsball.pro are stored by the site operator and used only to respond to the original sender. Do not include private account credentials in your message; the operator will not ask for them.",
    },
    {
      id: "privacy-policy-updates",
      type: "prose",
      heading: "Policy updates",
      body:
        "This policy is updated when the deployed setup changes (for example, when a new analytics integration is enabled or when Cloudflare Email Routing is reconfigured). The latest refresh date is the lastReviewed value on this page.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["home", "contact", "terms"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-10",
};

export const termsPage: PageContent = {
  id: "terms",
  translationKey: "terms",
  locale: "en-US",
  routeKind: "fixed",
  slug: "terms",
  url: "/terms",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Terms",
  seoTitle: "Terms | Ball VS Ball Guide",
  metaDescription:
    "Terms for the Ball VS Ball guide: unofficial status, informational use, and acceptable use.",
  summary:
    "Starter terms for the unofficial Ball VS Ball guide: scope, disclaimers, and acceptable use.",
  hero: {
    eyebrow: "Terms",
    subtitle:
      "Set clear expectations for unofficial status, informational use, and site changes.",
    ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
  },
  quickAnswer:
    "The Ball VS Ball guide is an unofficial informational site. It is not affiliated with Roblox Corporation, Creator Group ATYS 3, or any trademark owner named on the guide pages.",
  keyFacts: [
    { label: "Use", value: "Informational guide content" },
    { label: "Official status", value: "Unofficial fan site" },
    { label: "Universe reference", value: "Roblox Universe 10685282333" },
  ],
  modules: [
    {
      id: "terms-unofficial",
      type: "prose",
      heading: "Unofficial site",
      body:
        "This site is not affiliated with Roblox Corporation, Creator Group ATYS 3, or any trademark owner named on the guide pages. All references to the Ball VS Ball universe are made for descriptive and informational purposes only.",
    },
    {
      id: "terms-accuracy",
      type: "prose",
      heading: "Information accuracy",
      body:
        "Guide information may change as official details are released or refreshed on the Roblox game page and the Roblox Games API for Universe 10685282333. Use official sources for final purchase, gameplay, and account decisions.",
    },
    {
      id: "terms-acceptable-use",
      type: "prose",
      heading: "Acceptable use",
      body:
        "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through the contact mailbox or any future feedback channel.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["home", "contact", "privacy-policy"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-10",
};

export const faqPage: PageContent = {
  id: "faq",
  translationKey: "faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "faq",
  url: "/faq",
  pageType: "faq",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Ball VS Ball Frequently Asked Questions",
  seoTitle: "Ball VS Ball FAQ | Codes, Balls, Controls, and Match Loop",
  metaDescription:
    "Frequently asked questions about Ball VS Ball: codes, ball roster, controls, match loop, tips, and updates.",
  summary:
    "FAQ hub for the Ball VS Ball guide: codes, ball roster, controls, match loop, tips, and updates.",
  hero: {
    eyebrow: "FAQ",
    subtitle:
      "Browse the most common questions about Ball VS Ball: codes, ball roster, controls, match loop, tips, and updates.",
    ctas: [
      { label: "How to Play", href: "/how-to-play" },
      { label: "Active Codes", href: "/codes" },
      { label: "Ball Roster", href: "/balls" },
    ],
  },
  quickAnswer:
    "Frequently asked questions about Ball VS Ball are grouped by topic — identity and universe, codes, ball roster, match loop and how to play, tips and strategy, updates, and controls.",
  keyFacts: [
    { label: "Topic groups", value: "Identity, Codes, Balls, How to Play, Tips, Updates, Controls" },
    { label: "Last reviewed", value: "2026-09-10" },
    { label: "Universe id", value: "10685282333" },
  ],
  modules: [
    {
      id: "faq-faq-list",
      type: "entity-grid",
      heading: "Browse the FAQ",
      items: [
        { title: "Identity & Universe", summary: "Universe 10685282333, Creator Group ATYS 3, dated status.", href: "/how-to-play" },
        { title: "Codes", summary: "Active Ball VS Ball codes status and announcement channels.", href: "/codes" },
        { title: "Ball Roster", summary: "Full ball pool structure, unlock sources, and shop costs.", href: "/balls" },
        { title: "How to Play", summary: "First-match arena walkthrough and the four-beat match loop.", href: "/how-to-play" },
        { title: "Tips", summary: "Reroll timing, shop priority, and arena positioning.", href: "/tips" },
        { title: "Updates", summary: "Latest patch date and where patch notes are published.", href: "/updates" },
        { title: "Controls", summary: "Keyboard, mouse, and mobile bindings with documented status.", href: "/controls" },
      ],
    },
    {
      id: "faq-freshness",
      type: "callout",
      tone: "tip",
      title: "FAQ freshness",
      body:
        "FAQ items are dated to the 2026-09-10 research snapshot. Specific ball names, exact shop prices, current codes, exact balance numbers, and exact control bindings are written as 'Not announced as of 2026-09-10' wherever the creator group has not published them publicly. Refresh the relevant guide page whenever the official Roblox game page or Creator Group ATYS 3 social channels publish new information.",
    },
  ],
  faqIds: [
    "is-ball-vs-ball-free",
    "when-was-ball-vs-ball-released",
    "how-big-is-ball-vs-ball-server",
    "are-there-trading-or-private-servers",
    "where-new-codes-announced",
    "what-is-ball-vs-ball-goal",
    "how-often-new-ball-vs-ball-codes",
    "why-no-ball-vs-ball-codes",
    "do-ball-vs-ball-codes-return",
    "can-ball-vs-ball-code-redeem-multiple",
    "what-are-ball-vs-ball-best-balls",
    "should-i-unlock-every-ball",
    "do-best-balls-change-with-updates",
    "are-best-balls-the-rarest-look",
    "how-many-ball-vs-ball-balls",
    "where-do-i-unlock-new-balls",
    "what-does-it-cost-to-unlock-a-ball",
    "can-i-get-a-specific-ball-from-a-code",
    "where-do-new-balls-get-announced",
    "are-there-rare-or-legendary-balls",
    "do-i-need-robux-to-start",
    "can-i-reroll-mid-battle",
    "where-should-i-go-after-first-match",
    "when-should-i-reroll",
    "how-many-coins-does-new-ball-cost",
    "are-there-best-balls-that-always-win",
    "does-aggression-help-in-first-arena",
    "where-read-recent-patch-notes",
    "when-was-latest-ball-vs-ball-update",
    "where-do-i-read-full-ball-vs-ball-patch-notes",
    "do-ball-vs-ball-updates-add-new-balls",
    "are-ball-vs-ball-update-schedules-announced-in-advance",
    "are-ball-vs-ball-controls-officially-documented",
    "what-is-default-keyboard-layout",
    "how-do-i-reroll-mid-battle",
    "can-i-rebind-the-keys",
    "do-mobile-and-pc-players-play-together",
  ],
  relatedPageIds: [
    "home",
    "guides",
    "ball-vs-ball-best-balls",
    "wiki",
    "about",
    "ball-vs-ball-tips",
    "ball-vs-ball-updates",
    "ball-vs-ball-controls",
  ],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-10",
};

export const sitePages: PageContent[] = [
  faqPage,
  contactPage,
  privacyPolicyPage,
  termsPage,
];