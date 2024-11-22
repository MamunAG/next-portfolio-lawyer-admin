/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const blogs = await prismadb.blogMaster.findMany({
    include: { BlogDetails: true },
  });
  return NextResponse.json(blogs);
}
