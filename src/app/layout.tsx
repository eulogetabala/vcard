import type { Metadata, Viewport } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eulogetabala.cg"),
  title: "Euloge Tabala — Ingénieur logiciel Cloud & DevOps",
  description:
    "Ingénieur logiciel, Cloud & DevOps, Project Manager. Carte de contact — eulogetabala.cg",
  openGraph: {
    title: "Euloge Tabala | Cloud & DevOps · Project Manager",
    description:
      "Ingénieur logiciel — Cloud, DevOps et gestion de projet. eulogetabala.cg",
    locale: "fr_FR",
    images: [{ url: "/hello-1.png", width: 800, height: 800, alt: "Euloge Tabala" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05080f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${body.variable} ${display.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
