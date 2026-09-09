"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

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

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  const { data: session, status } = useSession();
  const user = session?.user;
  const initials =
    user?.name?.[0] ?? user?.email?.[0] ?? "F";

  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
      <Brand />
      <nav className="flex items-center gap-3">
        {status === "loading" ? (
          <div className="h-9 w-24 rounded-full bg-muted" />
        ) : user ? (
          <>
            <Button asChild variant="ghost" className="rounded-full">
              <Link href="/app">Studio</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarImage src={user.image ?? undefined} alt={user.name ?? "You"} />
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
