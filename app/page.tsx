import Link from "next/link";
import { Button } from "@/components/ui/button";

const GITHUB_URL = "https://github.com/diptanshu1044/uplog";

function FileIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
      <line x1="8" y1="9" x2="10" y2="9" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function DownloadArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "var(--bg)",
          borderColor: "var(--border)",
        }}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-mono text-lg font-bold"
            style={{ color: "var(--accent)" }}
          >
            uplog
          </Link>
          <div className="flex items-center gap-6 font-mono text-sm">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-120 hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}
            >
              GitHub
            </a>
            <a
              href="#download"
              className="transition-colors duration-120 hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}
            >
              Download
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-[120px] text-center">
          <div className="hero-fade-in flex flex-col items-center">
            <span
              className="mb-8 inline-block font-mono text-xs tracking-wide"
              style={{
                color: "var(--accent)",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "0.375rem 0.875rem",
              }}
            >
              v0.1.0 — now available
            </span>

            <h1
              className="mb-6 max-w-3xl font-mono text-[32px] font-semibold leading-tight md:text-[clamp(36px,5vw,64px)]"
              style={{ color: "var(--text-primary)" }}
            >
              Ship logs and metrics
              <br />
              from any server.
              <br />
              No dependencies.
            </h1>

            <p
              className="mb-10 max-w-[560px] text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              uplog is a single binary that tails your log files, collects
              system metrics, and ships structured JSON to any backend over
              HTTP. Configure it in five lines of TOML.
            </p>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="default">
                <a href="#download">Download Binary</a>
              </Button>
              <Button asChild variant="secondary">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>

            <div
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              <span>&lt; 10MB RAM</span>
              <span style={{ color: "var(--border)" }}>|</span>
              <span>Single binary</span>
              <span style={{ color: "var(--border)" }}>|</span>
              <span>Backend-agnostic</span>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="section-heading">How it works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="feature-card">
              <div
                className="mb-4"
                style={{ color: "var(--accent)" }}
              >
                <FileIcon />
              </div>
              <p
                className="mb-1 font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                Tail
              </p>
              <h3
                className="mb-3 font-mono text-base font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Log collection
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Watches your log files. Every new line becomes a structured
                LogLine with source, timestamp, and message.
              </p>
            </article>

            <article className="feature-card">
              <div
                className="mb-4"
                style={{ color: "var(--accent)" }}
              >
                <CpuIcon />
              </div>
              <p
                className="mb-1 font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                Collect
              </p>
              <h3
                className="mb-3 font-mono text-base font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Metric collection
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Snapshots CPU usage, memory, disk, and network counters on
                your configured interval.
              </p>
            </article>

            <article className="feature-card">
              <div
                className="mb-4"
                style={{ color: "var(--accent)" }}
              >
                <ArrowUpRightIcon />
              </div>
              <p
                className="mb-1 font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                Ship
              </p>
              <h3
                className="mb-3 font-mono text-base font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                HTTP shipping
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Batches everything into a single JSON payload and POSTs it
                to your endpoint. Works with any backend.
              </p>
            </article>
          </div>
        </section>

        {/* CONFIG */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="section-heading">Five lines of config</h2>
          <div className="code-block mb-4">
            <pre>
              <code>
                <span className="toml-section">[agent]</span>
                {"\n"}
                <span className="toml-key">id</span>
                {" = "}
                <span className="toml-value">&quot;prod-api-01&quot;</span>
                {"\n\n"}
                <span className="toml-section">[logs]</span>
                {"\n"}
                <span className="toml-key">paths</span>
                {" = "}
                <span className="toml-value">
                  [&quot;/var/log/app.log&quot;, &quot;/var/log/nginx/access.log&quot;]
                </span>
                {"\n\n"}
                <span className="toml-section">[metrics]</span>
                {"\n"}
                <span className="toml-key">interval_secs</span>
                {" = "}
                <span className="toml-value">30</span>
                {"\n\n"}
                <span className="toml-section">[shipper]</span>
                {"\n"}
                <span className="toml-key">endpoint</span>
                {" = "}
                <span className="toml-value">
                  &quot;https://your-backend.com/ingest&quot;
                </span>
                {"\n"}
                <span className="toml-key">ship_interval_seconds</span>
                {" = "}
                <span className="toml-value">60</span>
              </code>
            </pre>
          </div>
          <p
            className="text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Drop it in the same directory as the binary, or pass{" "}
            <code
              className="font-mono text-xs"
              style={{ color: "var(--text-primary)" }}
            >
              --config /path/to/uplog.toml
            </code>
          </p>
        </section>

        {/* PAYLOAD */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="section-heading">What gets shipped</h2>
          <div className="code-block mb-4">
            <pre>
              <code>{`{
  `}<span className="json-key">&quot;agent_id&quot;</span>{`: `}<span className="json-string">&quot;prod-api-01&quot;</span>{`,
  `}<span className="json-key">&quot;timestamp&quot;</span>{`: `}<span className="json-string">&quot;2025-06-07T10:00:00Z&quot;</span>{`,
  `}<span className="json-key">&quot;metrics&quot;</span>{`: {
    `}<span className="json-key">&quot;collected_at&quot;</span>{`: `}<span className="json-string">&quot;2025-06-07T09:59:30Z&quot;</span>{`,
    `}<span className="json-key">&quot;cpu_usage_percent&quot;</span>{`: `}<span className="json-number">12.4</span>{`,
    `}<span className="json-key">&quot;memory_used_mb&quot;</span>{`: `}<span className="json-number">1024</span>{`,
    `}<span className="json-key">&quot;memory_total_mb&quot;</span>{`: `}<span className="json-number">8192</span>{`,
    `}<span className="json-key">&quot;disk_used_gb&quot;</span>{`: `}<span className="json-number">45.2</span>{`,
    `}<span className="json-key">&quot;disk_total_gb&quot;</span>{`: `}<span className="json-number">200.0</span>{`,
    `}<span className="json-key">&quot;network_bytes_sent&quot;</span>{`: `}<span className="json-number">104857600</span>{`,
    `}<span className="json-key">&quot;network_bytes_recv&quot;</span>{`: `}<span className="json-number">52428800</span>{`
  },
  `}<span className="json-key">&quot;logs&quot;</span>{`: [
    {
      `}<span className="json-key">&quot;source&quot;</span>{`: `}<span className="json-string">&quot;file:/var/log/app.log&quot;</span>{`,
      `}<span className="json-key">&quot;timestamp&quot;</span>{`: `}<span className="json-string">&quot;2025-06-07T10:00:00Z&quot;</span>{`,
      `}<span className="json-key">&quot;message&quot;</span>{`: `}<span className="json-string">&quot;GET /api/health 200 14ms&quot;</span>{`
    }
  ]
}`}</code>
            </pre>
          </div>
          <p
            className="text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Every payload is self-describing. No schema registration. No agents
            to configure on the receiving end.
          </p>
        </section>

        {/* DOWNLOAD */}
        <section
          id="download"
          className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20"
        >
          <h2 className="section-heading">Download</h2>
          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <a href="#" className="download-btn">
                Linux x86_64 (.tar.gz)
                <DownloadArrowIcon />
              </a>
              <a href="#" className="download-btn">
                macOS x86_64 (.tar.gz)
                <DownloadArrowIcon />
              </a>
              <a href="#" className="download-btn">
                macOS ARM64 / Apple Silicon (.tar.gz)
                <DownloadArrowIcon />
              </a>
            </div>
            <div className="code-block">
              <pre>
                <code>
                  <span className="shell-comment"># Extract</span>
                  {"\n"}
                  <span className="shell-command">
                    tar -xzf uplog-linux-x86_64.tar.gz
                  </span>
                  {"\n\n"}
                  <span className="shell-comment"># Run</span>
                  {"\n"}
                  <span className="shell-command">
                    ./uplog --config uplog.toml
                  </span>
                </code>
              </pre>
            </div>
          </div>
          <p
            className="text-center text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Source available on{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors duration-120 hover:text-[var(--accent)]"
            >
              GitHub
            </a>
            . Build from source with{" "}
            <code
              className="font-mono text-xs"
              style={{ color: "var(--text-primary)" }}
            >
              cargo build --release
            </code>
          </p>
        </section>

        {/* GITHUB CTA */}
        <section
          className="py-20"
          style={{ backgroundColor: "var(--surface)" }}
        >
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2
              className="mb-4 font-mono text-2xl font-semibold md:text-3xl"
              style={{ color: "var(--text-primary)" }}
            >
              Open source. MIT licensed.
            </h2>
            <p
              className="mb-8 text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              Read the source, open issues, submit PRs.
            </p>
            <Button asChild variant="outline">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm md:flex-row"
          style={{ color: "var(--text-secondary)" }}
        >
          <span className="font-mono">uplog</span>
          <span>MIT License</span>
          <div className="flex items-center gap-6 font-mono">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-120 hover:text-[var(--accent)]"
            >
              GitHub
            </a>
            <a
              href="#download"
              className="transition-colors duration-120 hover:text-[var(--accent)]"
            >
              Download
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
