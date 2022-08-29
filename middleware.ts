import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/login") {
    const { status } = await fetch(
      `${request.nextUrl.origin}/api/auth/verify`,
      {
        headers: request.headers,
      }
    );

    if (status === 200) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const { status } = await fetch(
      `${request.nextUrl.origin}/api/auth/verify`,
      {
        headers: request.headers,
      }
    );

    if (status !== 200) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login/:path*"],
};
