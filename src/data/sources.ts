/**
 * The source catalogue. Every claim on this site is traced to one of these
 * entries by stable catalogue number (assigned here by array order).
 *
 * Each URL is the exact public link for a primary source — the practitioner
 * essays, accelerator libraries, fund writing, operator guides, data reports,
 * and Flux Capital Academy lessons the guide is built from. Nothing here
 * resolves to an unpublished or internal document.
 */

export type SourceKind =
  | "essay"
  | "library"
  | "fund"
  | "guide"
  | "data"
  | "operator";

const RAW = [
  // ---- Practitioner essays — Paul Graham ----
  {
    id: "pg-fr",
    author: "Paul Graham",
    title: "How to Raise Money",
    publisher: "paulgraham.com",
    year: "2013",
    url: "https://paulgraham.com/fr.html",
    kind: "essay",
    note: "The canonical operating manual for a startup raise — parallel process, real vs. fake interest, leverage.",
  },
  {
    id: "pg-convince",
    author: "Paul Graham",
    title: "How to Convince Investors",
    publisher: "paulgraham.com",
    year: "2013",
    url: "https://paulgraham.com/convince.html",
    kind: "essay",
    note: "Why formidability and a clear, believable story beat persuasion tactics.",
  },
  {
    id: "pg-investors",
    author: "Paul Graham",
    title: "How to Present to Investors",
    publisher: "paulgraham.com",
    year: "2006",
    url: "https://paulgraham.com/investors.html",
    kind: "essay",
    note: "Make one thing clear, be concise, and show rather than explain.",
  },
  {
    id: "pg-equity",
    author: "Paul Graham",
    title: "The Equity Equation",
    publisher: "paulgraham.com",
    year: "2007",
    url: "https://paulgraham.com/equity.html",
    kind: "essay",
    note: "Give up n% only if it improves your average outcome by more than 1/(1−n).",
  },
  {
    id: "pg-ds",
    author: "Paul Graham",
    title: "Do Things That Don't Scale",
    publisher: "paulgraham.com",
    year: "2013",
    url: "https://paulgraham.com/ds.html",
    kind: "essay",
    note: "Manual, unscalable effort is what produces the early evidence investors underwrite.",
  },
  {
    id: "pg-growth",
    author: "Paul Graham",
    title: "Startup = Growth",
    publisher: "paulgraham.com",
    year: "2012",
    url: "https://paulgraham.com/growth.html",
    kind: "essay",
    note: "A startup is a company designed to grow fast; growth rate is the metric.",
  },

  // ---- Accelerator libraries — Y Combinator ----
  {
    id: "yc-seed-guide",
    author: "Geoff Ralston, Y Combinator",
    title: "A Guide to Seed Fundraising",
    publisher: "ycombinator.com",
    year: "2019",
    url: "https://www.ycombinator.com/library/4A-a-guide-to-seed-fundraising",
    kind: "library",
    note: "Raise on a story, tie the amount to a milestone, keep terms standard, close fast.",
  },
  {
    id: "yc-deck",
    author: "Kevin Hale, Y Combinator",
    title: "How to Design a Better Pitch Deck",
    publisher: "ycombinator.com",
    year: "2020",
    url: "https://www.ycombinator.com/library/4T-how-to-design-a-better-pitch-deck",
    kind: "library",
    note: "One idea per slide; legible, simple, obvious; design for the skim.",
  },
  {
    id: "yc-seed-deck",
    author: "Y Combinator",
    title: "How to Build Your Seed Round Pitch Deck",
    publisher: "ycombinator.com",
    year: "2022",
    url: "https://www.ycombinator.com/library/2u-how-to-build-your-seed-round-pitch-deck",
    kind: "library",
    note: "The standard seed deck sequence and what each slide must answer.",
  },
  {
    id: "yc-safes",
    author: "Y Combinator",
    title: "Understanding SAFEs and Priced Equity Rounds",
    publisher: "ycombinator.com",
    year: "2022",
    url: "https://www.ycombinator.com/library/6m-understanding-safes-and-priced-equity-rounds",
    kind: "library",
    note: "Why early rounds use SAFEs over priced equity, and how conversion works.",
  },
  {
    id: "yc-how-to-raise-seed",
    author: "Y Combinator",
    title: "How to Raise a Seed Round",
    publisher: "ycombinator.com",
    year: "2021",
    url: "https://www.ycombinator.com/blog/how-to-raise-a-seed-round",
    kind: "library",
    note: "Mechanics of running a seed round and keeping diligence light.",
  },
  {
    id: "yc-dilution",
    author: "Y Combinator",
    title: "Dilution",
    publisher: "ycombinator.com",
    year: "2020",
    url: "https://www.ycombinator.com/blog/dilution",
    kind: "library",
    note: "Sell as little as you can; treat dilution as a multi-round budget.",
  },

  // ---- Fund writing ----
  {
    id: "sequoia-bizplan",
    author: "Sequoia Capital",
    title: "Writing a Business Plan",
    publisher: "sequoiacap.com",
    year: "n.d.",
    url: "https://sequoiacap.com/article/writing-a-business-plan/",
    kind: "fund",
    note: "The ten-element deck: purpose, problem, solution, why now, market, competition, model, team, financials, vision.",
  },
  {
    id: "sequoia-present",
    author: "Sequoia Capital",
    title: "How to Present to Investors",
    publisher: "articles.sequoiacap.com",
    year: "n.d.",
    url: "https://articles.sequoiacap.com/how-to-present-to-investors",
    kind: "fund",
    note: "Win the first five minutes: what changed, one sentence, fast facts.",
  },
  {
    id: "fr-wisdom",
    author: "First Round Review",
    title:
      "The Fundraising Wisdom That Helped Our Founders Raise $18B in Follow-On Capital",
    publisher: "review.firstround.com",
    year: "n.d.",
    url: "https://review.firstround.com/the-fundraising-wisdom-that-helped-our-founders-raise-18b-in-follow-on-capital/",
    kind: "fund",
    note: "The 10/90 rule; you raise from a partner, not a firm; run in batches.",
  },
  {
    id: "fr-partner-meeting",
    author: "First Round Review",
    title:
      "Here's What You Can Really Expect When Pitching at a VC Partner Meeting",
    publisher: "review.firstround.com",
    year: "n.d.",
    url: "https://review.firstround.com/heres-what-you-can-really-expect-when-pitching-your-seed-stage-startup-at-a-vc-partner-meeting/",
    kind: "fund",
    note: "What actually happens inside the partner meeting, and how to prepare for it.",
  },
  {
    id: "fr-storytelling",
    author: "First Round Review",
    title:
      "Take Your Fundraising Pitch from Mediocre to Memorable with These Storytelling Tips",
    publisher: "review.firstround.com",
    year: "n.d.",
    url: "https://review.firstround.com/tell-stories-like-this-to-take-your-fundraising-pitch-from-mediocre-to-memorable/",
    kind: "fund",
    note: "Structure the raise as a story; make the investor the protagonist's partner.",
  },
  {
    id: "nfx-network-effects",
    author: "NFX (James Currier)",
    title: "The Network Effects Bible",
    publisher: "nfx.com",
    year: "n.d.",
    url: "https://www.nfx.com/post/network-effects-bible",
    kind: "fund",
    note: "Taxonomy of network effects — the defensibility story investors price.",
  },

  // ---- Operator / platform guides ----
  {
    id: "stripe-preseed",
    author: "Stripe",
    title: "Pre-seed capital for startups: A guide",
    publisher: "stripe.com",
    year: "2025",
    url: "https://stripe.com/resources/more/pre-seed-capital-for-startups",
    kind: "guide",
    note: "Pre-seed defined: first outside money, ~$700K median SAFE in 2025, proof now expected.",
  },
  {
    id: "lenny-seed101",
    author: "Lenny's Newsletter",
    title: "Raising a Seed Round 101",
    publisher: "lennysnewsletter.com",
    year: "n.d.",
    url: "https://www.lennysnewsletter.com/p/raising-a-seed-round-101",
    kind: "guide",
    note: "Decide if VC fits, prove durability, size the round, choose investors deliberately. (Partly subscriber-gated.)",
  },
  {
    id: "fundersclub-vc101",
    author: "FundersClub",
    title: "Understanding Venture Capital",
    publisher: "fundersclub.com",
    year: "n.d.",
    url: "https://fundersclub.com/learn/guides/vc-101/understanding-venture-capital/",
    kind: "guide",
    note: "How fund economics and the power law shape what a VC can say yes to.",
  },
  {
    id: "seedlegals-preseed",
    author: "SeedLegals",
    title: "Pre-Seed Funding Guide",
    publisher: "seedlegals.com",
    year: "n.d.",
    url: "https://seedlegals.com/resources/pre-seed-funding/",
    kind: "guide",
    note: "Instruments, round sizing, and process for the earliest institutional money.",
  },
  {
    id: "visible-seed-deck",
    author: "Visible.vc",
    title: "Seed Round Pitch Deck",
    publisher: "visible.vc",
    year: "n.d.",
    url: "https://visible.vc/blog/seed-round-pitch-deck/",
    kind: "guide",
    note: "Concise story, team, product potential or traction, clear growth plan.",
  },
  {
    id: "failory-deck",
    author: "Failory",
    title: "How To Make a Pitch Deck in 10 Easy Slides",
    publisher: "failory.com",
    year: "2025",
    url: "https://www.failory.com/blog/pitch-deck-guide",
    kind: "guide",
    note: "The conventional 10-slide checklist investors expect to find quickly.",
  },

  // ---- Quantitative data ----
  {
    id: "docsend-report",
    author: "DocSend (Dropbox)",
    title: "Seed-Stage Fundraising Report",
    publisher: "docsend.com",
    year: "n.d.",
    url: "https://docsend.com/blog/seed-stage-fundraising-report/",
    kind: "data",
    note: "How investors actually read decks: time per deck, per slide, which slides hold attention.",
  },

  // ---- Flux Capital Academy — operator process ----
  {
    id: "flux-overview",
    author: "Ari Stiegler, Flux Capital",
    title: "How to Raise Venture Capital (Academy overview)",
    publisher: "fluxcapital.com",
    year: "2025",
    url: "https://www.fluxcapital.com/academy/fundraising",
    kind: "operator",
    note: "Eight-stage operator's view of running a raise end-to-end.",
  },
  {
    id: "flux-narrative",
    author: "Ari Stiegler, Flux Capital",
    title: "Narrative Arc & Category Framing",
    publisher: "fluxcapital.com",
    year: "2025",
    url: "https://www.fluxcapital.com/academy/fundraising/narrative-arc-and-category-framing",
    kind: "operator",
    note: "Frame the category you intend to own; the narrative is the product you sell first.",
  },
  {
    id: "flux-mapping",
    author: "Ari Stiegler, Flux Capital",
    title: "Investor Mapping & Tiering",
    publisher: "fluxcapital.com",
    year: "2025",
    url: "https://www.fluxcapital.com/academy/fundraising/investor-mapping-and-tiering",
    kind: "operator",
    note: "Tier targets, sequence outreach, and engineer momentum across the list.",
  },
  {
    id: "flux-process",
    author: "Ari Stiegler, Flux Capital",
    title: "Process Design, Milestones & Pacing",
    publisher: "fluxcapital.com",
    year: "2025",
    url: "https://www.fluxcapital.com/academy/fundraising/process-design-milestones-and-pacing",
    kind: "operator",
    note: "Compress the raise into a deadlined process so scarcity and pace work for you.",
  },
  {
    id: "flux-partner",
    author: "Ari Stiegler, Flux Capital",
    title: "Partner Meetings & Live Diligence",
    publisher: "fluxcapital.com",
    year: "2025",
    url: "https://www.fluxcapital.com/academy/fundraising/partner-meetings-and-live-diligence",
    kind: "operator",
    note: "What the room is really testing, and how to handle live diligence.",
  },
  {
    id: "flux-materials",
    author: "Ari Stiegler, Flux Capital",
    title: "Materials, Data Room & Signal Control",
    publisher: "fluxcapital.com",
    year: "2025",
    url: "https://www.fluxcapital.com/academy/fundraising/materials-data-room-and-signal-control",
    kind: "operator",
    note: "Stage the data room and control what each disclosure signals.",
  },
  {
    id: "flux-terms",
    author: "Ari Stiegler, Flux Capital",
    title: "Term Dynamics & Leverage Before a Term Sheet",
    publisher: "fluxcapital.com",
    year: "2025",
    url: "https://www.fluxcapital.com/academy/fundraising/term-dynamics-and-leverage-before-a-term-sheet",
    kind: "operator",
    note: "Where leverage actually comes from before anything is signed.",
  },
  {
    id: "flux-syndicate",
    author: "Ari Stiegler, Flux Capital",
    title: "Syndicate, Signaling & Co-investor Selection",
    publisher: "fluxcapital.com",
    year: "2025",
    url: "https://www.fluxcapital.com/academy/fundraising/syndicate-signaling-and-co-investor-selection",
    kind: "operator",
    note: "Construct the round; pick co-investors for signal, not just capital.",
  },
  {
    id: "flux-closing",
    author: "Ari Stiegler, Flux Capital",
    title: "Closing Mechanics & Post-close Alignment",
    publisher: "fluxcapital.com",
    year: "2025",
    url: "https://www.fluxcapital.com/academy/fundraising/closing-mechanics-and-post-close-alignment",
    kind: "operator",
    note: "Get from verbal yes to wired money, then set up the post-close relationship.",
  },
] as const;

export type SourceId = (typeof RAW)[number]["id"];

export interface Source {
  id: SourceId;
  n: number;
  author: string;
  title: string;
  publisher: string;
  year: string;
  url: string;
  kind: SourceKind;
  note: string;
}

export const sourceList: Source[] = RAW.map((s, i) => ({ ...s, n: i + 1 }));

export const sources = Object.fromEntries(
  sourceList.map((s) => [s.id, s]),
) as Record<SourceId, Source>;

export const KIND_LABEL: Record<SourceKind, string> = {
  essay: "Practitioner Essays",
  library: "Accelerator Libraries",
  fund: "Fund Writing",
  guide: "Operator Guides",
  data: "Quantitative Data",
  operator: "Flux Capital Academy",
};

export const KIND_ORDER: SourceKind[] = [
  "essay",
  "library",
  "fund",
  "guide",
  "data",
  "operator",
];
