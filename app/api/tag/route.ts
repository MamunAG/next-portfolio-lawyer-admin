/* eslint-disable @typescript-eslint/no-unused-vars */

import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest
) {
  const tag = await prismadb.tag.findMany();

  if (!tag) {
    NextResponse.json({ message: "Tag not found." }, { status: 404 });
  }
  return NextResponse.json(tag);
}
