import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Billy Bets",
  description: "Your favorite betting assistant.",
  keywords: "betting, assistant, sports betting, Billy Bets, betting app",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#317EFB",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="Your favorite betting assistant." />

        <meta
          name="keywords"
          content="betting, assistant, sports betting, Billy Bets, betting app"
        />

        <meta name="robots" content="index, follow" />

        <meta name="theme-color" content="#317EFB" />

        <link rel="icon" href="/favicon.ico" />

        <meta property="og:image" content="/preview.png" />
        <meta property="og:title" content="Billy Bets" />
        <meta
          property="og:description"
          content="Your favorite betting assistant."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://askbilly.bet" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
