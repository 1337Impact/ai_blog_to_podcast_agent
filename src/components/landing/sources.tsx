"use client";

import { motion } from "motion/react";

import { sources } from "./content";

export function LandingSources() {
  return (
    <section
      id="sources"
      aria-labelledby="sources-heading"
      className="relative z-10 scroll-mt-28 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
            What you can send
          </p>
          <h2
            id="sources-heading"
            className="font-heading mt-4 text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            If it is public, you can ask Fern to listen.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground text-pretty">
            Fern scrapes a URL — the same way you would open it in a browser.
            Blogs and essays are the usual starting point. Public PDFs and
            documents work when they live on the open web.
          </p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {sources.map((source) => (
            <li key={source.title}>
              <motion.article
                className="reveal h-full rounded-3xl border border-border/70 bg-card/70 p-7"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <SourceMark title={source.title} />
                <h3 className="font-heading mt-5 text-2xl font-normal tracking-tight">
                  {source.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {source.body}
                </p>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SourceMark({ title }: { title: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      className="h-10 w-16 text-primary/70"
      fill="none"
      aria-hidden="true"
    >
      {title === "Blogs" ? (
        <>
          <path
            d="M10 28c10-4 16-16 26-16 8 0 12 8 18 10"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
          />
          <ellipse
            cx="22"
            cy="16"
            rx="7"
            ry="10"
            transform="rotate(-28 22 16)"
            stroke="currentColor"
            strokeWidth="1.05"
          />
        </>
      ) : null}
      {title === "Essays" ? (
        <>
          <path
            d="M14 12h30M14 20h24M14 28h18"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
          />
          <path
            d="M50 10c4 4 4 10 0 14"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </>
      ) : null}
      {title === "PDFs on the web" ? (
        <>
          <rect
            x="18"
            y="6"
            width="24"
            height="28"
            rx="6"
            stroke="currentColor"
            strokeWidth="1.15"
          />
          <path
            d="M24 16h12M24 22h9"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </>
      ) : null}
      {title === "Docs and notes" ? (
        <>
          <rect
            x="10"
            y="12"
            width="22"
            height="20"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <rect
            x="22"
            y="6"
            width="22"
            height="20"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <path
            d="M28 14h8M28 18h6"
            stroke="currentColor"
            strokeWidth="0.95"
            strokeLinecap="round"
          />
        </>
      ) : null}
    </svg>
  );
}
