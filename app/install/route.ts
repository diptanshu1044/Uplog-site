import { getInstallResponse } from "@/lib/install-route";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  return getInstallResponse(request);
}
