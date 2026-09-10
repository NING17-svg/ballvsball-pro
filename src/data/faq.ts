import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Homepage
  {
    id: "is-ball-vs-ball-free",
    question: "Is Ball VS Ball free to play on Roblox?",
    answer:
      "Yes. The Roblox Experience is free. Playing requires only a Roblox account and access to Universe 10685282333 at https://www.roblox.com/games/10685282333. There is no entry fee beyond a standard Roblox session.",
    pageIds: ["home", "about", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "when-was-ball-vs-ball-released",
    question: "When was Ball VS Ball released?",
    answer:
      "Universe 10685282333 was created on 2026-08-12T02:57:56Z under Creator Group ATYS 3. It is a brand-new Universe; there is no prior release or legacy version.",
    pageIds: ["home", "about", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-big-is-ball-vs-ball-server",
    question: "How many players can join a single Ball VS Ball server?",
    answer:
      "The public metadata for Universe 10685282333 lists a maximum server size of 25 players. Exact current match size can vary; confirm the lobby count from the in-game browser before queueing.",
    pageIds: ["home", "about", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-there-trading-or-private-servers",
    question: "Does Ball VS Ball support trading or private servers?",
    answer:
      "Public metadata for the Universe currently records VIP servers as not allowed, and a stable trading economy has not formed within the first month. Both are 'Not announced as of 2026-09-10' for new players.",
    pageIds: ["home", "wiki", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-new-codes-announced",
    question: "Where can new Ball VS Ball codes get announced first?",
    answer:
      "Codes for Ball VS Ball are announced on the official Roblox game page announcement feed at https://www.roblox.com/games/10685282333 and on Creator Group ATYS 3 social channels (group id 1034205759).",
    pageIds: ["home", "guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-is-ball-vs-ball-goal",
    question: "What is the goal of a Ball VS Ball match?",
    answer:
      "The goal is to be the last ball standing. The match resolves when only one ball is left in the arena, rather than on a timer. Wins pay out coins that unlock more balls in the shop.",
    pageIds: ["home", "about", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Codes page
  {
    id: "how-often-new-ball-vs-ball-codes",
    question: "How often does Ball VS Ball release new codes?",
    answer:
      "There is no published release schedule. Codes are tied to creator-defined milestones such as new ball launches, balance patches, and limited-time events, and the cadence is decided by Creator Group ATYS 3.",
    pageIds: ["guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "why-no-ball-vs-ball-codes",
    question: "Why are no Ball VS Ball codes currently listed?",
    answer:
      "The official Roblox game page and Creator Group ATYS 3 social channels have not published a code string verified against the official Universe 10685282333 description as of 2026-09-10. Until a primary source confirms one, this page will not list a code.",
    pageIds: ["guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-ball-vs-ball-codes-return",
    question: "Do expired Ball VS Ball codes ever come back?",
    answer:
      "Once a code's redemption window closes, the creator typically does not re-issue it. Returning codes are rare and would be announced on Creator Group ATYS 3 social channels.",
    pageIds: ["guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-ball-vs-ball-code-redeem-multiple",
    question: "Can a single Ball VS Ball code be redeemed multiple times?",
    answer:
      "Each code is single-use per Roblox account unless the creator states otherwise. Repeated attempts after a successful redemption return an 'already redeemed' error.",
    pageIds: ["guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Best Balls
  {
    id: "what-are-ball-vs-ball-best-balls",
    question: "What are the Ball VS Ball best balls right now?",
    answer:
      "Use the framework on this page and check the official game page for current ball names. No stable tier ranking exists.",
    pageIds: ["ball-vs-ball-best-balls", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "should-i-unlock-every-ball",
    question: "Should I unlock every ball in the shop?",
    answer:
      "No. Spend coins on role gaps your starting roster does not already cover. Skipping entries that duplicate a role you own is the discipline that keeps your coin budget useful.",
    pageIds: ["ball-vs-ball-best-balls", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-best-balls-change-with-updates",
    question: "Do the best balls change with balance updates?",
    answer:
      "Yes. A ball that looks strong at launch can be rebalanced in a later patch, and a ball that looked weak can be buffed. Re-read the framework after each patch and rebuild your active rotation around it.",
    pageIds: ["ball-vs-ball-best-balls", "ball-vs-ball-updates", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-best-balls-the-rarest-look",
    question: "Are the best balls the ones with the rarest look?",
    answer:
      "Rarity tiers have not been published on the official Roblox game page as of 2026-09-10. Treat third-party rarity claims as speculation unless the creator group states them directly.",
    pageIds: ["ball-vs-ball-best-balls", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Balls
  {
    id: "how-many-ball-vs-ball-balls",
    question: "How many Ball VS Ball balls are there?",
    answer:
      "The exact count is not published on the official Roblox game page. The pool is described as curated, so the total number is small and changes with updates. Check the official game page for the current list.",
    pageIds: ["wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-do-i-unlock-new-balls",
    question: "Where do I unlock new balls?",
    answer:
      "New balls are unlocked through the in-game shop using coins earned from wins. No other unlock source has been published by the creator group as of 2026-09-10.",
    pageIds: ["wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-does-it-cost-to-unlock-a-ball",
    question: "What does it cost to unlock a ball?",
    answer:
      "Specific costs are not published on the official Roblox game page. Open the shop in-game to see current prices; third-party price lists fall out of date quickly.",
    pageIds: ["wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-i-get-a-specific-ball-from-a-code",
    question: "Can I get a specific ball from a code?",
    answer:
      "No. Codes, when active, reward coins, boosts, or similar resources. Codes are not documented as a direct unlock path for any specific ball in the Ball VS Ball balls pool.",
    pageIds: ["wiki", "guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-do-new-balls-get-announced",
    question: "Where do new balls get announced first?",
    answer:
      "Ball additions, when confirmed, are published on the official Roblox game page announcement feed and on Creator Group ATYS 3 social channels. The current page cannot confirm any specific new-ball additions as of 2026-09-10.",
    pageIds: ["wiki", "ball-vs-ball-updates", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-there-rare-or-legendary-balls",
    question: "Are there rare or legendary balls?",
    answer:
      "Rarity tiers have not been published on the official Roblox game page. Treat any third-party claim about rarity as community speculation unless the creator group states it directly.",
    pageIds: ["wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // How to Play
  {
    id: "do-i-need-robux-to-start",
    question: "Do I need to spend Robux to start playing?",
    answer:
      "No. The Roblox Experience is free to join. Playing requires a Roblox account and access to Universe 10685282333; the in-game shop uses coins earned in matches, not Robux.",
    pageIds: ["about", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-i-reroll-mid-battle",
    question: "Can I reroll the ball choice mid-battle?",
    answer:
      "Yes. The reroll mechanic is named directly in the official description, so it is a confirmed current-game feature. Use it when the live match demands it; do not reroll the initial selection screen if the first draw is reasonable.",
    pageIds: ["about", "ball-vs-ball-tips", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-should-i-go-after-first-match",
    question: "Where should I go after my first match?",
    answer:
      "Open the controls reference to confirm bindings, read the tips page for reroll timing and shop priority, and check the ball roster to plan the next shop unlock.",
    pageIds: ["about", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Tips
  {
    id: "when-should-i-reroll",
    question: "When should I reroll in Ball VS Ball?",
    answer:
      "Reroll when the random pool contains a ball with a role you do not already have and your current ball is not winning its fights. If your current ball is winning trades, save the reroll for a round where the upside is clearer.",
    pageIds: ["ball-vs-ball-tips", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-many-coins-does-new-ball-cost",
    question: "How many coins does a new ball cost?",
    answer:
      "Specific ball prices have not been published by the creator group as of 2026-09-10. Treat the shop as a queue: spend on balls whose role you can name, and revisit the updates page whenever the creator announces new prices.",
    pageIds: ["ball-vs-ball-tips", "wiki", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-there-best-balls-that-always-win",
    question: "Are there best balls that always win?",
    answer:
      "No ball wins every match. The official goal is to be the last ball standing, which depends on the match read, ball role, and opponent choice. The best-balls page gives a framework for choosing balls worth unlocking; it does not promise a single best pick.",
    pageIds: ["ball-vs-ball-tips", "ball-vs-ball-best-balls", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "does-aggression-help-in-first-arena",
    question: "Does aggression help in the first arena?",
    answer:
      "Aggression helps when your ball has a matchup advantage. Without that advantage, early rushes are high-variance. Watch the first fight, learn what your opponent rolled, and engage after the first exchange.",
    pageIds: ["ball-vs-ball-tips", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-read-recent-patch-notes",
    question: "Where can I read recent Ball VS Ball patch notes?",
    answer:
      "Patch notes are published on the official Roblox game page announcement feed and on Creator Group ATYS 3 social channels. This site's updates page only mirrors the latest recorded update date from the official Roblox Games API; it does not republish the patch text.",
    pageIds: ["ball-vs-ball-tips", "ball-vs-ball-updates", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Updates
  {
    id: "when-was-latest-ball-vs-ball-update",
    question: "When was the latest Ball VS Ball update?",
    answer:
      "The latest recorded update activity for Universe 10685282333 is dated 2026-09-09 according to the Roblox Games API snapshot checked on 2026-09-10.",
    pageIds: ["ball-vs-ball-updates", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-do-i-read-full-ball-vs-ball-patch-notes",
    question: "Where do I read full Ball VS Ball patch notes?",
    answer:
      "Full patch notes are published on the official Roblox game page at https://www.roblox.com/games/10685282333 and on Creator Group ATYS 3 social channels. This status page only mirrors the latest recorded update date.",
    pageIds: ["ball-vs-ball-updates", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-ball-vs-ball-updates-add-new-balls",
    question: "Do Ball VS Ball updates add new balls?",
    answer:
      "Updates can add new balls to the shop pool, but the specific balls added in the 2026-09-09 update are not republished on this page. Check the official game page or the full ball list for confirmed additions.",
    pageIds: ["ball-vs-ball-updates", "wiki", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-ball-vs-ball-update-schedules-announced-in-advance",
    question: "Are Ball VS Ball update schedules announced in advance?",
    answer:
      "Creator Group ATYS 3 does not publish a recurring update schedule. Major patches and event timing are announced as they ship rather than on a fixed calendar.",
    pageIds: ["ball-vs-ball-updates", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Controls
  {
    id: "are-ball-vs-ball-controls-officially-documented",
    question: "Are the Ball VS Ball controls officially documented?",
    answer:
      "Not officially documented as of 2026-09-10. The official Roblox game page and the Roblox Games API describe the reroll mechanic and the match loop but do not list exact bindings. The in-game settings menu is the authoritative source.",
    pageIds: ["ball-vs-ball-controls", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-is-default-keyboard-layout",
    question: "What is the default keyboard layout on PC?",
    answer:
      "The default keyboard layout follows common Roblox PvP conventions: WASD to move, mouse to aim, left click to attack, space to jump, R to reroll, and Q or E for ball-specific skills. Confirm the actual binding in the in-game settings menu.",
    pageIds: ["ball-vs-ball-controls", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-do-i-reroll-mid-battle",
    question: "How do I reroll mid-battle?",
    answer:
      "The reroll mechanic is confirmed by the official description. The specific input to trigger it (keyboard key or on-screen button) is not officially documented as of 2026-09-10; check the in-game settings menu or the on-screen button during a match.",
    pageIds: ["ball-vs-ball-controls", "about", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-i-rebind-the-keys",
    question: "Can I rebind the keys?",
    answer:
      "Roblox titles commonly expose a rebinding menu in the in-game settings; whether Ball VS Ball exposes one is not officially documented as of 2026-09-10.",
    pageIds: ["ball-vs-ball-controls", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-mobile-and-pc-players-play-together",
    question: "Do mobile and PC players play together?",
    answer:
      "Cross-play support between PC and mobile is not officially documented for this Universe as of 2026-09-10.",
    pageIds: ["ball-vs-ball-controls", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
];