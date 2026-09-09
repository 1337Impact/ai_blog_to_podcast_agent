"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { Button } from "@/components/ui/button";

export function LandingPrimaryCta({
  signedOutLabel = "Continue with Google",
}: {
  signedOutLabel?: string;
}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div
        className="h-12 w-52 rounded-full bg-muted"
        aria-hidden="true"
      />
    );
  }

  if (session?.user) {
    return (
      <Button asChild size="lg" className="h-12 rounded-full px-6 text-base shadow-none">
        <Link href="/app">Open studio</Link>
      </Button>
    );
  }

  return <GoogleSignInButton label={signedOutLabel} />;
}
