"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Social() {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex justify-between gap-2">
      <Button
        onClick={() => onClick("google")}
        className="space-y-4 w-full"
        size={"lg"}
        variant={"outline"}
      >
        <FcGoogle />
      </Button>

      <Button
        onClick={() => onClick("github")}
        className="space-y-4 w-full"
        size={"lg"}
        variant={"outline"}
      >
        <FaGithub />
      </Button>
    </div>
  );
}
