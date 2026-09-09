import { clerkMiddleware } from "@clerk/nextjs/server";

const clerkEnabled = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY,
);

export default clerkEnabled
  ? clerkMiddleware(async (auth, request) => {
      if (request.nextUrl.pathname.startsWith("/app")) {
        await auth.protect();
      }
    })
  : function proxy() {};

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
