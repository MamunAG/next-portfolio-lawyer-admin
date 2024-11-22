/* eslint-disable @typescript-eslint/no-unused-vars */
// api > hello > [slug] > route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const paramGreeting = request.nextUrl.searchParams.get("greeting");
    const greeting = `${paramGreeting || "Hello"} ${slug}!!!`;
    const json = {
      greeting,
    };
    return NextResponse.json(json);

    // If blog data exists, return it as JSON
    const blog = null;
    if (blog) {
      return NextResponse.json(blog);
    } else {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
  } catch (error) {
    // Handle error
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// export async function POST(req: Request, res: NextApiResponse) {
//   const session = await auth();

//   // Check if the user is authenticated
//   if (!session) {
//     return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
//   }

//   // Check if the user has the 'admin' role
//   // if (session?.user.role !== "admin") {
//   //   return NextResponse.json(
//   //     {
//   //       error: "Unauthorized access: User does not have admin privileges.",
//   //     },
//   //     { status: 401 }
//   //   );
//   // }

//   return NextResponse.json(await req.json());
//   // Proceed with the route for authorized users
//   // ... implementation of the API Route
// }

// /* eslint-disable @typescript-eslint/no-unused-vars */
// import prismadb from "@/lib/prismadb";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(
//   req: NextRequest,
//   res: NextResponse,
//   { params }: { params: { id: number } }
// ) {
//   try {
//     const id = params.id;

//     if (Number.isNaN(id) || id == undefined || id == null || Number(id) <= 0) {
//       return NextResponse.json(
//         { error: "Invalid ID" },
//         { status: 400 } // Return a 400 Bad Request for invalid IDs
//       );
//     }

//     const blog = await prismadb.blogMaster.findFirst({
//       include: {
//         BlogDetails: {
//           orderBy: { sortingNo: "asc" },
//         },
//         BlogTags: { include: { tag: true } },
//       },
//       where: { id: Number(id) },
//     });

//     if (blog) {
//       return NextResponse.json(blog);
//     } else {
//       return NextResponse.json({ message: "Blog not found" }, { status: 404 });
//     }
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req: Request) {
//   return NextResponse.json(await req.json());
// }
