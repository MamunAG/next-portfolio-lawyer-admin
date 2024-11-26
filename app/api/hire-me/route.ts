/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const msgs = await prismadb.hireMe.findMany();
  return NextResponse.json(msgs);
}

export async function POST(req: Request) {
  try {
    const { name, email, contact, address } = await req.json();

    if (!name) {
      throw new Error("Name is required");
    }
    if (name.length < 3) {
      throw new Error("Tag name must be at least 3 character.");
    }
    if (!contact) {
      throw new Error("Contact number is required");
    }
    if (contact.length < 10) {
      throw new Error("Please provide a valid contact number.");
    }

    const hiremeReq = await prismadb.hireMe.create({
      data: {
        name,
        email,
        contact,
        address,
        createdDate: new Date(),
      },
    });

    return NextResponse.json(hiremeReq);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" + error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name, email, contact, address } = await req.json();

    if (Number(id) <= 0) {
      throw new Error("Please select a request.");
    }
    if (Number(id) != Number(id)) {
      throw new Error("Bad request. Request not consistent.");
    }
    if (!name) {
      throw new Error("Name is required.");
    }

    const hiremeReq = await prismadb.hireMe.update({
      data: {
        name,
        email,
        contact,
        address,
      },
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(hiremeReq);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" + error },
      { status: 500 }
    );
  }
}
