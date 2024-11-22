/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  res: NextResponse,
  { params }: { params: { id: number } }
) {
  try {
    const id = params.id;

    if (Number.isNaN(id) || id == undefined || id == null || Number(id) <= 0) {
      return NextResponse.json(
        { error: "Invalid ID" },
        { status: 400 } // Return a 400 Bad Request for invalid IDs
      );
    }

    const blog = await prismadb.blogMaster.findFirst({
      include: {
        BlogDetails: {
          orderBy: { sortingNo: "asc" },
        },
        BlogTags: { include: { tag: true } },
      },
      where: { id: Number(id) },
    });

    if (blog) {
      return NextResponse.json(blog);
    } else {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
