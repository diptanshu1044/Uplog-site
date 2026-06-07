import { INSTALL_SCRIPT } from "@/lib/install-script";

export const dynamic = "force-static";

export function GET() {
  return new Response(INSTALL_SCRIPT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
