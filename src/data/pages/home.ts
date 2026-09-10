import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Ball VS Ball: Roblox Arena PvP, Codes, and Ball Roster",
  seoTitle: "Ball VS Ball — Roblox Codes, Balls & How to Play",
  metaDescription:
    "Ball VS Ball is a Roblox arena PvP game where players choose random balls, reroll mid-battle, and unlock new balls. Find codes, ball list, and how to play.",
  summary:
    "Independent fan guide for Ball VS Ball (Roblox Universe 10685282333, Creator Group ATYS 3): arena PvP loop, active codes, ball roster, how to play, tips, updates, and controls.",
  hero: {
    eyebrow: "Roblox arena PvP hub",
    subtitle:
      "Ball VS Ball is the Roblox arena PvP experience under Universe 10685282333 by Creator Group ATYS 3. Confirm the universe, find active codes, browse the ball roster, and start the walkthrough below.",
    ctas: [
      { label: "How to Play", href: "/how-to-play" },
      { label: "Active Codes", href: "/codes" },
      { label: "Ball Roster", href: "/balls" },
    ],
  },
  quickAnswer:
    "Ball VS Ball is the Roblox arena PvP experience under Universe 10685282333, owned by Creator Group ATYS 3 and created on 2026-08-12. Players spawn into an arena, choose from randomly appearing balls, can reroll mid-battle, and win coins to unlock more balls. The match resolves when only one ball is left standing. Use this hub to confirm the game, check current codes, browse the ball roster, and start the first-match walkthrough.",
  keyFacts: [
    { label: "Universe id", value: "10685282333" },
    { label: "Creator group", value: "ATYS 3" },
    { label: "Created", value: "2026-08-12" },
    { label: "Last API update", value: "2026-09-09" },
    { label: "Theme", value: "Arena PvP with random ball pool + reroll" },
    { label: "Win condition", value: "Last ball standing" },
    { label: "Source rule", value: "Official Roblox + creator group only" },
    { label: "Research date", value: "2026-09-10" },
  ],
  modules: [
    {
      id: "home-quick-answer",
      type: "prose",
      heading: "What Ball VS Ball is right now",
      body:
        "Ball VS Ball is a brand-new Roblox arena PvP experience published under Creator Group ATYS 3 (Universe 10685282333). Players spawn into an arena, pick from randomly appearing balls, and can reroll mid-battle. Wins pay out coins that unlock more balls in the shop, and the match ends when only one ball is left standing. Use this hub to find current codes, the ball roster, the latest update, and a step-by-step guide to your first match.",
      links: [
        { label: "Active Codes", href: "/codes", description: "Current redemption status and announcement channels." },
        { label: "Ball Roster", href: "/balls", description: "Full ball pool structure and unlock sources." },
        { label: "How to Play", href: "/how-to-play", description: "First-match arena walkthrough." },
      ],
    },
    {
      id: "home-universe",
      type: "prose",
      heading: "Where this Universe sits right now",
      body:
        "Ball VS Ball is a brand-new Roblox Universe: Universe 10685282333 was created on 2026-08-12T02:57:56Z and most recently updated on 2026-09-09 under Creator Group ATYS 3 (group id 1034205759). The official description on the Roblox game page frames the loop as enter arena, pick a random ball, reroll mid-battle if needed, win coins to unlock more balls, and be the last ball standing. There is no prior release, no legacy version, and no third-party wiki to consult — every claim on this hub traces back to the official Roblox game page, the official Roblox Games API multi-get endpoint, or the creator group's own social channels. Where this hub cannot speak with an official source, it uses the dated phrase 'Not announced as of 2026-09-10' so readers see the limit.",
      links: [
        { label: "Latest Update", href: "/updates", description: "Latest patch date and announcement channel." },
      ],
    },
    {
      id: "home-pages",
      type: "entity-grid",
      heading: "Pages on this site",
      items: [
        { title: "Active Codes", summary: "Status of Ball VS Ball redemption codes and where new codes drop first.", href: "/codes" },
        { title: "Best Balls", summary: "Four-signal selection framework for new players and shop priority.", href: "/best-balls" },
        { title: "Ball Roster", summary: "Full ball pool structure, unlock sources, and shop costs.", href: "/balls" },
        { title: "How to Play", summary: "First-match arena walkthrough and the four-beat match loop.", href: "/how-to-play" },
        { title: "Tips", summary: "Reroll timing, shop priority, and arena positioning strategy.", href: "/tips" },
        { title: "Updates", summary: "Latest patch date and where patch notes are published.", href: "/updates" },
        { title: "Controls", summary: "Keyboard, mouse, and mobile bindings with documented status.", href: "/controls" },
      ],
    },
    {
      id: "home-match-loop",
      type: "steps",
      heading: "How a match is meant to flow",
      items: [
        {
          title: "Join an arena",
          body: "Pick a server from the in-game browser. Public metadata lists a maximum of 25 players per server.",
        },
        {
          title: "Choose a ball from the random draw",
          body: "The pool presents a small selection of randomly appearing balls; commit to one for the fight.",
        },
        {
          title: "Fight until one ball remains standing",
          body: "Use the reroll action mid-battle if the draw is poor; the reroll mechanic is named in the official description.",
        },
        {
          title: "Spend coins on the next ball",
          body: "Wins pay out coins that unlock more balls in the shop, and the loop starts again.",
        },
      ],
    },
    {
      id: "home-freshness",
      type: "callout",
      tone: "tip",
      title: "Research freshness",
      body:
        "Every page on this hub carries a research date stamp of 2026-09-10. Specific named balls, exact shop prices, current redemption codes, and exact balance numbers are written as 'Not announced as of 2026-09-10' wherever the creator group has not published them publicly. Refresh the relevant guide page whenever the official Roblox game page or Creator Group ATYS 3 social channels publish new information.",
    },
  ],
  faqIds: [
    "is-ball-vs-ball-free",
    "when-was-ball-vs-ball-released",
    "how-big-is-ball-vs-ball-server",
    "are-there-trading-or-private-servers",
    "where-new-codes-announced",
    "what-is-ball-vs-ball-goal",
  ],
  relatedPageIds: [
    "guides",
    "ball-vs-ball-best-balls",
    "wiki",
    "about",
    "ball-vs-ball-tips",
    "ball-vs-ball-updates",
    "ball-vs-ball-controls",
  ],
  schemaTypes: ["WebSite", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};