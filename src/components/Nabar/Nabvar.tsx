import Link from "next/link";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

const Nabvar = async() => {

  const user = await currentUser()

  //if the user is authenticated sync them to our DB
  if(user) await syncUser() //POST request

  
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              Socially
            </Link>
          </div>
         

          <DesktopNavbar />
        
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Nabvar;
