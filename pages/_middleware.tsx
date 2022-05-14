import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: any, ev: any) {
  const isLoggedIn = true;
  const url = req.nextUrl.clone();

  if (url.pathname == "/") {
    url.pathname = isLoggedIn ? "today" : "sign-up";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
