"use client";

import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export function Providers({ children }: { children: React.ReactNode }) {
  if (!publishableKey) {
    return (
      <>
        {children}
        <Toaster />
      </>
    );
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      signInFallbackRedirectUrl="/app"
      signUpFallbackRedirectUrl="/app"
      signInForceRedirectUrl="/app"
      signUpForceRedirectUrl="/app"
    >
      {children}
      <Toaster />
    </ClerkProvider>
  );
}
