import type { Metadata } from "next";
import Link from "next/link";
import { sourceList, KIND_LABEL, KIND_ORDER, type Source } from "@/data/sources";

export const metadata: Metadata = {
  title: "Source Catalogue",
  description:
    "The complete catalogue of sources behind the guide — practitioner essays, accelerator libraries, fund writing, operator guides, quantitative data, and the Flux Capital Academy.",
};

function SourceRow({ s }: { s: Source }) {
  return (
    <li id={`src-${s.id}`} className="src-row">
      <span className="src-row__n mono">{String(s.n).padStart(2, "0")}</span>
      <div>
        <h3 className="src-row__title">
          <a href={s.url} target="_blank" rel="noreferrer">
            {s.title}
          </a>
        </h3>
        <p className="src-row__meta">
          {s.author} · {s.publisher}
          {s.year !== "n.d." ? ` · ${s.year}` : ""}
        </p>
        <p className="src-row__note">{s.note}</p>
        <p className="src-row__url mono">
          <a href={s.url} target="_blank" rel="noreferrer">
            {s.url.replace(/^https?:\/\//, "")}
          </a>
        </p>
      </div>
    </li>
  );
}

export default function SourcesPage() {
  const groups = KIND_ORDER.map((kind) => ({
    kind,
    label: KIND_LABEL[kind],
    items: sourceList.filter((s) => s.kind === kind),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <section
        className="shell"
        style={{ paddingTop: "clamp(2.5rem, 6vw, 4.5rem)", maxWidth: "62rem" }}
      >
        <div className="rise">
          <p className="eyebrow eyebrow--accent">Apparatus</p>
          <h1
            className="display"
            style={{ fontSize: "clamp(2.6rem, 7vw, 4.75rem)", margin: "1.1rem 0 0" }}
          >
            The Source Catalogue
          </h1>
          <p className="lede" style={{ marginTop: "1.5rem", maxWidth: "48ch" }}>
            Every numbered marker in the guide resolves to an entry below. These
            are the primary works behind each claim — follow any link to read the
            original.
          </p>
          <p
            className="mono"
            style={{
              marginTop: "1.25rem",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {sourceList.length} entries · {groups.length} categories
          </p>
        </div>
        <hr className="rule rule--double" style={{ marginTop: "2.5rem" }} />
      </section>

      <section className="shell" style={{ maxWidth: "62rem", marginTop: "2.5rem" }}>
        {groups.map((g) => (
          <div key={g.kind} className="src-group">
            <div className="src-group__head">
              <h2 className="src-group__label">{g.label}</h2>
              <span className="mono src-group__count">
                {String(g.items.length).padStart(2, "0")}
              </span>
            </div>
            <ol className="src-list">
              {g.items.map((s) => (
                <SourceRow key={s.id} s={s} />
              ))}
            </ol>
          </div>
        ))}
      </section>

      <section className="shell" style={{ maxWidth: "62rem", marginTop: "3.5rem" }}>
        <div
          style={{
            border: "1px solid var(--rule-2)",
            background: "var(--paper-raised)",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            display: "flex",
            gap: "1.25rem",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="serif" style={{ fontSize: "1.3rem", margin: 0, maxWidth: "30ch" }}>
            Want to see how the catalogue becomes the guide?
          </p>
          <Link href="/method" className="btn">
            The method <span className="arr">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
