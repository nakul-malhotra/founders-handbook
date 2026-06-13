import Link from "next/link";
import { site } from "@/data/site";

export default function SiteHeader() {
  return (
    <header className="masthead">
      <div className="shell masthead__row">
        <Link href="/" className="wordmark" aria-label={`${site.name} — home`}>
          <b>{site.name}</b>
          <span className="wordmark__no">FM&nbsp;I</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-optional={"optional" in item && item.optional ? "" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.repo} target="_blank" rel="noreferrer" data-optional="">
            Repo ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
