/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const blogs = await prismadb.blogMaster.findMany({
    include: { BlogDetails: true },
  });

  const data: BlogWithFirstDetailsDto[] = [];

  blogs?.forEach((element) => {
    const item: BlogWithFirstDetailsDto = {
      id: element.id,
      title: element.title,
      firstDetails: element.BlogDetails?.filter(
        (v, i) => v.sectionType === "text"
      )[0]?.text,
      firstImageUrl: element.BlogDetails?.filter(
        (v, i) => v.sectionType === "image"
      )[0]?.imagePreview,
    };

    data.push(item);
  });
  return NextResponse.json(data);
}
