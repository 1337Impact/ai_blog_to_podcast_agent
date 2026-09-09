import { features } from "./content";

export function LandingFeatures() {
  return (
    <section
      aria-labelledby="features-heading"
      className="relative z-10 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
            Less friction
          </p>
          <h2
            id="features-heading"
            className="font-heading mt-4 text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            Built around one honest loop.
          </h2>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="reveal border-b border-border/70 pb-6"
            >
              <h3 className="font-heading text-xl font-normal tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
