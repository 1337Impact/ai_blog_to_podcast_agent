import { cn } from "@/lib/utils";

export function SoftBlob({
  className,
  variant = "sage",
}: {
  className?: string;
  variant?: "sage" | "blush" | "sand" | "mist";
}) {
  const fills = {
    sage: "fill-primary/15",
    blush: "fill-[oklch(0.88_0.04_20)]",
    sand: "fill-[oklch(0.93_0.03_85)]",
    mist: "fill-[oklch(0.9_0.025_200)]",
  };

  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={cn(fills[variant], className)}
    >
      <path d="M312 86c46 38 78 108 62 168-16 62-86 104-150 118-66 14-136-8-168-62-32-56-18-136 24-184 42-48 118-68 176-52 20 6 38 8 56 12Z" />
    </svg>
  );
}

export function FluidShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 420"
      aria-hidden="true"
      className={cn("fill-secondary/70", className)}
    >
      <path d="M86 210c12-92 86-168 186-176 92-8 176 52 228 124 54 74 72 168 24 228-48 58-150 68-236 54-88-14-176-52-214-122-28-52-12-78 12-108Z" />
    </svg>
  );
}
