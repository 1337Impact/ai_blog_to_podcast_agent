import { sampleEpisode } from "./content";

export function LandingStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="story-section relative z-10 px-6 sm:px-10"
    >
      <div className="story-pin mx-auto flex min-h-[min(100svh,52rem)] max-w-6xl flex-col justify-center py-16 md:py-24">
        <div className="reveal mb-10 max-w-2xl md:mb-14">
          <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
            The same piece, two forms
          </p>
          <h2
            id="story-heading"
            className="font-heading mt-4 text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            A document becomes something you can hear.
          </h2>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <article className="story-page rounded-3xl border border-border/70 bg-card/80 p-6 shadow-none sm:p-8">
            <p className="story-label-read text-xs tracking-[0.22em] text-muted-foreground uppercase">
              Reading
            </p>
            <h3 className="font-heading mt-3 text-2xl font-normal tracking-tight">
              {sampleEpisode.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {sampleEpisode.source.replace("https://", "")}
            </p>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-7 text-foreground/85">
              <p>
                Leave the house with no errand and the walk still counts. The
                writer is not arguing for a routine. They are asking what
                attention does when it is not being spent.
              </p>
              <p className="text-muted-foreground">
                Thoughts that would not survive a list are allowed to arrive.
                The return to the desk, they say, is often gentler than the
                leaving.
              </p>
            </div>
          </article>

          <div
            aria-hidden="true"
            className="hidden items-center justify-center text-primary/50 lg:flex"
          >
            <span className="font-heading text-3xl font-light">→</span>
          </div>

          <article className="story-player rounded-3xl border border-border/70 bg-card/80 p-6 shadow-none sm:p-8">
            <p className="story-label-listen text-xs tracking-[0.22em] text-primary/80 uppercase">
              Listening
            </p>
            <h3 className="font-heading mt-3 text-2xl font-normal tracking-tight">
              {sampleEpisode.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Spoken summary</p>
            <p className="mt-6 text-[0.95rem] leading-7 text-muted-foreground">
              {sampleEpisode.script}
            </p>
            <div
              className="mt-8 flex h-16 items-end gap-1"
              aria-hidden="true"
            >
              {WAVE.map((height, index) => (
                <span
                  key={index}
                  className="story-bar w-1.5 origin-bottom rounded-full bg-primary/45"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const WAVE = [28, 46, 38, 72, 54, 88, 42, 64, 50, 78, 36, 68, 58, 90, 44, 70];
