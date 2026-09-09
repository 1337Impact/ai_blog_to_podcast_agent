import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";

import { Providers } from "@/components/providers";

import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: {
    default: "Fern — Blog to podcast",
    template: "%s · Fern",
  },
  description:
    "Paste a public blog, essay, or document URL. Fern reads the page, writes a calm spoken summary, and keeps the episode in your archive.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
