"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { faqs } from "./content";

export function LandingFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative z-10 scroll-mt-28 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="reveal mb-10 text-center">
          <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
            Questions
          </p>
          <h2
            id="faq-heading"
            className="font-heading mt-4 text-4xl font-light tracking-tight sm:text-5xl"
          >
            Before you paste the first URL.
          </h2>
        </div>
        <div className="reveal divide-y divide-border/80 border-y border-border/80">
          {faqs.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div>
      <h3 className="font-heading text-xl font-normal tracking-tight">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-6 py-5 text-left"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
        >
          <span>{question}</span>
          <span
            aria-hidden="true"
            className="text-lg text-muted-foreground"
          >
            {open ? "–" : "+"}
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-base leading-7 text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
