import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname.startsWith("/auth");
  const isDashboard = pathname.startsWith("/dashboard");

  const authToken = request.cookies.get("auth-token")?.value;

  // 🚫 Not authenticated → redirect dashboard to landing
  if (!authToken && isDashboard) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ✅ Authenticated → prevent access to login / landing
  if (authToken && (isAuthPage || pathname === "/")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/auth/:path*", "/dashboard/:path*"],
};
