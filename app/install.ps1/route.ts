import { INSTALL_PS1_SCRIPT } from "@/lib/install-ps1-script";

export const dynamic = "force-static";

export function GET() {
  return new Response(INSTALL_PS1_SCRIPT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
