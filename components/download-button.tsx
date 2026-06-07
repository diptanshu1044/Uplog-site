"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BINARIES,
  detectPlatform,
  getDownloadUrl,
} from "@/lib/detect-platform";
import { fetchLatestReleaseTag } from "@/lib/fetch-latest-release";

const DETECT_DURATION_MS = 1200;
const GITHUB_URL = "https://github.com/diptanshu1044/uplog";

type DownloadState = "idle" | "detecting" | "unsupported";

type DownloadButtonProps = {
  variant?: "default" | "secondary" | "outline" | "download-btn";
  children?: React.ReactNode;
  className?: string;
};

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

export function DownloadButton({
  variant = "default",
  children = "Download Binary",
  className,
}: DownloadButtonProps) {
  const [state, setState] = useState<DownloadState>("idle");
  const [progress, setProgress] = useState(0);
  const [releaseTag, setReleaseTag] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (variant !== "download-btn") return;

    fetchLatestReleaseTag().then((tag) => {
      if (tag) setReleaseTag(tag);
    });
  }, [variant]);

  const handleClick = useCallback(() => {
    if (state === "detecting") return;

    setState("detecting");
    setProgress(0);

    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(elapsed / DETECT_DURATION_MS, 1);
      setProgress(ratio * 100);

      if (ratio < 1) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const result = detectPlatform(
        navigator.userAgent,
        navigator.platform,
        window.devicePixelRatio
      );

      if (result.supported) {
        window.location.href = getDownloadUrl(result.filename);
        return;
      }

      setState("unsupported");
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [state]);

  const isDetecting = state === "detecting";
  const label = isDetecting ? "Detecting your platform..." : children;

  const buttonContent =
    variant === "download-btn" ? (
      <button
        type="button"
        onClick={handleClick}
        disabled={isDetecting}
        className={`download-btn ${className ?? ""}`}
        aria-busy={isDetecting}
      >
        <span>{label}</span>
        <DownloadArrowIcon />
      </button>
    ) : (
      <Button
        type="button"
        variant={variant === "default" ? "default" : variant}
        onClick={handleClick}
        disabled={isDetecting}
        className={className}
        aria-busy={isDetecting}
      >
        {label}
      </Button>
    );

  return (
    <div
      className={`flex flex-col gap-4 ${variant === "download-btn" ? "w-full" : ""}`}
    >
      {buttonContent}

      {variant === "download-btn" && releaseTag && (
        <span
          className="inline-block w-fit font-mono text-xs tracking-wide"
          style={{
            color: "var(--accent)",
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            padding: "0.375rem 0.875rem",
          }}
        >
          {releaseTag}
        </span>
      )}

      {isDetecting && (
        <div
          className="download-progress-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Detecting your platform"
        >
          <div
            className="download-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {state === "unsupported" && (
        <div
          className="download-fallback"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            className="mb-3 text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            We couldn&apos;t detect a supported desktop platform. Build from
            source on{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors duration-120 hover:text-[var(--accent)]"
              style={{ color: "var(--text-primary)" }}
            >
              GitHub
            </a>{" "}
            with{" "}
            <code
              className="font-mono text-xs"
              style={{ color: "var(--text-primary)" }}
            >
              cargo build --release
            </code>
            , or download a binary directly:
          </p>
          <ul className="flex flex-col gap-2">
            {BINARIES.map(({ filename, label: binaryLabel }) => (
              <li key={filename}>
                <a
                  href={getDownloadUrl(filename)}
                  className="download-btn"
                >
                  <span>{binaryLabel}</span>
                  <DownloadArrowIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
