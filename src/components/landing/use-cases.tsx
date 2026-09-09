"use client";

import { motion } from "motion/react";

import { useCases } from "./content";

export function LandingUseCases() {
  return (
    <section
      aria-labelledby="uses-heading"
      className="relative z-10 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
            Who it is for
          </p>
          <h2
            id="uses-heading"
            className="font-heading mt-4 text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            The same habit, different hours of the day.
          </h2>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {useCases.map((item) => (
            <li key={item.title}>
              <motion.article
                className="reveal h-full rounded-3xl bg-secondary/50 px-7 py-8"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-heading text-2xl font-normal tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {item.body}
                </p>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
