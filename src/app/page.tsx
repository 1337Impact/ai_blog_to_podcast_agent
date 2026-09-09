import type { Metadata } from "next";

import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Fern — Blog to podcast",
  description:
    "Paste a public blog, essay, or document URL. Fern reads the page, writes a calm spoken summary, and keeps the episode in your archive.",
};

export default function Home() {
  return <LandingPage />;
}
