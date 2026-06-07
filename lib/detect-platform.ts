export const RELEASE_BASE =
  "https://github.com/diptanshu1044/uplog/releases/latest/download";

export const BINARIES = [
  { filename: "uplog-linux-x86_64", label: "Linux x86_64" },
  { filename: "uplog-linux-aarch64", label: "Linux ARM64 (aarch64)" },
  { filename: "uplog-macos-x86_64", label: "macOS x86_64" },
  { filename: "uplog-macos-aarch64", label: "macOS ARM64 (Apple Silicon)" },
  { filename: "uplog-windows-x86_64.exe", label: "Windows x86_64" },
] as const;

export type BinaryFilename = (typeof BINARIES)[number]["filename"];

export type PlatformDetection =
  | { supported: true; filename: BinaryFilename }
  | { supported: false };

export function getDownloadUrl(filename: BinaryFilename): string {
  return `${RELEASE_BASE}/${filename}`;
}

export function detectPlatform(
  userAgent: string,
  platform: string,
  devicePixelRatio = 1
): PlatformDetection {
  const ua = userAgent.toLowerCase();
  const plat = platform.toLowerCase();

  if (
    /android|iphone|ipad|ipod/.test(ua) ||
    plat.includes("iphone") ||
    plat.includes("ipad")
  ) {
    return { supported: false };
  }

  if (plat.includes("win") || ua.includes("windows")) {
    return { supported: true, filename: "uplog-windows-x86_64.exe" };
  }

  if (
    plat.includes("mac") ||
    ua.includes("mac os") ||
    ua.includes("macintosh")
  ) {
    const isArm =
      plat.includes("arm") || ua.includes("arm") || devicePixelRatio >= 2;
    return {
      supported: true,
      filename: isArm ? "uplog-macos-aarch64" : "uplog-macos-x86_64",
    };
  }

  if (plat.includes("linux") || ua.includes("linux")) {
    const isAarch64 = ua.includes("aarch64") || ua.includes("arm64");
    return {
      supported: true,
      filename: isAarch64 ? "uplog-linux-aarch64" : "uplog-linux-x86_64",
    };
  }

  return { supported: false };
}
