export interface Chapter {
  id: string;
  title: string;
  dek: string;
}

/** Order matters — drives the guide TOC and the home contents index. */
export const chapters: Chapter[] = [
  {
    id: "ch-fit",
    title: "Is venture capital the right path?",
    dek: "What VC is for, who it suits, and the bargain you are actually making.",
  },
  {
    id: "ch-buying",
    title: "What investors are actually buying",
    dek: "Formidable founders, a promising market, and early evidence the insight is real.",
  },
  {
    id: "ch-narrative",
    title: "Narrative and “why now”",
    dek: "The story is the first product you sell. Win the first five minutes.",
  },
  {
    id: "ch-deck",
    title: "The deck, slide by slide",
    dek: "The ten-element structure, one idea per slide, designed for the skim.",
  },
  {
    id: "ch-traction",
    title: "Traction and evidence by stage",
    dek: "Proof over projections, and the unscalable work that produces it.",
  },
  {
    id: "ch-market",
    title: "Sizing the market honestly",
    dek: "Build it bottom-up: buyers × spend × take rate, not a top-down trillion.",
  },
  {
    id: "ch-terms",
    title: "Instruments, terms, and dilution",
    dek: "Why SAFEs, how much to sell, and the arithmetic of giving up equity.",
  },
  {
    id: "ch-process",
    title: "Mapping investors and running the process",
    dek: "Tier the list, run in parallel, and treat interest as “no” until it is signed.",
  },
  {
    id: "ch-meeting",
    title: "The partner meeting and live diligence",
    dek: "What the room is really testing, and how to walk in prepared.",
  },
  {
    id: "ch-materials",
    title: "Materials, the data room, and signal",
    dek: "Keep diligence light; stage what you share; control what it signals.",
  },
  {
    id: "ch-leverage",
    title: "Term dynamics and leverage",
    dek: "Where leverage comes from before a term sheet — and what not to over-optimize.",
  },
  {
    id: "ch-syndicate",
    title: "Syndicate, signaling, and co-investors",
    dek: "Construct the round; choose co-investors for signal, not only capital.",
  },
  {
    id: "ch-closing",
    title: "Closing and the post-close relationship",
    dek: "From verbal yes to wired money, then the relationship that follows.",
  },
  {
    id: "ch-mistakes",
    title: "Common mistakes",
    dek: "The recurring, avoidable ways founders lengthen or lose a raise.",
  },
  {
    id: "ch-checklist",
    title: "The raise-ready checklist",
    dek: "What “ready” looks like before the first meeting.",
  },
];
