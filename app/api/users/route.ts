/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const users = await prismadb.user.findMany();
  return NextResponse.json(users);
}

// export function GET(req: NextRequest, res: NextResponse) {
//   return NextResponse.json({ kkk: "dsaf" });
// }
