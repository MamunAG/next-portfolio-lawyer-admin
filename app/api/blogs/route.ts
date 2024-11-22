/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth } from "@/auth";
import prismadb from "@/lib/prismadb";
import { BlogDetails, BlogMaster, BlogTags } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const blogs = await prismadb.blogMaster.findMany({
    include: { BlogDetails: true },
  });
  return NextResponse.json(blogs);
}

// export const POST = auth(function POST(req, ctx) {
//   // if (!req.auth) {
//   //   return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
//   // }
//   const session = await getSession(req);
//   NextResponse.json(req.json());
// });

export async function POST(req: Request) {
  const session = await auth();

  // Check if the user is authenticated
  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const { blogMaster, blogDetails, blogTags } = (await req.json()) as {
    blogMaster: BlogMaster;
    blogDetails: BlogDetails[];
    blogTags: BlogTags[];
  };

  if (!blogMaster.title) {
    throw new Error("Title is required");
  }
  if (!blogDetails) {
    throw new Error("Details is required");
  }

  //check unique title
  const preBlog = await prismadb.blogMaster.findFirst({
    where: {
      title: blogMaster.title,
    },
  });
  if (preBlog)
    NextResponse.json(
      { message: "This blog title already exist. Please try new one." },
      { status: 400 }
    );
  //end-check unique title

  const blog = await prismadb.blogMaster.create({
    data: {
      title: blogMaster.title,
      isPublished: blogMaster.isPublished,
      composedDate: blogMaster.composedDate,
    },
  });

  blogDetails?.forEach(async (element: BlogDetails) => {
    await prismadb.blogDetails.create({
      data: {
        masterId: blog.id,
        sectionType: element.sectionType,
        imagePreview: element.imagePreview,
        text: element.text,
        sortingNo: element.sortingNo,
      },
    });
  });

  blogTags?.forEach(async (element: BlogTags) => {
    await prismadb.blogTags.create({
      data: {
        blogId: blog.id,
        tagId: element.tagId,
      },
    });
  });

  const newBlog = await prismadb.blogMaster.findFirst({
    include: {
      BlogDetails: true,
      BlogTags: {
        include: {
          tag: true,
        },
      },
    },
    where: { id: blog.id },
  });

  return NextResponse.json(newBlog);
}
