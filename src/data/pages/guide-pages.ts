import type { PageContent } from "@/types/content";

export const ballVsBallCodesPage: PageContent = {
  id: "guides",
  translationKey: "ball-vs-ball-codes",
  locale: "en-US",
  routeKind: "fixed",
  slug: "codes",
  url: "/codes",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Ball VS Ball Codes — Active Redemption Codes and Rewards",
  seoTitle: "Ball VS Ball Codes — Active Roblox Codes and How to Redeem",
  metaDescription:
    "Ball VS Ball codes — find currently active Roblox redemption codes, their rewards, expiry status, and a step-by-step guide on how to redeem them.",
  hero: {
    eyebrow: "Status",
    subtitle:
      "Track active Ball VS Ball redemption codes, where new codes drop first, and the redemption flow.",
    ctas: [
      { label: "Updates", href: "/updates" },
      { label: "How to Play", href: "/how-to-play" },
    ],
  },
  summary:
    "Status page for Ball VS Ball redemption codes: current active roster, where new codes drop first, and the redemption flow that activates once an official code is published.",
  quickAnswer:
    "As of 2026-09-10, no Ball VS Ball codes have been publicly confirmed by Creator Group ATYS 3 or the official Roblox game page. Codes for Universe 10685282333 are issued by Creator Group ATYS 3 (group id 1034205759) and announced on the official Roblox game page announcement feed and the creator group's social channels. Third-party aggregator entries are not treated as primary sources until an official source confirms them.",
  keyFacts: [
    { label: "Status", value: "No active codes confirmed as of 2026-09-10" },
    { label: "Publisher", value: "Creator Group ATYS 3 (group id 1034205759)" },
    { label: "Universe id", value: "10685282333" },
    { label: "Primary announcement", value: "Official Roblox game page announcement feed" },
    { label: "Secondary announcement", value: "Creator Group ATYS 3 social channels" },
    { label: "Research date", value: "2026-09-10" },
  ],
  modules: [
    {
      id: "codes-status",
      type: "prose",
      heading: "Current Ball VS Ball Codes Status",
      body:
        "As of 2026-09-10, no Ball VS Ball codes have been publicly confirmed by Creator Group ATYS 3 or the official Roblox game page. This status page tracks the current code state for Universe 10685282333, explains how redemption works in Roblox experiences, lists where new codes are announced first, and archives expired codes with dated labels so players can verify reward claims quickly.",
    },
    {
      id: "codes-channels",
      type: "prose",
      heading: "Where to find new Ball VS Ball codes first",
      body:
        "Codes for Ball VS Ball are issued by Creator Group ATYS 3, the Roblox group behind Universe 10685282333 (group id 1034205759), and surface through a small, official set of channels. Players who want to see a new code first should follow these sources in order of reliability: the official Roblox game page announcement feed at https://www.roblox.com/games/10685282333, and Creator Group ATYS 3 social channels. Players should treat any code string that does not appear on one of those official channels as unverified. Third-party codes aggregators have not been independently confirmed to exist for Ball VS Ball as of 2026-09-10.",
    },
    {
      id: "codes-redemption",
      type: "callout",
      tone: "caution",
      title: "Redemption flow not officially documented",
      body:
        "The redemption flow for Ball VS Ball has not been confirmed by Creator Group ATYS 3 or the official Roblox game page as of 2026-09-10. Once Creator Group ATYS 3 publishes the first verified code string, the actual entry point and step list will be updated to match the official flow. Players who find a code that is not yet listed on this page should wait for a confirmation post from Creator Group ATYS 3 social channels or the official Roblox game page before redeeming.",
    },
    {
      id: "codes-archive",
      type: "data-table",
      heading: "Expired and unconfirmed codes archive",
      columns: [
        { key: "code", label: "Code" },
        { key: "reward", label: "Reward" },
        { key: "status", label: "Status" },
        { key: "checked", label: "Checked" },
      ],
      rows: [],
    },
  ],
  faqIds: [
    "how-often-new-ball-vs-ball-codes",
    "why-no-ball-vs-ball-codes",
    "do-ball-vs-ball-codes-return",
    "can-ball-vs-ball-code-redeem-multiple",
  ],
  relatedPageIds: ["home", "about", "ball-vs-ball-updates"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const ballVsBallBestBallsPage: PageContent = {
  id: "ball-vs-ball-best-balls",
  translationKey: "ball-vs-ball-best-balls",
  locale: "en-US",
  routeKind: "fixed",
  slug: "best-balls",
  url: "/best-balls",
  pageType: "guides",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "Ball VS Ball Best Balls: A Selection Framework for New Players",
  seoTitle: "Ball VS Ball Best Balls — A Selection Framework for New Players",
  metaDescription:
    "Ball VS Ball best balls framework for new players: the four signals that decide whether a ball is worth unlocking or worth rerolling past.",
  hero: {
    eyebrow: "List",
    subtitle:
      "The ball pool is curated and the meta is forming — use this selection framework to read each new ball and decide whether it is worth your coins.",
    ctas: [
      { label: "Full Ball Roster", href: "/balls" },
      { label: "Tips", href: "/tips" },
    ],
  },
  summary:
    "Selection framework for Ball VS Ball: the four signals that decide whether a ball is worth unlocking or worth rerolling past, plus a starter roster building pattern.",
  quickAnswer:
    "Ball VS Ball best balls are framework guidance, not a stable tier ranking. The universe launched in August 2026 and the ball pool is curated and small. Use the four signals on this page to decide whether to unlock a ball from the shop or reroll past it. For named ball picks, check the official Roblox game page directly.",
  keyFacts: [
    { label: "Ranking type", value: "Framework, not a published tier list" },
    { label: "Universe age", value: "Under 1 month" },
    { label: "Signals", value: "Role coverage, matchup coverage, cost, freshness" },
    { label: "Primary source", value: "Official Roblox game page" },
    { label: "Research date", value: "2026-09-10" },
  ],
  modules: [
    {
      id: "best-balls-intro",
      type: "prose",
      heading: "Why Ball VS Ball Best Balls Are Framework, Not Statistics",
      body:
        "The phrase best balls suggests a tier list, but at the time of writing Ball VS Ball has been public for under a month. The ball pool is small and curated, the meta is forming, and no community has published a stable statistical ranking that the creator group has endorsed. What this page offers instead is a framework. The framework lets you read a new ball the moment you see it in the shop or in a random spawn, decide whether it is worth your coins or your reroll, and update that decision as the creator group balances the pool. The framework holds even when the underlying roster changes.",
    },
    {
      id: "best-balls-signals",
      type: "comparison",
      heading: "Four Signals That Make a Ball Worth Unlocking",
      options: [
        {
          name: "Signal 1: a role you do not already own",
          summary:
            "If your current collection leans toward short-range duelists and a ball with reach enters the shop, that ball solves a gap your existing collection cannot.",
          bestFor: "Closing roster gaps",
        },
        {
          name: "Signal 2: matchup coverage for the live pool",
          summary:
            "Track the opponents that punish your current collection most often and look for balls whose role is built to handle those matchups.",
          bestFor: "Counters",
        },
        {
          name: "Signal 3: shop cost relative to your reroll budget",
          summary:
            "If a ball costs most of your current coins and your reroll budget would be empty afterward, the unlock is a sunk cost.",
          bestFor: "Budget discipline",
        },
        {
          name: "Signal 4: how new the ball is",
          summary:
            "A ball that just entered the shop is the most likely to be balanced later, which makes it a higher-risk unlock than a ball whose role has already settled into the meta.",
          bestFor: "Freshness risk",
        },
      ],
    },
    {
      id: "best-balls-starting-roster",
      type: "steps",
      heading: "Building a Starting Roster",
      items: [
        {
          title: "Pick a small set of distinct roles first",
          body: "Open your shop and pick a small set of balls whose roles you can name in one phrase each: ranged, close-range, and gap coverage. Three balls with three distinct roles cover most first sessions.",
        },
        {
          title: "Spend coins on role gaps, not on every new entry",
          body: "Spend only if the new ball adds a role gap your starting roster does not already cover. If the new ball duplicates a role you own, save the coins.",
        },
        {
          title: "Update the roster when balance changes",
          body: "Rebuild your active rotation around the framework after each balance patch. The updates page tracks the creator group's announced changes.",
        },
      ],
    },
  ],
  faqIds: [
    "what-are-ball-vs-ball-best-balls",
    "should-i-unlock-every-ball",
    "do-best-balls-change-with-updates",
    "are-best-balls-the-rarest-look",
  ],
  relatedPageIds: ["home", "wiki", "ball-vs-ball-tips", "about"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const ballVsBallBallsPage: PageContent = {
  id: "wiki",
  translationKey: "ball-vs-ball-balls",
  locale: "en-US",
  routeKind: "fixed",
  slug: "balls",
  url: "/balls",
  pageType: "guides",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "Ball VS Ball Balls: Roster Structure, Unlock Sources, and Shop Costs",
  seoTitle: "Ball VS Ball Balls — Full Roster and How to Unlock",
  metaDescription:
    "Ball VS Ball balls: how the random spawn pool works, what the shop unlocks, where the official roster lives, and what's not yet announced.",
  hero: {
    eyebrow: "List",
    subtitle:
      "The ball pool is small and curated at launch. Use this page as a structural reference for how the pool works and where the current named list lives.",
    ctas: [
      { label: "Best Balls", href: "/best-balls" },
      { label: "How to Play", href: "/how-to-play" },
    ],
  },
  summary:
    "Structural reference for the Ball VS Ball ball pool: random spawn, reroll mechanic, shop unlocks, and where the canonical named list lives on the official Roblox game page.",
  quickAnswer:
    "Ball VS Ball balls form a curated, evolving pool. The official game page describes balls as randomly appearing during each match, with players able to reroll mid-battle and unlock new balls in the shop using coins earned from wins. The exact list of named balls is not enumerated on the official page. Use this page as a structural reference, and check the Roblox game page directly for current ball names and shop prices.",
  keyFacts: [
    { label: "Pool size", value: "Curated, not enumerated" },
    { label: "Spawn", value: "Random each match" },
    { label: "Reroll", value: "Available mid-battle" },
    { label: "Unlock source", value: "Shop (coins earned by winning)" },
    { label: "Canonical source", value: "Official Roblox game page" },
    { label: "Research date", value: "2026-09-10" },
  ],
  modules: [
    {
      id: "balls-structure",
      type: "prose",
      heading: "How the Ball VS Ball Balls Pool Is Structured",
      body:
        "The Ball VS Ball balls pool has three structural layers that work together during every match. First, a randomly appearing set of balls is presented to each player as the match begins. Second, players can reroll mid-battle if the random pull is unsatisfying. Third, the shop uses coins earned from wins to add new balls to the player's permanent collection. Because the pool is small and curated at launch, each ball that does exist tends to have a distinctive role. Two balls in the same pool rarely behave identically, which is what makes reroll and shop decisions matter.",
    },
    {
      id: "balls-spawn-vs-shop",
      type: "callout",
      tone: "tip",
      title: "Why the random spawn and the shop are two separate systems",
      body:
        "The random spawn pool and the shop are two different pools with two different purposes. The random spawn decides what you fight with this match; the shop decides what you can fight with next match. Treating them as one pool is a common mistake. A ball you cannot unlock from the shop can still appear in your random spawn next round, and a ball you have unlocked can still appear in someone else's random pool. The two pools overlap but are not the same set.",
    },
    {
      id: "balls-unlock",
      type: "prose",
      heading: "Unlock Sources and Shop Costs",
      body:
        "The official description lists only one unlock source for new entries in the Ball VS Ball balls pool: the shop. Coins earned from wins are the currency, and shop entries are what those coins buy. The creator group has not published a fixed cost curve for shop entries as of 2026-09-10, so pricing should be read directly from the in-game shop rather than from third-party sites.",
    },
    {
      id: "balls-roster-table",
      type: "data-table",
      heading: "Ball Roster Status (as of 2026-09-10)",
      columns: [
        { key: "ball", label: "Ball" },
        { key: "unlock", label: "Unlock source" },
        { key: "cost", label: "Shop cost" },
        { key: "status", label: "Status" },
      ],
      rows: [
        {
          ball: "Named balls",
          unlock: "Shop (coins)",
          cost: "Not announced as of 2026-09-10",
          status: "Confirmed pool; specific names not published",
        },
      ],
    },
  ],
  faqIds: [
    "how-many-ball-vs-ball-balls",
    "where-do-i-unlock-new-balls",
    "what-does-it-cost-to-unlock-a-ball",
    "can-i-get-a-specific-ball-from-a-code",
    "where-do-new-balls-get-announced",
    "are-there-rare-or-legendary-balls",
  ],
  relatedPageIds: ["home", "ball-vs-ball-best-balls", "about", "ball-vs-ball-updates"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const ballVsBallHowToPlayPage: PageContent = {
  id: "about",
  translationKey: "ball-vs-ball-how-to-play",
  locale: "en-US",
  routeKind: "fixed",
  slug: "how-to-play",
  url: "/how-to-play",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Ball VS Ball how to play: First-match arena walkthrough",
  seoTitle: "Ball VS Ball How to Play — Arena PvP First-Match Guide",
  metaDescription:
    "Ball VS Ball how to play: arena PvP walkthrough covering the ball pool, reroll mechanic, coin economy, win condition, and your first server checklist.",
  hero: {
    eyebrow: "Guide",
    subtitle:
      "Four-beat walkthrough for your first arena, plus a first-server checklist and links to controls and tips.",
    ctas: [
      { label: "Controls", href: "/controls" },
      { label: "Tips", href: "/tips" },
    ],
  },
  summary:
    "First-match arena walkthrough for Ball VS Ball: the four-beat match loop, what the arena / ball pool / reroll / coin-and-shop loop do, and a first-server checklist.",
  quickAnswer:
    "Ball VS Ball how to play starts with one short loop: spawn into an arena, pick from randomly appearing balls, and try to be the last ball standing. Wins pay coins that unlock new balls in the shop, and you can reroll mid-battle if the draw is poor. This walkthrough covers the loop, the goal, your first server checklist, and where to confirm the controls before queuing up.",
  keyFacts: [
    { label: "Match loop", value: "Enter arena → pick ball → fight → earn coins → unlock balls" },
    { label: "Win condition", value: "Last ball standing" },
    { label: "Max server size", value: "25 players" },
    { label: "Currency", value: "Coins earned from wins" },
    { label: "Reroll", value: "Available mid-battle" },
    { label: "Research date", value: "2026-09-10" },
  ],
  modules: [
    {
      id: "how-to-play-four-beats",
      type: "steps",
      heading: "Ball VS Ball how to play in four steps",
      items: [
        {
          title: "Join an arena",
          body: "Pick a server from the in-game browser. Public metadata for Universe 10685282333 lists a maximum of 25 players per server, so lobbies are short and rounds resolve fast.",
        },
        {
          title: "Choose a ball from the random draw",
          body: "The pool presents a small selection of randomly appearing balls; commit to one for the fight.",
        },
        {
          title: "Fight until one ball remains standing",
          body: "You can reroll mid-battle if the draw is poor — the reroll mechanic is named in the official description, so it is safe to treat as a confirmed current-game feature.",
        },
        {
          title: "Spend coins on the next ball",
          body: "Wins pay out coins that unlock more balls in the shop, and the loop starts again.",
        },
      ],
    },
    {
      id: "how-to-play-arena",
      type: "prose",
      heading: "What the arena, the ball pool, and the reroll actually do",
      body:
        "The match loop is short by design, but each beat has a real reason. The arena hosts up to 25 players and runs until only one ball is left. The ball pool is the random draw you choose from at the start of a fight; you commit to one ball for that match, and if the draw is poor, you can reroll mid-battle. Wins earn coins; coins unlock more balls in the shop. The progression loop widens the player's ball pool on a win and teaches which balls to avoid on a loss.",
    },
    {
      id: "how-to-play-checklist",
      type: "recipes",
      heading: "Your first-server checklist",
      items: [
        {
          name: "Confirm the controls before queuing",
          inputs: ["Open the controls reference", "Memorize the reroll key or button"],
          output: "Reroll input is muscle memory before the first match.",
        },
        {
          name: "Pick a ball, do not panic-reroll",
          inputs: ["Treat the first draw as a learning round", "Reroll only when the live match demands it"],
          output: "Reroll budget preserved for the round where it actually matters.",
        },
        {
          name: "Spend coins on the next ball in the shop",
          inputs: ["Take wins straight to the shop", "Pick a ball that closes a roster gap"],
          output: "First new ball unlocked without hoarding.",
        },
      ],
    },
    {
      id: "how-to-play-next",
      type: "prose",
      heading: "Where to confirm controls and continue learning",
      body:
        "Once the basics feel familiar, three linked pages round out the picture. The controls reference maps keyboard, mouse, and mobile bindings and notes where they are 'Not officially documented as of 2026-09-10.' The tips page covers reroll timing, shop priority, and arena positioning. The ball roster explains how the pool works and where the current list lives.",
      links: [
        { label: "Controls", href: "/controls" },
        { label: "Tips", href: "/tips" },
        { label: "Ball Roster", href: "/balls" },
      ],
    },
  ],
  faqIds: [
    "do-i-need-robux-to-start",
    "what-is-ball-vs-ball-goal",
    "can-i-reroll-mid-battle",
    "how-big-is-ball-vs-ball-server",
    "where-should-i-go-after-first-match",
  ],
  relatedPageIds: ["home", "ball-vs-ball-controls", "ball-vs-ball-tips", "wiki", "ball-vs-ball-best-balls", "ball-vs-ball-updates", "guides"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const ballVsBallTipsPage: PageContent = {
  id: "ball-vs-ball-tips",
  translationKey: "ball-vs-ball-tips",
  locale: "en-US",
  routeKind: "fixed",
  slug: "tips",
  url: "/tips",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Ball VS Ball Tips: Reroll Timing, Shop Priority, and Arena Positioning",
  seoTitle: "Ball VS Ball Tips — Reroll Timing and PvP Strategy",
  metaDescription:
    "Ball VS Ball tips covering when to reroll, shop unlock priority, arena positioning, and early aggression risk so you can win more matches.",
  hero: {
    eyebrow: "Guide",
    subtitle:
      "Reroll timing, shop unlock priority, arena positioning, and early-aggression risk for new and returning players.",
    ctas: [
      { label: "How to Play", href: "/how-to-play" },
      { label: "Controls", href: "/controls" },
      { label: "Best Balls", href: "/best-balls" },
    ],
  },
  summary:
    "Strategy framework for Ball VS Ball matches: reroll timing, shop unlock priority, arena positioning, and early-aggression risk for new and returning players.",
  quickAnswer:
    "Ball VS Ball tips boil down to four decisions per match: when to use your reroll, which balls to chase from the shop first, how to position during arena rounds, and when early aggression actually pays off. The ball pool is still small and curated at launch, so the meta is forming. Use the framework below to build around the official mechanics rather than chasing a tier list that does not yet exist.",
  keyFacts: [
    { label: "Decision 1", value: "When to reroll" },
    { label: "Decision 2", value: "Shop priority" },
    { label: "Decision 3", value: "Arena positioning" },
    { label: "Decision 4", value: "Early aggression risk vs reward" },
    { label: "Research date", value: "2026-09-10" },
  ],
  modules: [
    {
      id: "tips-reroll-timing",
      type: "prose",
      heading: "Reroll Timing in Ball VS Ball",
      body:
        "Reroll is the single most consequential action in any match. The official game page describes the ball pool as randomly appearing and lets players reroll mid-battle if unsatisfied. That mechanic creates a loop of evaluating the pool, judging what you already have, and deciding whether your current ball can carry the next fight. Treat reroll as a resource you spend on information, not a button you press the moment the pool looks bad. The random pool is weakest right after you spawn and when you are near the back of the lobby with a ball that has already carried you through several eliminations.",
    },
    {
      id: "tips-shop-priority",
      type: "prose",
      heading: "Shop Unlock Priority for Ball VS Ball Tips",
      body:
        "The shop runs on coins earned by winning matches. The creator group has not published a cost curve as of 2026-09-10, so treat the shop as a queue rather than a price list. Pick a small set of balls whose role you can name, unlock those first, and only then expand into the rest of the pool. Spend your first coins on balls that solve the arena you keep dying in — players who keep getting kited should pick a ball with reach or closing speed, and players who keep trading evenly should pick a ball with a clear advantage in the same matchup.",
    },
    {
      id: "tips-positioning",
      type: "prose",
      heading: "Arena Positioning and Spacing",
      body:
        "Ball VS Ball matches are designed around the goal of being the last ball standing, which means positioning matters more than raw damage in a long match. The arena is not named in the official description, so treat the guidance below as general PvP advice. Notice where on the field you tend to spawn, where the field narrows, and which routes give a clean retreat. Kiting is usually the better default when the field is wide enough; in cramped fields, hold a defensible position and let opponents funnel into your ball's strongest range.",
    },
    {
      id: "tips-aggression",
      type: "callout",
      tone: "caution",
      title: "Early aggression risk vs reward",
      body:
        "Aggression in the first few seconds is the highest-variance choice in any round. The official goal is to be the last ball standing, which favors survival. First-ball rushes win when the opponent is mid-reroll or caught off-guard. They lose when the opponent's ball simply out-ranges you. Without a matchup advantage, the safer opening is to watch the first fight, learn what the opponent rolled, and engage after the first exchange rather than before it.",
    },
  ],
  faqIds: [
    "when-should-i-reroll",
    "how-many-coins-does-new-ball-cost",
    "are-there-best-balls-that-always-win",
    "does-aggression-help-in-first-arena",
    "where-read-recent-patch-notes",
  ],
  relatedPageIds: ["home", "about", "ball-vs-ball-controls", "ball-vs-ball-best-balls", "ball-vs-ball-updates"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const ballVsBallUpdatesPage: PageContent = {
  id: "ball-vs-ball-updates",
  translationKey: "ball-vs-ball-updates",
  locale: "en-US",
  routeKind: "fixed",
  slug: "updates",
  url: "/updates",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Ball VS Ball Update — Patch Notes and Recent Changes",
  seoTitle: "Ball VS Ball Update — Patch Notes and Recent Changes",
  metaDescription:
    "The Ball VS Ball update was recorded on the Roblox Games API on 2026-09-09. Track patch notes, balance changes, and new balls from Creator Group ATYS 3.",
  hero: {
    eyebrow: "Status",
    subtitle:
      "Latest recorded Ball VS Ball update date plus where to read full patch notes and balance changes.",
    ctas: [
      { label: "Codes", href: "/codes" },
      { label: "Ball Roster", href: "/balls" },
    ],
  },
  summary:
    "Status page for Ball VS Ball updates: latest recorded patch date from the Roblox Games API plus the official channels where full patch notes and balance changes are published.",
  quickAnswer:
    "The most recent Ball VS Ball update activity recorded by the Roblox Games API is dated 2026-09-09 for Universe 10685282333 (Creator Group ATYS 3). Detailed patch-note text, ball additions, balance changes, and event schedules are published on Creator Group ATYS 3 social channels and the official Roblox game page, not on this site.",
  keyFacts: [
    { label: "Latest recorded update", value: "2026-09-09 (Roblox Games API)" },
    { label: "Universe id", value: "10685282333" },
    { label: "Creator group", value: "ATYS 3 (group id 1034205759)" },
    { label: "Primary source", value: "Official Roblox game page" },
    { label: "Secondary source", value: "Creator Group ATYS 3 social channels" },
    { label: "Research date", value: "2026-09-10" },
  ],
  modules: [
    {
      id: "updates-status",
      type: "prose",
      heading: "Latest Ball VS Ball Update Status",
      body:
        "The most recent Ball VS Ball update activity recorded by the Roblox Games API is dated 2026-09-09 for Universe 10685282333 (Creator Group ATYS 3). Detailed patch-note text, ball additions, balance changes, and event schedules are published on Creator Group ATYS 3 social channels and the official Roblox game page, not on this site.",
    },
    {
      id: "updates-channels",
      type: "prose",
      heading: "Where Ball VS Ball patch notes are published",
      body:
        "Patch notes for Ball VS Ball appear in three primary locations, listed from most to least specific. The official Roblox game page at https://www.roblox.com/games/10685282333 — patch summaries and event timing are pinned under the game description. Creator Group ATYS 3 social channels (group id 1034205759) — the creator publishes per-update write-ups, balance commentary, and code drops here first. Creator Group ATYS 3 group page on Roblox — accessible without an account; announcement content varies and may not mirror social posts in real time.",
    },
    {
      id: "updates-cadence",
      type: "callout",
      tone: "tip",
      title: "How the Ball VS Ball update cadence works",
      body:
        "The cadence for Ball VS Ball updates is not on a public schedule. Each new patch typically carries any combination of new balls, code drops, balance tuning, and limited-time events. Speculation about upcoming buffs, nerfs, ball additions, or scheduled events is not published here. Any item that has not been confirmed by an official source as of 2026-09-10 is labeled 'Not announced as of 2026-09-10' so readers do not act on rumor.",
    },
  ],
  faqIds: [
    "when-was-latest-ball-vs-ball-update",
    "where-do-i-read-full-ball-vs-ball-patch-notes",
    "do-ball-vs-ball-updates-add-new-balls",
    "are-ball-vs-ball-update-schedules-announced-in-advance",
  ],
  relatedPageIds: ["home", "guides", "wiki"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const ballVsBallControlsPage: PageContent = {
  id: "ball-vs-ball-controls",
  translationKey: "ball-vs-ball-controls",
  locale: "en-US",
  routeKind: "fixed",
  slug: "controls",
  url: "/controls",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Ball VS Ball controls: keyboard, mouse, and mobile bindings",
  seoTitle: "Ball VS Ball Controls — PC and Mobile Bindings",
  metaDescription:
    "Ball VS Ball controls reference: keyboard and mouse bindings, mobile button layout, movement, attack, skill, reroll inputs, and the in-game settings menu.",
  hero: {
    eyebrow: "Reference",
    subtitle:
      "Keyboard, mouse, and mobile bindings with every row labeled 'Not officially documented as of 2026-09-10' so the page never presents them as confirmed.",
    ctas: [
      { label: "How to Play", href: "/how-to-play" },
      { label: "Tips", href: "/tips" },
    ],
  },
  summary:
    "Reference page for Ball VS Ball controls: keyboard and mouse bindings for desktop plus mobile on-screen layout, with every row marked as not officially documented.",
  quickAnswer:
    "Ball VS Ball controls are not officially documented as of 2026-09-10. The official Roblox game page and the Roblox Games API confirm the reroll mechanic but do not publish specific bindings, so the in-game settings menu is the authoritative source for the actual inputs. The tables below list common Roblox PvP defaults for orientation, and every row is labeled 'Not officially documented as of 2026-09-10' so the page never presents them as confirmed Ball VS Ball bindings.",
  keyFacts: [
    { label: "Documented status", value: "Not officially documented as of 2026-09-10" },
    { label: "Confirmed feature", value: "Reroll mechanic (per official description)" },
    { label: "Authoritative source", value: "In-game settings menu" },
    { label: "Universe id", value: "10685282333" },
    { label: "Research date", value: "2026-09-10" },
  ],
  modules: [
    {
      id: "controls-desktop",
      type: "data-table",
      heading: "Ball VS Ball controls on desktop (PC and Mac)",
      columns: [
        { key: "input", label: "Input" },
        { key: "action", label: "Action" },
        { key: "notes", label: "Notes" },
      ],
      rows: [
        { input: "W / A / S / D", action: "Move character", notes: "Not officially documented as of 2026-09-10" },
        { input: "Mouse move", action: "Aim", notes: "Not officially documented as of 2026-09-10" },
        { input: "Left click", action: "Primary attack", notes: "Not officially documented as of 2026-09-10" },
        { input: "Right click", action: "Secondary attack or block", notes: "Not officially documented as of 2026-09-10" },
        { input: "Space", action: "Jump", notes: "Not officially documented as of 2026-09-10" },
        { input: "Shift", action: "Sprint or dash", notes: "Not officially documented as of 2026-09-10" },
        { input: "R", action: "Reroll mid-battle", notes: "Reroll is confirmed; binding not documented as of 2026-09-10" },
        { input: "Q", action: "Skill 1", notes: "Not officially documented as of 2026-09-10" },
        { input: "E", action: "Skill 2", notes: "Not officially documented as of 2026-09-10" },
        { input: "F", action: "Interact", notes: "Not officially documented as of 2026-09-10" },
        { input: "Tab or M", action: "Open menu / scoreboard", notes: "Not officially documented as of 2026-09-10" },
        { input: "Esc", action: "Pause / settings", notes: "Not officially documented as of 2026-09-10" },
      ],
    },
    {
      id: "controls-mobile",
      type: "data-table",
      heading: "Ball VS Ball controls on mobile (phone and tablet)",
      columns: [
        { key: "input", label: "On-screen element" },
        { key: "action", label: "Action" },
        { key: "notes", label: "Notes" },
      ],
      rows: [
        { input: "Left joystick", action: "Move character", notes: "Not officially documented as of 2026-09-10" },
        { input: "Right side tap", action: "Primary attack", notes: "Not officially documented as of 2026-09-10" },
        { input: "Skill button 1", action: "Skill 1", notes: "Not officially documented as of 2026-09-10" },
        { input: "Skill button 2", action: "Skill 2", notes: "Not officially documented as of 2026-09-10" },
        { input: "Reroll button", action: "Reroll mid-battle", notes: "Reroll is confirmed; on-screen binding not documented as of 2026-09-10" },
        { input: "Jump button", action: "Jump", notes: "Not officially documented as of 2026-09-10" },
        { input: "Dash button", action: "Sprint or dash", notes: "Not officially documented as of 2026-09-10" },
        { input: "Menu button", action: "Open menu / scoreboard", notes: "Not officially documented as of 2026-09-10" },
      ],
    },
    {
      id: "controls-confirm",
      type: "callout",
      tone: "tip",
      title: "How to confirm the actual binding in-game",
      body:
        "Because exact bindings are not officially documented for this Universe as of 2026-09-10, every player should confirm the binding in the in-game settings menu before relying on it in a match. The settings menu is reachable through the gear icon in the lobby or through the pause menu during a match. The bindings listed above are common Roblox PvP defaults; treat them as the most likely starting point, not as a guarantee.",
    },
  ],
  faqIds: [
    "are-ball-vs-ball-controls-officially-documented",
    "what-is-default-keyboard-layout",
    "how-do-i-reroll-mid-battle",
    "can-i-rebind-the-keys",
    "do-mobile-and-pc-players-play-together",
  ],
  relatedPageIds: ["home", "about", "ball-vs-ball-tips"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-10",
};

export const guidePages: PageContent[] = [
  ballVsBallCodesPage,
  ballVsBallBestBallsPage,
  ballVsBallBallsPage,
  ballVsBallHowToPlayPage,
  ballVsBallTipsPage,
  ballVsBallUpdatesPage,
  ballVsBallControlsPage,
];