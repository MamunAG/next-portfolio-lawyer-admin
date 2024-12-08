/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { TagTable } from "@/app/admin/tags/tag-table";
import { ReactQueryKey } from "@/utility/react-query-key";
import TableSkeleton from "@/utility/table-skeleton";
import { useToast } from "@/components/ui/use-toast";
import { PageAction } from "@/utility/page-actions";
import { Tag } from "@prisma/client";
import prismadb from "@/lib/prismadb";
import { GetAllTags } from "./tag-data";

export const fetchCache = "force-no-store";

function Tags() {
  // const { toast } = useToast();
  const [tags, setData] = React.useState<Tag[]>();

  React.useEffect(() => {
    async function getData() {
      const tag = GetAllTags();
      return tag;
      // return (await axios.get("/api/tags/get-all")).data;
      const response = await fetch("/api/tags/get-all", { cache: "no-store" });
      return await response.json();
    }
    getData().then((res) => setData(res));
  }, []);

  console.log(tags);
  // const {
  //   data: tags,
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: [ReactQueryKey.tags],
  //   queryFn: async () => (await axios.get("/api/tag")).data,
  // });

  // if (isError) {
  //   console.log(error.message);
  //   toast({
  //     variant: "destructive",
  //     title: "Uh oh! Something went wrong.",
  //     description: "There was a problem with the request.",
  //   });
  //   return null;
  // }

  return (
    <div className="">
      <div className="flex items-center justify-between border-b pb-2">
        <div className="font-bold text-2xl">Tags</div>
        <div>
          <Link href={`tags/${PageAction.add}`}>
            <Button>Add New Tag</Button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        {tags ? <TagTable data={tags} /> : <TableSkeleton />}
      </div>
    </div>
  );
}

export default Tags;
