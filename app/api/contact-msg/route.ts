/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const msgs = await prismadb.contactMessage.findMany();
  return NextResponse.json(msgs);
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name) {
      throw new Error("Name is required");
    }
    if (name.length < 3) {
      throw new Error("Tag name must be at least 3 character.");
    }
    if (!email) {
      throw new Error("Contact number is required");
    }
    if (email.length < 10) {
      throw new Error("Please provide a valid contact number.");
    }

    const msg = await prismadb.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
        createdDate: new Date(),
      },
    });

    return NextResponse.json(msg);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" + error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name, email, subject, message } = await req.json();

    if (Number(id) <= 0) {
      throw new Error("Please select a request.");
    }
    if (Number(id) != Number(id)) {
      throw new Error("Bad request. Request not consistent.");
    }
    if (!name) {
      throw new Error("Name is required.");
    }

    const msg = await prismadb.contactMessage.update({
      data: {
        name,
        email,
        subject,
        message,
      },
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(msg);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" + error },
      { status: 500 }
    );
  }
}
