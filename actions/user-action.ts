"use server";

// import { User } from "next-auth";
import prismadb from "@/lib/prismadb";
import { User } from "@prisma/client";

export async function getUserFromDb(email: string): Promise<User | null> {
  return await prismadb.user.findFirst({
    where: { email },
  });
}
