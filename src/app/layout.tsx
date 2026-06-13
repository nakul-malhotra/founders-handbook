import type { Metadata } from "next";
import { Bricolage_Grotesque, Spectral, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-bricolage",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-spectral",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-spline-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://founders-handbook.vercel.app"),
  title: {
    default: `${site.name} — ${site.volumeTitle}`,
    template: `%s — ${site.name}`,
  },
  description:
    "A reading-first, fully-cited field guide to raising venture capital. Every claim traced to a named primary source.",
  openGraph: {
    title: `${site.name} — ${site.volumeTitle}`,
    description:
      "A reading-first, fully-cited field guide to raising venture capital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${spectral.variable} ${splineMono.variable}`}
    >
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
