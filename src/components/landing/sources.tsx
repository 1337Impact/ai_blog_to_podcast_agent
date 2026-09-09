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
        <path
          d="M8 30c8-2 14-10 22-10s12 8 26 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      ) : null}
      {title === "Essays" ? (
        <>
          <path
            d="M14 12h28M14 20h22M14 28h16"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </>
      ) : null}
      {title === "PDFs on the web" ? (
        <rect
          x="16"
          y="6"
          width="28"
          height="28"
          rx="8"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      ) : null}
      {title === "Docs and notes" ? (
        <>
          <rect
            x="12"
            y="10"
            width="24"
            height="22"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.15"
          />
          <rect
            x="22"
            y="6"
            width="24"
            height="22"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.15"
          />
        </>
      ) : null}
    </svg>
  );
}
