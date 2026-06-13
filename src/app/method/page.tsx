import type { Metadata } from "next";
import Link from "next/link";
import { sourceList } from "@/data/sources";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Method",
  description:
    "How this guide is built: the citation standard, how the sources were selected, and how to read the apparatus.",
};

export default function MethodPage() {
  const sourceCount = sourceList.length;

  return (
    <section
      className="shell shell--narrow"
      style={{ paddingTop: "clamp(2.5rem, 6vw, 4.5rem)" }}
    >
      <div className="rise">
        <p className="eyebrow eyebrow--accent">Colophon &amp; Method</p>
        <h1
          className="display"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", margin: "1.1rem 0 0" }}
        >
          How this was built
        </h1>
        <p className="lede" style={{ marginTop: "1.5rem" }}>
          One rule governs everything here: no claim is published unless it can
          be traced to a named source. {site.name} is assembled, not asserted.
        </p>
      </div>

      <hr className="rule rule--double" style={{ margin: "2.75rem 0" }} />

      <div className="prose">
        <h2>The standard</h2>
        <p>
          Each substantive statement in the guide carries a superscript marker
          that resolves to an entry in the{" "}
          <Link href="/sources">source catalogue</Link>. Where a claim is a
          number — a dilution range, a median raise — it is attributed to the
          specific publication that reported it, with the year, because figures
          age. Where a claim is a principle, it is attributed to the practitioner
          or firm that argued it. Synthesis across sources is labelled as such;
          nothing is presented as fact that the cited sources do not support.
        </p>

        <h2>How the sources were chosen</h2>
        <p>
          The catalogue favours people who either deploy capital or have raised
          it, over commentary. It spans {sourceCount} works in six
          registers — practitioner essays, accelerator libraries, fund writing,
          operator guides, quantitative data, and the eight-part Flux Capital
          Academy — chosen for primacy and durability rather than recency alone.
          Some entries are partly gated or were captured at a point in time; those
          are flagged in the catalogue notes.
        </p>

        <h2>How it was assembled</h2>
        <p>
          Each chapter began as working research that read the primary sources
          side by side and noted where they agreed, diverged, or qualified one
          another. Only the points that resolved to a named, citable source were
          carried into the guide; everything that depended on private or
          unpublished material was left out. The result is a reading that you can
          audit: every marker opens the exact work it rests on.
        </p>
      </div>

      <div className="prose" style={{ marginTop: "2rem" }}>
        <p>
          The site is built in the open. Its source — every page, the citation
          components, and the full catalogue with each URL — is on{" "}
          <a href={site.repo} target="_blank" rel="noreferrer">
            GitHub
          </a>
          . The Flux Capital Academy lessons can be read in full at their{" "}
          <a
            href="https://www.fluxcapital.com/academy/fundraising"
            target="_blank"
            rel="noreferrer"
          >
            original source
          </a>
          , and every other work is linked directly from the{" "}
          <Link href="/sources">source catalogue</Link>.
        </p>

        <h2>What this is not</h2>
        <p>
          This is a reading-first synthesis of published guidance on
          raising venture capital. It is not legal, tax, or financial advice, and
          the figures cited reflect their sources at the time of publication.
          Treat it as a map drawn from the territory others have walked — always
          worth checking against the originals.
        </p>
      </div>

      <div
        style={{
          marginTop: "3rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--ink)",
          display: "flex",
          gap: "0.9rem",
          flexWrap: "wrap",
        }}
      >
        <Link href="/guide" className="btn btn--accent">
          Read the guide <span className="arr">→</span>
        </Link>
        <Link href="/sources" className="btn">
          Source catalogue
        </Link>
      </div>
    </section>
  );
}
