"use client";

import Link from "next/link";
import { SignOutButton, useUser } from "@clerk/nextjs";

import { FernFrond } from "@/components/botanical";
import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2 text-foreground">
      <FernFrond className="h-8 w-4" />
      <span className="font-heading text-xl tracking-tight">Fern</span>
    </Link>
  );
}

function ClerkHeader({ compact }: { compact: boolean }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const initials =
    user?.firstName?.[0] ?? user?.emailAddresses[0]?.emailAddress[0] ?? "F";

  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
      <Brand />
      <nav className="flex items-center gap-3">
        {!isLoaded ? (
          <div className="h-9 w-24 rounded-full bg-muted" />
        ) : isSignedIn ? (
          <>
            <Button asChild variant="ghost" className="rounded-full">
              <Link href="/app">Studio</Link>
            </Button>
            <SignOutButton>
              <Button variant="outline" className="rounded-full">
                Sign out
              </Button>
            </SignOutButton>
            <Avatar className="h-9 w-9">
              <AvatarImage src={user?.imageUrl} alt={user?.fullName ?? "You"} />
              <AvatarFallback>{initials.toUpperCase()}</AvatarFallback>
            </Avatar>
          </>
        ) : compact ? (
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        ) : (
          <GoogleSignInButton label="Sign in with Google" />
        )}
      </nav>
    </header>
  );
}

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Brand />
        <Button asChild variant="ghost" className="rounded-full">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </header>
    );
  }

  return <ClerkHeader compact={compact} />;
}
