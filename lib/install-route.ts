import { getDownloadUrl } from "@/lib/detect-platform";
import { INSTALL_PS1_SCRIPT } from "@/lib/install-ps1-script";
import { INSTALL_SCRIPT } from "@/lib/install-script";

const SCRIPT_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600",
} as const;

function isWindows(userAgent: string): boolean {
  return /windows/i.test(userAgent);
}

function wantsHtml(accept: string): boolean {
  return accept.includes("text/html");
}

export function getInstallResponse(request: Request): Response {
  const userAgent = request.headers.get("user-agent") ?? "";
  const accept = request.headers.get("accept") ?? "";

  if (isWindows(userAgent)) {
    if (wantsHtml(accept)) {
      return Response.redirect(
        getDownloadUrl("uplog-windows-x86_64.exe"),
        302
      );
    }

    return new Response(INSTALL_PS1_SCRIPT, { headers: SCRIPT_HEADERS });
  }

  return new Response(INSTALL_SCRIPT, { headers: SCRIPT_HEADERS });
}
