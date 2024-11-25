"use server";

import prismadb from "@/lib/prismadb";

export async function GetAllTags() {
  const tag = await prismadb.tag.findMany();
  return tag;
}
