import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { FernFrond } from "@/components/botanical";
import { SoftBlob } from "@/components/blobs";
import { SiteHeader } from "@/components/site-header";
import { StudioApp } from "@/components/studio-app";
import { listPodcastsForUser } from "@/lib/podcast";
import { upsertUserFromClerk } from "@/lib/users";

export const dynamic = "force-dynamic";

export default async function AppPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  await upsertUserFromClerk(user);
  const history = await listPodcastsForUser(user.id);

  return (
    <div className="relative min-h-full overflow-hidden">
      <SoftBlob className="pointer-events-none absolute -top-32 -right-24 h-[26rem] w-[26rem]" />
      <SoftBlob
        variant="sand"
        className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80"
      />
      <FernFrond className="pointer-events-none absolute right-6 bottom-0 hidden h-72 w-24 opacity-70 lg:block" />
      <SiteHeader compact />
      <main className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-24 pt-4 sm:px-10">
        <p className="mb-2 text-sm text-muted-foreground">
          Welcome back{user.firstName ? `, ${user.firstName}` : ""}.
        </p>
        <StudioApp initialPodcasts={history} />
      </main>
    </div>
  );
}
