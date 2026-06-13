import Link from "next/link";
import { sources, type SourceId } from "@/data/sources";

function uniq(ids: SourceId[]): SourceId[] {
  return [...new Set(ids)];
}

/** Inline citation marker(s): superscript catalogue number + hover card. */
export function Cite({ id }: { id: SourceId | SourceId[] }) {
  const ids = uniq(Array.isArray(id) ? id : [id]);
  return (
    <>
      {ids.map((sid) => {
        const s = sources[sid];
        return (
          <a
            key={sid}
            className="cite"
            href={`/sources#src-${s.id}`}
            aria-label={`Source ${s.n}: ${s.author}, ${s.title}`}
          >
            <span>{s.n}</span>
            <span className="cite__pop" role="note">
              <b>{s.author}.</b> &ldquo;{s.title}.&rdquo;
              <span className="src">
                {s.publisher} · {s.year}
              </span>
            </span>
          </a>
        );
      })}
    </>
  );
}

/** The "Sources for this chapter" list rendered at the end of each chapter. */
export function ChapterSources({ ids }: { ids: SourceId[] }) {
  const list = uniq(ids).map((sid) => sources[sid]);
  return (
    <aside className="chapsrc" aria-label="Sources for this chapter">
      <p className="chapsrc__h">Sources — this chapter</p>
      <ol>
        {list.map((s) => (
          <li key={s.id}>
            <span className="chapsrc__n">[{s.n}]</span>
            <cite>
              <b>{s.author}.</b> &ldquo;{s.title}.&rdquo;{" "}
              {s.url.startsWith("/") ? (
                <Link href={s.url}>{s.publisher}</Link>
              ) : (
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.publisher}
                </a>
              )}
              {s.year !== "n.d." ? `, ${s.year}` : ""}.
            </cite>
          </li>
        ))}
      </ol>
    </aside>
  );
}
