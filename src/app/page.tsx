import Link from "next/link";
import { Cite } from "@/components/Cite";
import { chapters } from "@/data/guide";
import { sourceList } from "@/data/sources";
import { site } from "@/data/site";

export default function Home() {
  const sourceCount = sourceList.length;

  return (
    <>
      {/* ---------- Cover: drawing title block ---------- */}
      <section className="shell" style={{ paddingTop: "clamp(1.75rem, 5vw, 3.5rem)" }}>
        <div className="titleblock rise">
          <span className="cm cm--tl" aria-hidden />
          <span className="cm cm--tr" aria-hidden />
          <span className="cm cm--bl" aria-hidden />
          <span className="cm cm--br" aria-hidden />

          <div className="titleblock__rail">
            <span>
              <b>{site.name}</b> · Field manual
            </span>
            <span>{site.volume} · Cited to source</span>
          </div>

          <div className="titleblock__body cover-grid">
            <div>
              <p className="eyebrow eyebrow--accent tick">Subject 01 — Fundraising</p>
              <h1
                className="display"
                style={{ fontSize: "clamp(2.7rem, 8vw, 5.6rem)", margin: "1.1rem 0 0" }}
              >
                Raising Venture Capital
              </h1>
              <p className="lede" style={{ marginTop: "1.5rem", maxWidth: "42ch" }}>
                A reading-first field guide to the pre-seed and seed raise —
                assembled from the people who fund and the people who have
                raised, with every claim traced back to its source.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  marginTop: "2rem",
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

            <div className="cover-index">
              <div className="cover-index__row">
                <span className="cover-index__k">Catalogued sources</span>
                <span className="cover-index__v">{sourceCount}</span>
              </div>
              <div className="cover-index__row">
                <span className="cover-index__k">Chapters in volume</span>
                <span className="cover-index__v">{chapters.length}</span>
              </div>
              <div className="cover-index__row">
                <span className="cover-index__k">Uncited claims</span>
                <span className="cover-index__v">
                  <span className="ac">0</span>
                </span>
              </div>
              <p className="cover-index__note">
                Primary essays, accelerator libraries, fund writing, and an
                operator&rsquo;s playbook — each linked to the original.
              </p>
            </div>
          </div>

          <div className="titleblock__fields">
            <div className="field">
              <p className="field__k">Sheet</p>
              <p className="field__v">
                01 <span style={{ color: "var(--faint)" }}>/ 04</span>
              </p>
            </div>
            <div className="field">
              <p className="field__k">Subject</p>
              <p className="field__v">Pre-seed &amp; Seed</p>
            </div>
            <div className="field">
              <p className="field__k">Standard</p>
              <p className="field__v">Primary sources</p>
            </div>
            <div className="field">
              <p className="field__k">Revision</p>
              <p className="field__v">2025.1</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Cited fast facts ---------- */}
      <section className="shell" style={{ marginTop: "clamp(3.5rem, 8vw, 6rem)" }}>
        <hr className="rule--dim" />
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
        <hr className="rule--dim" />
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
                check the original yourself.
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
