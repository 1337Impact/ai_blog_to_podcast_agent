"use client";

import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SsoCallbackPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6 text-center text-muted-foreground">
        Google sign-in is not configured yet.
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <AuthenticateWithRedirectCallback
        signInForceRedirectUrl="/app"
        signUpForceRedirectUrl="/app"
      />
    </div>
  );
}
