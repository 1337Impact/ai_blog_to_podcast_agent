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

export function SiteHeader({
  compact = false,
  sticky = false,
  links,
}: {
  compact?: boolean;
  sticky?: boolean;
  links?: readonly { href: string; label: string }[];
}) {
  const { data: session, status } = useSession();
  const user = session?.user;
  const initials =
    user?.name?.[0] ?? user?.email?.[0] ?? "F";

  return (
    <header
      className={
        sticky
          ? "sticky top-0 z-30 border-b border-border/40 bg-background/70 backdrop-blur-md"
          : "relative z-10"
      }
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Brand />
        {links && links.length > 0 ? (
          <nav
            aria-label="Page"
            className="hidden items-center gap-6 text-sm text-muted-foreground md:flex"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
        <nav className="flex items-center gap-3" aria-label="Account">
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
      </div>
    </header>
  );
}
