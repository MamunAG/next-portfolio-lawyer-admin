/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const msgs = await prismadb.hireMe.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (msgs) {
      return NextResponse.json(msgs);
    } else {
      return NextResponse.json(
        { error: "Hire request not found." },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" + error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (Number(params.id) <= 0) {
      throw new Error("Hire me request not selected.");
    }

    const hireMe = await prismadb.hireMe.findFirst({
      where: { id: Number(params.id) },
    });

    if (!hireMe) {
      return NextResponse.json(
        { error: "Hire request not found." },
        { status: 404 }
      );
    }

    await prismadb.hireMe.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(
      { message: "Hireme request deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" + error },
      { status: 500 }
    );
  }
}
