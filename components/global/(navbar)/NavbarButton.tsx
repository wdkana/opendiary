"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const NavbarButton = (): React.ReactElement => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return <p>please wait...</p>;

  return isSignedIn ? (
    <div className="flex items-center gap-4">
      <Link href="/dashboard">Create Diary</Link>
      <Link href="/dashboard/my-diary">My Diary</Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  ) : (
    <Link href="/sign-in">Sign In</Link>
  );
};

export default NavbarButton;
