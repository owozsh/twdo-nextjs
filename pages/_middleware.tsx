import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: any, ev: any) {
  const url = req.nextUrl.clone();

  if (url.pathname == "/") {
    url.pathname = "sign-up";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
