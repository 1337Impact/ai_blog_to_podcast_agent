import { cn } from "@/lib/utils";

export function FernFrond({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 420"
      fill="none"
      aria-hidden="true"
      className={cn("text-primary/70", className)}
    >
      <path
        d="M110 412 C108 300 112 210 110 18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M110 70 C86 66 58 78 42 96 M110 108 C82 102 52 118 34 140 M110 148 C78 144 48 166 32 188 M110 190 C80 188 54 210 40 232 M110 232 C86 230 64 248 52 268 M110 274 C90 272 74 286 66 302 M110 314 C96 312 86 322 80 334"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M110 70 C134 66 162 78 178 96 M110 108 C138 102 168 118 186 140 M110 148 C142 144 172 166 188 188 M110 190 C140 188 166 210 180 232 M110 232 C134 230 156 248 168 268 M110 274 C130 272 146 286 154 302 M110 314 C124 312 134 322 140 334"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M42 96 C48 84 62 76 74 78 M34 140 C42 124 60 114 76 118 M32 188 C42 170 62 162 80 166 M40 232 C50 216 68 208 86 214 M52 268 C60 256 74 250 88 254 M66 302 C72 294 82 290 92 294"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M178 96 C172 84 158 76 146 78 M186 140 C178 124 160 114 144 118 M188 188 C178 170 158 162 140 166 M180 232 C170 216 152 208 134 214 M168 268 C160 256 146 250 132 254 M154 302 C148 294 138 290 128 294"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function OliveBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 120"
      fill="none"
      aria-hidden="true"
      className={cn("text-primary/60", className)}
    >
      <path
        d="M12 78 C80 86 150 40 220 48 C268 54 310 78 348 62"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M70 80 C62 62 48 52 36 54 M118 70 C112 50 96 40 82 44 M166 54 C162 36 148 28 134 32 M214 50 C210 32 196 24 182 28 M262 58 C258 40 244 34 230 38 M310 70 C304 52 290 46 276 50"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <ellipse
        cx="34"
        cy="50"
        rx="11"
        ry="16"
        transform="rotate(-28 34 50)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="80"
        cy="40"
        rx="12"
        ry="17"
        transform="rotate(-18 80 40)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="132"
        cy="28"
        rx="12"
        ry="16"
        transform="rotate(-12 132 28)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="180"
        cy="24"
        rx="11"
        ry="15"
        transform="rotate(-8 180 24)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="228"
        cy="34"
        rx="11"
        ry="15"
        transform="rotate(8 228 34)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="274"
        cy="46"
        rx="11"
        ry="15"
        transform="rotate(16 274 46)"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function Wildflower({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 140"
      fill="none"
      aria-hidden="true"
      className={cn("text-accent-foreground/50", className)}
    >
      <path
        d="M40 132 C38 90 44 70 40 18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M40 78 C24 70 16 58 18 48 M40 92 C56 86 66 74 64 62"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="40" cy="22" r="4.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M40 22 C32 8 22 10 22 20 C22 28 32 30 40 22 C48 8 58 10 58 20 C58 28 48 30 40 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M40 22 C28 18 24 28 34 32 C38 28 40 24 40 22 C52 18 56 28 46 32 C42 28 40 24 40 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
