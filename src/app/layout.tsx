import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Hoover Handyman | Handyman in Birmingham, AL",
  description:
    "The Hoover Handyman — rated 5.0 stars from 4 reviews. General handyman services in Birmingham, AL: drywall & painting, minor plumbing & electrical, carpentry, flooring, doors & windows, furniture assembly and home repairs. Call (205) 690-1224 for a free quote.",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "The Hoover Handyman | Handyman in Birmingham, AL",
    description:
      "Rated 5.0 stars from 4 reviews. Reliable handyman services in Birmingham, AL. Call (205) 690-1224 for a free quote.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
