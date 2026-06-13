import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgress from "@/components/ReadingProgress";
import Toc from "@/components/Toc";
import { Cite, ChapterSources } from "@/components/Cite";
import { chapters } from "@/data/guide";

export const metadata: Metadata = {
  title: "The Guide — Raising Venture Capital",
  description:
    "A fully-cited, reading-first guide to the pre-seed and seed raise: what investors buy, the deck, terms and dilution, process, the partner meeting, and the close.",
};

function Head({ id }: { id: string }) {
  const i = chapters.findIndex((c) => c.id === id);
  const c = chapters[i];
  return (
    <header style={{ marginBottom: "1.75rem" }}>
      <p className="chapter__no">
        Chapter {String(i + 1).padStart(2, "0")} / {chapters.length}
      </p>
      <h2 className="chapter__title">{c.title}</h2>
    </header>
  );
}

export default function GuidePage() {
  const tocItems = chapters.map((c) => ({ id: c.id, label: c.title }));

  return (
    <>
      <ReadingProgress />

      {/* ---------- Masthead of the guide ---------- */}
      <section className="shell" style={{ paddingTop: "clamp(2.5rem, 6vw, 4.5rem)" }}>
        <div className="rise" style={{ maxWidth: "52rem" }}>
          <p className="eyebrow eyebrow--accent">Volume I · The Guide</p>
          <h1
            className="display"
            style={{ fontSize: "clamp(2.6rem, 7vw, 4.75rem)", margin: "1.1rem 0 0" }}
          >
            Raising Venture Capital
          </h1>
          <p className="lede" style={{ marginTop: "1.5rem", maxWidth: "44ch" }}>
            Everything below is drawn from named primary sources. Hover any
            marker to see where a claim comes from; the full catalogue lives on
            the{" "}
            <Link
              href="/sources"
              style={{ textDecoration: "underline", textUnderlineOffset: 2 }}
            >
              sources page
            </Link>
            .
          </p>
          <p
            className="mono"
            style={{
              marginTop: "1.5rem",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            15 chapters · Reading time ≈ 25 min · Pre-seed &amp; seed
          </p>
        </div>
        <hr className="rule rule--double" style={{ marginTop: "2.5rem" }} />
      </section>

      {/* ---------- Body ---------- */}
      <div
        className="shell guide-grid"
        style={{ marginTop: "2.5rem", paddingBottom: "2rem" }}
      >
        <aside className="guide-toc">
          <Toc items={tocItems} />
        </aside>

        <article>
          {/* 01 — Fit */}
          <section id="ch-fit" className="chapter">
            <Head id="ch-fit" />
            <div className="prose has-dropcap">
              <p>
                Venture capital is not a prize; it is a particular bargain, and it
                only makes sense for a particular kind of company. A startup, in
                Paul Graham&rsquo;s definition, is a company designed to grow
                fast — growth rate is the metric that distinguishes it from an
                ordinary small business.<Cite id="pg-growth" /> Venture investors
                exist to fund that growth, and their own economics depend on it.
              </p>
              <p>
                Those economics are governed by the power law. A fund returns
                capital through a small number of enormous outcomes, so each
                investment has to have a credible path to becoming one of
                them.<Cite id="fundersclub-vc101" /> This is
                why &ldquo;a good, profitable business&rdquo; can still be a poor
                fit for venture: if it cannot plausibly become very large, it
                cannot return a fund.
              </p>
              <p>
                So the first question is honest self-selection. A seed round is
                appropriate when you intend to build a very large company, you are
                comfortable selling roughly 10&ndash;20% of it, and you believe
                outside capital creates concrete advantages that bootstrapping
                cannot.<Cite id="lenny-seed101" /> If those
                are not true, the rest of this guide is optional.
              </p>
              <p>
                Pre-seed is the first rung. It is typically the first outside
                money a company takes — often before revenue — used to move from
                concept or prototype to validation: company setup, customer
                discovery, an MVP, a first critical hire, and runway to prove the
                founders can execute.<Cite id="stripe-preseed" />
              </p>
              <ChapterSources
                ids={[
                  "pg-growth",
                  "fundersclub-vc101",
                  "lenny-seed101",
                  "stripe-preseed",
                ]}
              />
            </div>
          </section>

          {/* 02 — What investors buy */}
          <section id="ch-buying" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-buying" />
            <div className="prose">
              <p>
                At pre-seed and seed, investors are not underwriting a finished
                business — there usually isn&rsquo;t one. They are underwriting
                three things: <strong>formidable founders</strong>, a{" "}
                <strong>promising market</strong>, and{" "}
                <strong>early evidence</strong> that the insight is
                real.<Cite id={["pg-convince", "sequoia-bizplan"]} /> Paul Graham
                frames the bar plainly: a very young company only has to look like
                a promising experiment worth funding to see how it turns
                out.<Cite id="pg-convince" />
              </p>
              <p>
                That reframes the founder&rsquo;s job. The way to convince
                investors is less about persuasion technique and more about
                actually being formidable, then making a few things clear and
                believable rather than dressing them up.<Cite id="pg-convince" />{" "}
                Confidence without substance reads as risk; substance stated
                simply reads as inevitability.
              </p>

              <div className="figure">
                <div className="figure__cap">
                  <span>Figure — What gets underwritten</span>
                  <span>
                    <b>Pre-seed / seed</b>
                  </span>
                </div>
                <div className="figure__body">
                  <table className="dtable">
                    <thead>
                      <tr>
                        <th>They are buying</th>
                        <th>Which means</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Formidable founders</td>
                        <td>
                          Domain insight and the evident ability to execute — the
                          single most important signal.<Cite id="pg-convince" />
                        </td>
                      </tr>
                      <tr>
                        <td>A promising market</td>
                        <td>
                          A path from one wedge to something very large; market
                          potential is a core deck element.<Cite id="sequoia-bizplan" />
                        </td>
                      </tr>
                      <tr>
                        <td>Early evidence</td>
                        <td>
                          Working product, pilots, signups, or commitments that
                          show the insight is real.<Cite id="stripe-preseed" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <ChapterSources
                ids={["pg-convince", "sequoia-bizplan", "stripe-preseed"]}
              />
            </div>
          </section>

          {/* 03 — Narrative */}
          <section id="ch-narrative" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-narrative" />
            <div className="prose">
              <p>
                Before the numbers, you sell a story — and the story is the first
                product the company ships. Flux Capital&rsquo;s operator playbook
                begins here: frame the <em>category</em> you intend to own, so the
                round is a bet on a movement rather than a single
                feature.<Cite id="flux-narrative" />
              </p>
              <p>
                The opening minutes carry disproportionate weight. Sequoia&rsquo;s
                guidance is to win the first five minutes — establish{" "}
                <em>what changed</em> in the world, state the company in one
                sentence, and give a few fast facts — before walking anyone
                through detail.<Cite id="sequoia-present" />{" "}
                That &ldquo;what changed&rdquo; is the &ldquo;why now&rdquo;: a
                sharp account of the market shift that makes this possible today
                and not three years ago, and it deserves its own
                slide.<Cite id="sequoia-bizplan" />
              </p>
              <p>
                Structure the whole raise as a narrative, not a feature list.
                First Round&rsquo;s storytelling guidance is to take the pitch
                from mediocre to memorable by giving it the shape of a story —
                tension, stakes, and a credible resolution the investor gets to be
                part of.<Cite id="fr-storytelling" />
              </p>
              <ChapterSources
                ids={[
                  "flux-narrative",
                  "sequoia-present",
                  "sequoia-bizplan",
                  "fr-storytelling",
                ]}
              />
            </div>
          </section>

          {/* 04 — Deck */}
          <section id="ch-deck" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-deck" />
            <div className="prose">
              <p>
                Most strong decks converge on the same spine. Sequoia&rsquo;s
                public framework asks you to cover ten elements: company purpose,
                problem, solution, why now, market potential, competition and
                alternatives, business model, team, financials, and
                vision.<Cite id="sequoia-bizplan" /> Failory&rsquo;s
                ten-slide checklist is the same skeleton in plainer dress —
                introduction, problem, solution, market, product, traction, team,
                competition, financials, and the ask — precisely because
                investors review decks quickly and expect to find
                them.<Cite id="failory-deck" />
              </p>

              <div className="figure">
                <div className="figure__cap">
                  <span>Figure — The ten-element deck</span>
                  <span>Sequoia</span>
                </div>
                <div className="figure__body">
                  <ol
                    style={{
                      columns: 2,
                      columnGap: "2rem",
                      margin: 0,
                      paddingLeft: "1.1rem",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                    }}
                  >
                    <li>Company purpose</li>
                    <li>Problem</li>
                    <li>Solution</li>
                    <li>Why now</li>
                    <li>Market potential</li>
                    <li>Competition / alternatives</li>
                    <li>Business model</li>
                    <li>Team</li>
                    <li>Financials</li>
                    <li>Vision</li>
                  </ol>
                  <p className="figure__note">
                    Sequoia stresses that clarity of thinking and ambition matter
                    more than slide polish.<Cite id="sequoia-bizplan" />
                  </p>
                </div>
              </div>

              <p>
                How it is built matters as much as what it contains. Kevin
                Hale&rsquo;s rule for YC is one idea per slide, kept{" "}
                <em>legible, simple, and obvious</em>, and designed for the
                skim.<Cite id="yc-deck" /> That discipline exists because reading
                behaviour is unforgiving: DocSend&rsquo;s report tracks how little
                time investors actually spend — time per deck, time per slide, and
                which slides hold attention.<Cite id="docsend-report" />
              </p>
              <h3>The cover does real work</h3>
              <p>
                Slide one should be a plain-English sentence anyone can repeat.
                A canonical example is Airbnb&rsquo;s line:
              </p>
              <blockquote>
                Book rooms with locals, rather than hotels.
                <cite>Airbnb seed deck, 2009</cite>
              </blockquote>
              <p>
                It works because it is repeatable and jargon-free — the opposite
                of &ldquo;B2B allocation infrastructure.&rdquo;<Cite id="sequoia-present" />{" "}
                For companies without deep metrics, Visible&rsquo;s seed-deck
                guidance is to lean on product potential, pilot results, early
                feedback, and an evidence-backed growth plan rather than inventing
                numbers.<Cite id="visible-seed-deck" />
              </p>
              <ChapterSources
                ids={[
                  "sequoia-bizplan",
                  "sequoia-present",
                  "yc-deck",
                  "failory-deck",
                  "visible-seed-deck",
                  "docsend-report",
                ]}
              />
            </div>
          </section>

          {/* 05 — Traction */}
          <section id="ch-traction" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-traction" />
            <div className="prose">
              <p>
                The most persuasive decks win on proof, not projection.
                Seed-deck guidance converges on the same pattern: early decks
                become compelling when they show hard evidence — paying users,
                revenue, a growth rate, named customers, letters of intent, or
                strong customer quotes.<Cite id={["yc-seed-deck", "visible-seed-deck"]} /> A
                chart of what <em>might</em> happen persuades no one; a small
                number that already happened changes the conversation.
              </p>
              <p>
                That evidence rarely arrives on its own. Graham&rsquo;s
                counsel — do things that don&rsquo;t scale — is the engine here:
                the manual, unscalable work of recruiting early users by hand is
                exactly what produces the proof investors later
                underwrite.<Cite id="pg-ds" /> And the bar is rising. Stripe notes
                that many pre-seed investors now expect a prototype, signups, or
                pilots before they will write a check.<Cite id="stripe-preseed" />
              </p>
              <p>
                Whatever the stage, frame traction as a <em>rate</em>. Since a
                startup is defined by growth, the slope of the line is the story —
                a smaller absolute number growing quickly beats a larger one
                standing still.<Cite id="pg-growth" />
              </p>
              <ChapterSources
                ids={[
                  "pg-ds",
                  "pg-growth",
                  "stripe-preseed",
                  "yc-seed-deck",
                  "visible-seed-deck",
                ]}
              />
            </div>
          </section>

          {/* 06 — Market */}
          <section id="ch-market" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-market" />
            <div className="prose">
              <p>
                Market potential is one of Sequoia&rsquo;s ten
                elements,<Cite id="sequoia-bizplan" /> but the way founders present
                it is often where credibility leaks away. The recurring fix is
                to replace the top-down &ldquo;it&rsquo;s a $400B
                market, we just need 1%&rdquo; with a{" "}
                <strong>bottom-up model</strong>: buyer count × annual category
                spend × your margin or take rate.<Cite id={["pg-convince", "sequoia-bizplan"]} />
              </p>
              <p>
                A bottom-up number is smaller but defensible, and defensibility is
                the point — it shows you understand the unit you actually sell and
                how the business compounds from one wedge to many. The deck should
                also make the path from that first wedge to a very large outcome
                explicit, which is the &ldquo;promising market&rdquo; investors are
                underwriting in the first place.<Cite id="pg-convince" />
              </p>
              <ChapterSources ids={["sequoia-bizplan", "pg-convince"]} />
            </div>
          </section>

          {/* 07 — Terms */}
          <section id="ch-terms" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-terms" />
            <div className="prose">
              <p>
                For the earliest rounds, the cleanest default instrument is a
                post-money SAFE rather than priced equity. Priced equity requires
                setting a price per share and negotiating preferred-stock terms;
                most early rounds avoid that overhead.<Cite id={["yc-safes", "yc-seed-guide"]} />{" "}
                Stripe describes the same convention — SAFEs and convertible notes
                are common pre-seed because valuation is hard before mature
                traction — and puts the 2025 median pre-seed SAFE around $700K,
                with early dilution of 10&ndash;20% &ldquo;not
                unusual.&rdquo;<Cite id="stripe-preseed" />
              </p>

              <div className="figure">
                <div className="figure__cap">
                  <span>Figure — Dilution, by the numbers</span>
                  <span>
                    <b>Seed</b> guidance
                  </span>
                </div>
                <div className="figure__body">
                  <table className="dtable">
                    <thead>
                      <tr>
                        <th>Marker</th>
                        <th>Guidance</th>
                        <th>Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="num">~10%</td>
                        <td>An excellent outcome for a round.</td>
                        <td>
                          YC <Cite id="yc-seed-guide" />
                        </td>
                      </tr>
                      <tr>
                        <td className="num">up to 20%</td>
                        <td>Common; not unusual at the early stage.</td>
                        <td>
                          YC · Stripe{" "}
                          <Cite id={["yc-seed-guide", "stripe-preseed"]} />
                        </td>
                      </tr>
                      <tr>
                        <td className="num">&gt;25%</td>
                        <td>Generally to be avoided in one round.</td>
                        <td>
                          YC <Cite id="yc-seed-guide" />
                        </td>
                      </tr>
                      <tr>
                        <td className="num">~$700K</td>
                        <td>Median pre-seed SAFE raise, 2025.</td>
                        <td>
                          Stripe <Cite id="stripe-preseed" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                How much should you actually sell? YC&rsquo;s rule of thumb: 10% is
                excellent, up to 20% is common, and giving up more than 25% in a
                single round should generally be avoided — and you should tie the
                amount to a believable plan that reaches the next fundable
                milestone, usually 12&ndash;18 months out.<Cite id="yc-seed-guide" />{" "}
                The deeper principle is to sell as little as you can: treat
                dilution as a budget spent across many future rounds, not a
                one-time trade.<Cite id="yc-dilution" />
              </p>
              <p>
                Graham gives the test for whether any given trade is worth it — the
                equity equation. Give up <em>n%</em> of the company only if doing
                so improves your average outcome by more than{" "}
                <span className="mono">1 / (1 − n)</span>; otherwise you are making
                the company worth less.<Cite id="pg-equity" /> And do not assume you
                can repurchase equity later: once an investor owns it — or a SAFE
                converts — buying it back generally requires their consent and
                workable terms, and if the company is working they have little
                reason to sell cheaply.<Cite id="yc-dilution" />
              </p>
              <p>
                Finally, frame the raise around the milestone it unlocks, not the
                valuation it prints. The correct valuation is simply one investors
                find reasonable enough to fund while still leaving you enough
                capital to hit your goals.<Cite id="yc-seed-guide" />
              </p>
              <ChapterSources
                ids={[
                  "yc-safes",
                  "yc-seed-guide",
                  "yc-dilution",
                  "pg-equity",
                  "stripe-preseed",
                ]}
              />
            </div>
          </section>

          {/* 08 — Process */}
          <section id="ch-process" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-process" />
            <div className="prose">
              <p>
                Fundraising is a process to be run, not a mood to drift through.
                Graham&rsquo;s operating advice is to do it in a tight, deliberate
                way: talk to investors in <strong>parallel</strong> rather than
                sequentially, so you create real comparison and leverage, and treat
                every soft signal as a <strong>&ldquo;no&rdquo; until there is a
                signed document and a wire path.</strong>
                <Cite id="pg-fr" />
              </p>
              <p>
                Flux frames the front of that process as mapping and tiering: sort
                targets into tiers, sequence outreach so you learn and build
                momentum, and engineer the order rather than emailing everyone at
                once.<Cite id="flux-mapping" /> Then design the process itself —
                milestones and pacing that compress the raise into a deadlined
                sprint, so scarcity and momentum work for you instead of against
                you.<Cite id="flux-process" />
              </p>
              <p>
                First Round adds two correctives founders often miss. You do not
                raise from a <em>firm</em>; you raise from a <em>partner</em> — a
                single champion who will carry you through the partnership — so
                target people, not logos.<Cite id="fr-wisdom" />{" "}
                And run outreach in batches rather than all at once, so you can
                learn from early meetings and improve before reaching your
                highest-priority investors.<Cite id="fr-wisdom" />{" "}
                Above all, prioritize whoever can lead or catalyze the first
                committed check, and close it quickly.<Cite id="pg-fr" />
              </p>
              <ChapterSources
                ids={["pg-fr", "flux-mapping", "flux-process", "fr-wisdom"]}
              />
            </div>
          </section>

          {/* 09 — Partner meeting */}
          <section id="ch-meeting" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-meeting" />
            <div className="prose">
              <p>
                The partner meeting is where a maybe becomes a term sheet or a
                pass. First Round&rsquo;s account of what to really expect is worth
                internalizing: you are presenting to a room with its own dynamics,
                and the questions are testing conviction as much as
                content.<Cite id="fr-partner-meeting" />
              </p>
              <p>
                Flux describes the same room from the operator&rsquo;s side as live
                diligence: the meeting is not a recital of your deck but a
                real-time test of how you think under pressure, how you handle the
                hard question, and whether the story holds when
                probed.<Cite id="flux-partner" /> Prepare for the objection you are
                hoping no one raises; that is usually the one that decides the
                outcome.
              </p>
              <p>
                Graham&rsquo;s presentation advice keeps you intelligible in that
                room: make <em>one</em> thing clear, be concise, and show rather
                than explain — a live demonstration beats adjectives every
                time.<Cite id="pg-investors" />
              </p>
              <ChapterSources
                ids={["fr-partner-meeting", "flux-partner", "pg-investors"]}
              />
            </div>
          </section>

          {/* 10 — Materials */}
          <section id="ch-materials" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-materials" />
            <div className="prose">
              <p>
                Keep diligence light and deliberate. YC&rsquo;s guidance for seed is
                a compact set of materials: a one-page executive summary, a
                coherent leave-behind deck, product or demo evidence, and the
                essentials on team, market, traction, business model, and use of
                funds —                 not a data room built for a Series B.<Cite id="yc-seed-guide" />
              </p>
              <p>
                When a fuller data room is warranted, the standard contents are
                well understood: incorporation documents, the cap table, IP
                assignments, key customer and supplier agreements, and a product
                or security overview.<Cite id="seedlegals-preseed" /> Flux&rsquo;s contribution is to
                treat the room as a <em>signal</em> instrument: stage what you
                share and when, because every disclosure communicates something
                about confidence, organization, and momentum, and the sequence is
                yours to control.<Cite id="flux-materials" />
              </p>
              <ChapterSources
                ids={["yc-seed-guide", "flux-materials", "seedlegals-preseed"]}
              />
            </div>
          </section>

          {/* 11 — Leverage */}
          <section id="ch-leverage" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-leverage" />
            <div className="prose">
              <p>
                Leverage is built before a term sheet exists, not negotiated after.
                Flux&rsquo;s term-dynamics stage locates it in the process itself —
                competing interest, momentum, and optionality created by running a
                tight parallel raise — so that by the time terms are discussed, the
                board is already set in your favor.<Cite id="flux-terms" />
              </p>
              <p>
                Graham&rsquo;s mechanism is the same: leverage comes from having
                more than one investor genuinely interested at the same time, which
                is the entire reason to run the process in
                parallel.<Cite id="pg-fr" /> But there is a discipline to it — YC
                warns against over-optimizing valuation at the expense of closing,
                and against burning goodwill on terms that do not matter. Keep the
                negotiation focused on the few terms that actually do, and take a
                good, clean offer.<Cite id="yc-seed-guide" />
              </p>
              <p>
                And remember what the leverage is <em>for</em>. Fundraising is a
                means, not an end; the win condition is closing the right money
                quickly and getting back to building.<Cite id="pg-fr" />
              </p>
              <ChapterSources ids={["flux-terms", "pg-fr", "yc-seed-guide"]} />
            </div>
          </section>

          {/* 12 — Syndicate */}
          <section id="ch-syndicate" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-syndicate" />
            <div className="prose">
              <p>
                A round is constructed, not merely accumulated. Flux&rsquo;s
                syndicate stage is about choosing co-investors for the{" "}
                <em>signal</em> they send and the role they play, not only the
                capital they wire — and about understanding signaling risk, where
                the wrong name or a passive lead can quietly hurt the next
                round.<Cite id="flux-syndicate" />
              </p>
              <p>
                Signal compounds. A credible lead or a respected angel makes the
                next commitment easier — which is why the order in which you close
                matters as much as who, and why a parallel process that surfaces
                interest at once creates leverage.<Cite id="pg-fr" /> Where defensibility is part of
                the story, be precise about which kind — NFX&rsquo;s taxonomy of
                network effects is the vocabulary investors use to judge whether a
                moat is real or merely asserted.<Cite id="nfx-network-effects" />
              </p>
              <ChapterSources
                ids={["flux-syndicate", "nfx-network-effects", "pg-fr"]}
              />
            </div>
          </section>

          {/* 13 — Closing */}
          <section id="ch-closing" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-closing" />
            <div className="prose">
              <p>
                A verbal yes is not money. Flux&rsquo;s closing stage is the
                unglamorous, decisive work of converting commitment into a wire and
                then setting up the relationship that follows the
                close.<Cite id="flux-closing" /> Until documents are signed and a
                wire path exists, treat interest as unresolved — the same rule that
                governs the whole process.<Cite id="pg-fr" />
              </p>
              <p>
                Speed protects you here. YC&rsquo;s advice is unambiguous: once an
                investor says yes, use standard documents and close
                quickly — momentum decays, and an unsigned commitment can evaporate
                in a single bad week.<Cite id="yc-seed-guide" /> Close committed
                money first, then keep the rest of the process moving until the
                round is full.<Cite id="pg-fr" />
              </p>
              <p>
                What follows the close is the longest part. Flux&rsquo;s point about
                post-close alignment is that the relationship you set up in the
                first weeks — cadence, expectations, what &ldquo;help&rdquo; means —
                is the one you live with for years.<Cite id="flux-closing" />
              </p>
              <ChapterSources
                ids={["flux-closing", "yc-seed-guide", "pg-fr"]}
              />
            </div>
          </section>

          {/* 14 — Mistakes */}
          <section id="ch-mistakes" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-mistakes" />
            <div className="prose">
              <p>
                The failure modes are consistent and mostly avoidable with
                discipline rather than talent.<Cite id="pg-fr" />
              </p>
              <ul>
                <li>
                  <strong>Raising sequentially.</strong> Talking to investors one
                  at a time forfeits the comparison and leverage that a parallel
                  process creates.<Cite id="pg-fr" />
                </li>
                <li>
                  <strong>Treating soft interest as commitment.</strong>{" "}
                  &ldquo;This is exciting, keep me posted&rdquo; is a no until it is
                  signed.<Cite id="pg-fr" />
                </li>
                <li>
                  <strong>Running the raise as a background task.</strong> A raise
                  is a focused sprint; half-running it doubles its length and its
                  damage.<Cite id="flux-process" />
                </li>
                <li>
                  <strong>Over-optimizing valuation.</strong> Squeezing the last
                  turn of price can cost you the round, the lead, or the
                  speed.<Cite id="yc-seed-guide" />
                </li>
                <li>
                  <strong>A bloated deck with no &ldquo;why now.&rdquo;</strong>{" "}
                  Investors skim; a long deck without a sharp market-shift slide
                  loses them.<Cite id="yc-deck" />
                </li>
                <li>
                  <strong>Top-down market sizing.</strong> &ldquo;1% of a huge
                  market&rdquo; signals you do not know your real unit; build it
                  bottom-up.<Cite id="pg-convince" />
                </li>
                <li>
                  <strong>Projection over proof.</strong> Hypothetical hockey
                  sticks persuade no one; one real number does.<Cite id={["stripe-preseed", "pg-ds"]} />
                </li>
              </ul>
              <ChapterSources
                ids={[
                  "pg-fr",
                  "yc-deck",
                  "yc-seed-guide",
                  "flux-process",
                  "pg-convince",
                  "stripe-preseed",
                  "pg-ds",
                ]}
              />
            </div>
          </section>

          {/* 15 — Checklist */}
          <section id="ch-checklist" className="chapter" style={{ marginTop: "4.5rem" }}>
            <Head id="ch-checklist" />
            <div className="prose">
              <p>
                &ldquo;Ready&rdquo; is concrete. Before the first real meeting, the
                following should exist — assembled, not
                improvised.<Cite id={["yc-seed-guide", "pg-fr"]} />
              </p>
              <ul>
                <li>
                  A bottom-up market model: buyer count × annual spend × your take
                  rate.<Cite id="pg-convince" />
                </li>
                <li>
                  A one-page teaser.<Cite id="yc-seed-guide" />
                </li>
                <li>
                  A 12&ndash;15 slide leave-behind deck.<Cite id="yc-seed-deck" />
                </li>
                <li>
                  An 18-month use-of-funds model tied to the next
                  milestone.<Cite id="yc-seed-guide" />
                </li>
                <li>
                  SAFE terms decided in advance.<Cite id="yc-safes" />
                </li>
                <li>
                  A tiered investor pipeline and a way to track
                  it.<Cite id="flux-mapping" />
                </li>
                <li>
                  Product screenshots and/or a short demo.<Cite id="pg-investors" />
                </li>
                <li>
                  A data room: incorporation, cap table, IP assignments,
                  customer/supplier docs, product/security
                  overview.<Cite id="seedlegals-preseed" />
                </li>
              </ul>
              <p>
                Then run it as a sprint, in parallel, from a story you can defend —
                and close the right money fast.<Cite id={["pg-fr", "flux-process", "yc-seed-guide"]} />
              </p>
              <ChapterSources
                ids={[
                  "yc-seed-guide",
                  "pg-fr",
                  "pg-convince",
                  "yc-seed-deck",
                  "yc-safes",
                  "flux-mapping",
                  "flux-process",
                  "pg-investors",
                  "seedlegals-preseed",
                ]}
              />
            </div>

            <div
              style={{
                marginTop: "3.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--ink)",
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                className="serif"
                style={{ fontSize: "1.4rem", margin: 0, maxWidth: "26ch" }}
              >
                Read the originals — every claim above is traceable.
              </p>
              <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
                <Link href="/sources" className="btn btn--accent">
                  Source catalogue <span className="arr">→</span>
                </Link>
                <Link href="/method" className="btn">
                  The method
                </Link>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
