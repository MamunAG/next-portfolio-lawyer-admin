// api > hello > [slug] > route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const paramGreeting = request.nextUrl.searchParams.get("greeting");
  const greeting = `${paramGreeting || "Hello"} ${slug}!!!`;
  const json = {
    greeting,
  };
  return NextResponse.json(json);
}

// export const GET = auth(function GET(req) {
//     if (req.auth) return NextResponse.json(req.auth);
//     return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
//   });