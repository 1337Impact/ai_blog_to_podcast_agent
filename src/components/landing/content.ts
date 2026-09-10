export const landingNav = [
  { href: "#how", label: "How" },
  { href: "#sources", label: "Sources" },
  { href: "#listen", label: "Listen" },
  { href: "#faq", label: "FAQ" },
] as const;

export const steps = [
  {
    number: "01",
    title: "Paste a public URL",
    body: "A blog post, essay, newsletter, or any page Fern can reach. No file upload, no extra settings.",
  },
  {
    number: "02",
    title: "Fern reads and writes a script",
    body: "The page is scraped, then turned into a short conversational episode — calm, spoken, without stage directions.",
  },
  {
    number: "03",
    title: "Listen and keep it",
    body: "Audio lands in your studio archive. Replay it later, or delete it when you are done.",
  },
] as const;

export const sources = [
  {
    title: "Blogs",
    body: "Public posts and long articles. Paste the permalink you would otherwise save for later.",
  },
  {
    title: "Essays",
    body: "Personal writing, criticism, and slow pieces that ask for more than a skim.",
  },
  {
    title: "PDFs on the web",
    body: "If a PDF or paper lives at a public URL, Fern can usually read that page the same way.",
  },
  {
    title: "Docs and notes",
    body: "Documentation, research notes, and other public documents you would rather hear than stare at.",
  },
] as const;

export const useCases = [
  {
    title: "Writers",
    body: "Hear a draft the way a reader might — on a walk, away from the blinking cursor.",
  },
  {
    title: "Researchers",
    body: "Turn a paper or blog explainer into something you can follow between meetings.",
  },
  {
    title: "Commuters",
    body: "Long reads become ride companions. The archive waits when you get home.",
  },
  {
    title: "Eyes-off listening",
    body: "A quieter path into a piece when looking at a screen is tiring or not possible.",
  },
] as const;

export const faqs = [
  {
    question: "What can I turn into an episode?",
    answer:
      "Any public URL Fern can scrape: blogs, essays, newsletters, documentation, and many publicly hosted documents, including PDFs on the open web. Private pages, logins, and local files are outside this flow.",
  },
  {
    question: "Do I need an account?",
    answer:
      "Yes. Sign in with Google. After that you land in the studio at /app, where you paste a URL and manage your archive.",
  },
  {
    question: "Does Fern read the whole article aloud?",
    answer:
      "It writes a concise spoken summary — conversational, without markdown or speaker labels — then voices that script. Long pages are condensed so the episode stays easy to follow.",
  },
  {
    question: "How long does an episode take?",
    answer:
      "Usually about a minute. The studio will say when it is listening to the page. Very long or slow sites can take longer.",
  },
  {
    question: "Where do the recordings live?",
    answer:
      "Each episode is stored in your archive and played with a simple audio player. You can delete an episode; Fern asks for confirmation, then removes the history row and the audio file.",
  },
  {
    question: "What if a page will not scrape?",
    answer:
      "The URL needs to be public and reachable. If the site blocks readers or returns an empty page, Fern cannot write a script. Try a different permalink or a version that loads as ordinary HTML.",
  },
] as const;

export const sampleEpisode = {
  title: "On walking without a destination",
  source: "https://example.com/essays/walking-without-a-destination",
  date: "Sep 4",
  summary:
    "The piece argues that a walk without an errand is still useful: it loosens attention, lets stray thoughts arrive, and returns you to the page a little kinder than you left it.",
} as const;
