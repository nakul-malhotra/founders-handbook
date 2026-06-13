import Link from "next/link";
import { site } from "@/data/site";
import { sources } from "@/data/sources";

export default function SiteFooter() {
  const count = Object.keys(sources).length;
  const year = new Date().getFullYear();
  return (
    <footer className="colophon">
      <div className="shell" style={{ paddingBlock: "4rem" }}>
        <div
          style={{
            display: "grid",
            gap: "2.5rem",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          }}
          className="colophon__grid"
        >
          <div>
            <p className="eyebrow">Colophon</p>
            <p
              className="serif"
              style={{
                fontSize: "1.7rem",
                lineHeight: 1.25,
                margin: "1rem 0 0",
                maxWidth: "26ch",
                color: "var(--on-dark)",
                fontWeight: 360,
              }}
            >
              Every claim here is traceable to a named primary source.
            </p>
            <p className="colophon__muted" style={{ marginTop: "1rem", maxWidth: "44ch" }}>
              {site.name} is a reading-first reference assembled from {count}{" "}
              catalogued sources — practitioner essays, accelerator libraries, fund
              writing, and an operator&rsquo;s playbook — each linked to the primary it
              came from.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.75rem",
              fontSize: "0.9rem",
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.9rem" }}>
                Contents
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.55rem" }}>
                <li><Link href="/guide">The Guide</Link></li>
                <li><Link href="/sources">Source Catalogue</Link></li>
                <li><Link href="/method">Method</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.9rem" }}>
                Repository
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.55rem" }}>
                <li>
                  <a href={site.repo} target="_blank" rel="noreferrer">
                    View source ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ border: 0, borderTop: "1px solid rgba(236,227,210,0.16)", margin: "3rem 0 1.5rem" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            fontFamily: "var(--font-mono)",
            fontSize: "0.66rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          className="colophon__muted"
        >
          <span>
            {site.name} — {site.volume}
          </span>
          <span>Assembled {year} · Sources dated to publication</span>
        </div>
      </div>
    </footer>
  );
}
