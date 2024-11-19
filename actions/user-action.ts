"use server";

import { User } from "next-auth";
import prismadb from "@/lib/prismadb";

export async function getUserFromDb(
  email: string,
  pwHash: string
): Promise<User | null> {
  return await prismadb.user.findFirst({
    where: { email, password: pwHash },
  });
  return await prismadb.user.findFirst();
}
