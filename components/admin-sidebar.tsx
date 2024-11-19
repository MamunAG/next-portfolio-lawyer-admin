import Link from "next/link";
import React from "react";
import { FaBlog } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { FaMessage } from "react-icons/fa6";

function AdminSidebar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0">
      <div className="w-1/6 h-lvh p-2 shadow-lg shadow-blue-500/40">
        <h1 className="text-center">Portfolio</h1>
        <div className="mt-3">
          <div>
            <Link
              href="/admin"
              className="flex items-center p-2 border-b hover:bg-slate-200 rounded"
            >
              <TiHome className="mr-3 size-4" /> Home
            </Link>
          </div>
          <div>
            <Link
              href="/admin/blogs"
              className="flex items-center p-2 border-b hover:bg-slate-200 rounded"
            >
              <FaBlog className="mr-3 size-4" /> Blogs
            </Link>
            <Link
              href="/admin/tags"
              className="flex items-center p-2 border-b hover:bg-slate-200 rounded"
            >
              <IoPricetags className="mr-3 size-4" /> Tag
            </Link>
            <Link
              href="/admin/hire-me"
              className="flex items-center p-2 border-b hover:bg-slate-200 rounded"
            >
              <VscGitPullRequestGoToChanges className="mr-3 size-4" /> Hire-me
              Request
            </Link>
            <Link
              href="/admin/message"
              className="flex items-center p-2 border-b hover:bg-slate-200 rounded"
            >
              <FaMessage className="mr-3 size-4" /> Message
            </Link>
          </div>
        </div>
      </div>
      <div className="w-5/6"></div>
    </div>
  );
}

export default AdminSidebar;
