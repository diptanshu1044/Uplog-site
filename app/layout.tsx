import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const siteDescription =
  "uplog is a single-binary Rust agent that tails log files, collects system metrics, and ships structured JSON to any backend. Zero install dependencies. Under 10MB RAM. Backend-agnostic.";

export const metadata: Metadata = {
  title: "uplog — Lightweight Observability Agent for Linux Servers",
  description: siteDescription,
  keywords: [
    "observability agent",
    "log shipping",
    "rust agent",
    "system metrics",
    "log tailing",
    "linux monitoring",
    "open source observability",
  ],
  metadataBase: new URL("https://uplog.in"),
  alternates: {
    canonical: "https://uplog.in",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "uplog — Lightweight Observability Agent",
    description:
      "Single-binary Rust agent. Tails logs, collects metrics, ships JSON. Zero dependencies.",
    url: "https://uplog.in",
    siteName: "uplog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "uplog — Lightweight Observability Agent",
    description:
      "Single-binary Rust agent. Tails logs, collects metrics, ships JSON. Zero dependencies.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "uplog",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux, macOS",
  description: siteDescription,
  url: "https://uplog.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${ibmPlexSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
