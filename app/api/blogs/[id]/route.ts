/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;

  if (Number.isNaN(id) || id == undefined || id == null || Number(id) <= 0)
    return null;

  const blog = await prismadb.blogMaster.findFirst({
    include: {
      BlogDetails: {
        orderBy: { sortingNo: "asc" },
      },
      BlogTags: { include: { tag: true } },
    },
    where: { id: Number(id) },
  });

  return NextResponse.json(blog);
}
