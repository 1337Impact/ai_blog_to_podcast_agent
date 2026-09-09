import { SoftBlob } from "@/components/blobs";
import { OliveBranch } from "@/components/botanical";
import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { SiteHeader } from "@/components/site-header";

export default function SignInPage() {
  return (
    <div className="relative min-h-full overflow-hidden">
      <SoftBlob className="pointer-events-none absolute -top-20 left-8 h-80 w-80" />
      <SoftBlob
        variant="blush"
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96"
      />
      <SiteHeader compact />
      <main className="relative z-10 mx-auto flex max-w-md flex-col items-center px-6 py-20 text-center">
        <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
          Welcome
        </p>
        <h1 className="font-heading mt-4 text-4xl font-light tracking-tight">
          Sign in with Google
        </h1>
        <p className="mt-4 mb-10 text-muted-foreground">
          A single calm step into your studio. No extra accounts to tend.
        </p>
        <GoogleSignInButton />
        <OliveBranch className="mt-12 h-14 w-64" />
      </main>
    </div>
  );
}
