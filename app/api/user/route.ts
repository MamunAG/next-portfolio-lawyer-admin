/* eslint-disable @typescript-eslint/no-unused-vars */
import prismadb from "@/lib/prismadb";
import { saltAndHashPassword } from "@/utility/password";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const users = await prismadb.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }
    if (!name) {
      return NextResponse.json(
        { message: "Name is required." },
        { status: 400 }
      );
    }
    if (!password) {
      return NextResponse.json(
        { message: "Password is required." },
        { status: 400 }
      );
    }

    const existingUser = await prismadb.user.findFirst({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "This email already exist." },
        { status: 400 }
      );
    }

    const hashPass = await saltAndHashPassword(password);
    if (!hashPass) {
      return NextResponse.json(
        { error: "Internal server error during pass hashing." },
        { status: 500 }
      );
    }

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        password: hashPass,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
