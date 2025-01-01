import { currentUser } from "@clerk/nextjs/server";
import React from "react";


import Link from "next/link";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import ThemeToggle from "../ui/ThemeToggle";
import { Button } from "../ui/button";

const DesktopNavbar = async () => {
  const user = await currentUser();

  console.log("Hello", user);
  return (
    <div className="hidden md:flex items-center gap-2">
      {/* darkmode */}
      <ThemeToggle />

      <Button variant={"ghost"} className="flex items-center gap-2" asChild>
        <Link href={"/"}>
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      {user ? (
        <>
          <Button variant={"ghost"} className="flex items-center gap-2" asChild>
            <Link href={"/notifications"}>
              <BellIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>

          <Button variant={"ghost"} className="flex items-center gap-2" asChild>
            <Link
              href={`/pofile/${
                user.username ??
                user.emailAddresses[0].emailAddress.split("@")[0]
              }`}
            >
              <UserIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>

          {/* Profile icon */}
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <Button variant="default">Sign In</Button>
        </SignInButton>
      )}
    </div>
  );
};

export default DesktopNavbar;
