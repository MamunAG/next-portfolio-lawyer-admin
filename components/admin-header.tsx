import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
// import { SignOut } from "./auth/signout-button";
// import UserAvatar from "./auth/UserAvatar";
import { handleSignOut } from "@/actions/authActions";

function AdminHeader() {
  return (
    <nav
      className="sticky z-40 top-0 w-full flex flex-1 items-center justify-between p-2 border-b-2
     bg-gray-300 bg-opacity-50 backdrop-blur-sm
    "
    >
      <SidebarTrigger />
      <div className="flex flex-1 justify-end items-center gap-2 px-6">
        {/* <UserAvatar /> */}
        {/* <SignOut /> */}
        <form action={handleSignOut}>
          <Button variant="link" type="submit" className="text-destructive">
            Sign Out
          </Button>
        </form>
      </div>
    </nav>
  );
}

export default AdminHeader;
