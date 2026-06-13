import Link from "next/link";
import { Cite } from "@/components/Cite";
import { chapters } from "@/data/guide";
import { sourceList } from "@/data/sources";
import { site } from "@/data/site";

export default function Home() {
  const sourceCount = sourceList.length;

  return (
    <>
      {/* ---------- Cover ---------- */}
      <section className="shell" style={{ paddingTop: "clamp(3rem, 8vw, 6rem)" }}>
        <div className="cover-grid">
          <div className="rise">
            <p className="eyebrow eyebrow--accent">
              {site.name} · {site.volume}
            </p>
            <h1
              className="display"
              style={{
                fontSize: "clamp(3rem, 9vw, 6.5rem)",
                margin: "1.25rem 0 0",
              }}
            >
              Raising
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 300 }}>Venture</em>{" "}
              Capital
            </h1>
            <p className="lede" style={{ marginTop: "1.75rem", maxWidth: "40ch" }}>
              A reading-first field guide to the pre-seed and seed raise —
              assembled from the people who fund and the people who have raised,
              with every claim traced back to its source.
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.9rem",
                marginTop: "2.25rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/guide" className="btn btn--accent">
                Read the guide <span className="arr">→</span>
              </Link>
              <Link href="/sources" className="btn">
                The sources
              </Link>
            </div>
          </div>

          <div
            className="rise"
            style={{ animationDelay: "0.12s", paddingBottom: "0.4rem" }}
          >
            <hr className="rule rule--strong" />
            <dl style={{ margin: 0 }}>
              {[
                {
                  k: "Catalogued sources",
                  v: String(sourceCount),
                  cite: null,
                },
                {
                  k: "Chapters in this volume",
                  v: String(chapters.length),
                  cite: null,
                },
              ].map((row) => (
                <div
                  key={row.k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "0.85rem 0",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <dt
                    className="mono"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {row.k}
                  </dt>
                  <dd className="serif" style={{ margin: 0, fontSize: "1.5rem" }}>
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
            <p
              className="mono"
              style={{
                fontSize: "0.7rem",
                lineHeight: 1.6,
                color: "var(--muted)",
                marginTop: "1rem",
              }}
            >
              Primary essays, accelerator libraries, fund writing, and an
              operator&rsquo;s playbook — each linked to the original.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Cited fast facts ---------- */}
      <section className="shell" style={{ marginTop: "clamp(3.5rem, 8vw, 6rem)" }}>
        <hr className="rule rule--double" />
        <div className="stat-row" style={{ padding: "2.5rem 0" }}>
          <Stat
            n={<>~$700K</>}
            l={
              <>
                Median pre-seed SAFE raise, 2025 <Cite id="stripe-preseed" />
              </>
            }
          />
          <Stat
            n={
              <>
                10&ndash;20<em>%</em>
              </>
            }
            l={
              <>
                Typical early-stage dilution{" "}
                <Cite id={["stripe-preseed", "yc-seed-guide"]} />
              </>
            }
          />
          <Stat
            n={
              <>
                12&ndash;18<em> mo</em>
              </>
            }
            l={
              <>
                Runway a seed round should buy <Cite id="yc-seed-guide" />
              </>
            }
          />
          <Stat
            n={
              <>
                &gt;25<em>%</em>
              </>
            }
            l={
              <>
                Dilution to avoid in a single round <Cite id="yc-seed-guide" />
              </>
            }
          />
        </div>
        <hr className="rule rule--double" />
      </section>

      {/* ---------- Contents of this volume ---------- */}
      <section className="shell" style={{ marginTop: "clamp(3.5rem, 8vw, 6rem)" }}>
        <header style={{ maxWidth: "46ch", marginBottom: "2.5rem" }}>
          <p className="eyebrow">In this volume</p>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              margin: "0.9rem 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            Fifteen chapters, from first principles to the wire.
          </h2>
        </header>
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {chapters.map((c, i) => (
            <li key={c.id}>
              <Link
                href={`/guide#${c.id}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2.75rem minmax(0,1fr)",
                  gap: "1rem",
                  alignItems: "baseline",
                  padding: "1.15rem 0",
                  borderTop: "1px solid var(--rule)",
                }}
                className="toc-row"
              >
                <span
                  className="mono"
                  style={{ fontSize: "0.8rem", color: "var(--accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span
                    className="serif"
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--ink)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {c.title}
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: "0.25rem",
                      color: "var(--ink-3)",
                      fontSize: "0.98rem",
                    }}
                  >
                    {c.dek}
                  </span>
                </span>
              </Link>
            </li>
          ))}
          <li style={{ borderTop: "1px solid var(--rule)" }} />
        </ol>
      </section>

      {/* ---------- Resources directory ---------- */}
      <section className="shell" style={{ marginTop: "clamp(4rem, 9vw, 7rem)" }}>
        <header style={{ marginBottom: "2rem" }}>
          <p className="eyebrow">The directory</p>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              margin: "0.8rem 0 0",
            }}
          >
            One shelf, growing slowly.
          </h2>
          <p
            style={{
              marginTop: "0.9rem",
              maxWidth: "52ch",
              color: "var(--ink-3)",
            }}
          >
            {site.name} begins with fundraising and will add volumes as they are
            researched to the same standard — nothing published until it is
            cited.
          </p>
        </header>
        <div className="directory">
          <Link href="/guide" className="card card--link">
            <span className="card__idx">VOL. I — LIVE</span>
            <h3
              className="serif"
              style={{ fontSize: "1.5rem", margin: "1rem 0 0.5rem" }}
            >
              Raising Venture Capital
            </h3>
            <p style={{ color: "var(--ink-3)", fontSize: "0.98rem", flexGrow: 1 }}>
              The full pre-seed and seed playbook, fully cited.
            </p>
            <span className="link-arrow" style={{ marginTop: "1.25rem" }}>
              Read <span className="arr">→</span>
            </span>
          </Link>

          {[
            { idx: "VOL. II", t: "Hiring the First Team", d: "Founding hires, early equity, and the first ten." },
            { idx: "VOL. III", t: "Pricing & Packaging", d: "Finding price, naming tiers, and expansion." },
            { idx: "VOL. IV", t: "Telling the Story", d: "Positioning, category, and the narrative spine." },
          ].map((v) => (
            <article key={v.idx} className="card card--soon">
              <span className="card__idx">{v.idx} — IN PREPARATION</span>
              <h3
                className="serif"
                style={{ fontSize: "1.5rem", margin: "1rem 0 0.5rem" }}
              >
                {v.t}
              </h3>
              <p style={{ color: "var(--ink-3)", fontSize: "0.98rem", flexGrow: 1 }}>
                {v.d}
              </p>
              <span
                className="mono"
                style={{
                  marginTop: "1.25rem",
                  fontSize: "0.66rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                Not yet published
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Method strip ---------- */}
      <section className="shell" style={{ marginTop: "clamp(4rem, 9vw, 7rem)" }}>
        <div
          style={{
            border: "1px solid var(--rule-2)",
            background: "var(--paper-raised)",
            padding: "clamp(1.75rem, 4vw, 3rem)",
          }}
        >
          <div className="two-col" style={{ alignItems: "center" }}>
            <div>
              <p className="eyebrow">Method</p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  margin: "0.8rem 0 0",
                  maxWidth: "22ch",
                }}
              >
                Every sentence is accountable to a source.
              </h2>
            </div>
            <div>
              <p style={{ color: "var(--ink-2)", maxWidth: "46ch" }}>
                Claims carry a superscript that opens the exact reference. All{" "}
                {sourceCount} catalogued works are linked in full, so you can
                check the original whenever you want to.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
                <Link href="/sources" className="link-arrow">
                  Source catalogue <span className="arr">→</span>
                </Link>
                <Link href="/method" className="link-arrow">
                  The method <span className="arr">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: React.ReactNode; l: React.ReactNode }) {
  return (
    <div>
      <div className="stat__n">{n}</div>
      <div className="stat__l">{l}</div>
    </div>
  );
}
