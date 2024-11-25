/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    NextResponse.json({ message: "Tag not selected." }, { status: 400 });
  }

  const tag = await prismadb.tag.findFirst({
    where: { id: Number(id) },
  });

  if (!tag) {
    NextResponse.json({ message: "Tag not found." }, { status: 404 });
  }
  return NextResponse.json(tag);
}
