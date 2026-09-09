import { SoftBlob } from "@/components/blobs";

export default function Loading() {
  return (
    <div className="relative min-h-full overflow-hidden">
      <SoftBlob className="pointer-events-none absolute -top-24 right-0 h-80 w-80" />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <div className="h-10 w-48 rounded-full bg-muted" />
        <div className="mt-8 h-64 rounded-[2rem] bg-card/80" />
      </main>
    </div>
  );
}
