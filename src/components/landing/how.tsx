import { steps } from "./content";

export function LandingHow() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="relative z-10 scroll-mt-28 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
            Three quiet steps
          </p>
          <h2
            id="how-heading"
            className="font-heading mt-4 text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            From a link to a voice you can keep.
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="reveal rounded-3xl border border-border/70 bg-card/70 p-7 shadow-none backdrop-blur-sm"
            >
              <p className="font-heading text-sm tracking-[0.2em] text-primary/80">
                {step.number}
              </p>
              <h3 className="font-heading mt-4 text-2xl font-normal tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
