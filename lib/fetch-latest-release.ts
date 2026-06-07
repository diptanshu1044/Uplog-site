const RELEASE_API =
  "https://api.github.com/repos/diptanshu1044/uplog/releases/latest";
const FETCH_TIMEOUT_MS = 5000;

let cachedTag: Promise<string | null> | null = null;

export function fetchLatestReleaseTag(): Promise<string | null> {
  if (!cachedTag) {
    cachedTag = (async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
        const response = await fetch(RELEASE_API, { signal: controller.signal });
        clearTimeout(timeout);

        if (!response.ok) return null;

        const data: { tag_name?: string } = await response.json();
        return typeof data.tag_name === "string" ? data.tag_name : null;
      } catch {
        return null;
      }
    })();
  }

  return cachedTag;
}
