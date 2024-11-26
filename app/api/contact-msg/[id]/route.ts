/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const msgs = await prismadb.contactMessage.findFirst({
      where: { id: Number(params.id) },
    });

    if (msgs) {
      return NextResponse.json(msgs);
    } else {
      return NextResponse.json(
        { error: "Contact request not found." },
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
      throw new Error("Contact request not selected.");
    }

    const contactMessage = await prismadb.contactMessage.findFirst({
      where: { id: Number(params.id) },
    });

    if (!contactMessage) {
      throw new Error("Contact request not found.");
    }

    const msgs = await prismadb.contactMessage.findFirst({
      where: { id: Number(params.id) },
    });

    if (msgs) {
      await prismadb.contactMessage.delete({
        where: {
          id: Number(params.id),
        },
      });

      return NextResponse.json(
        { message: "Contact request deleted successfully." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Contact request not found." },
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
