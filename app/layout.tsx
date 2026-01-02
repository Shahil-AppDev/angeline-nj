import MysticParticles from "@/components/background/MysticParticles";
import MysticUniverseRain from "@/components/background/MysticUniverseRain";
import type { Metadata } from "next";
import { Cinzel_Decorative, Manrope } from "next/font/google";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Angeline NJ | Cartomancie, Voyance & Reiki à Distance",
    template: "%s | Angeline NJ",
  },
  description:
    "Retrouvez clarté et sérénité avec Angeline NJ. Consultations de cartomancie, voyance bienveillante et soins Reiki à distance pour un accompagnement spirituel authentique.",
  keywords: [
    "cartomancie en ligne",
    "tirage de cartes",
    "voyance bienveillante",
    "reiki à distance",
    "soin énergétique",
    "tarot de marseille",
    "oracle divination",
    "éveil spirituel",
    "Angeline NJ",
    "guidance spirituelle"
  ],
  authors: [{ name: "Angeline NJ" }],
  creator: "Angeline NJ",
  publisher: "Angeline NJ",
  metadataBase: new URL("https://angeline-nj.fr"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  themeColor: "#D6A84A",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://angeline-nj.fr",
    siteName: "Angeline NJ",
    title: "Angeline NJ - Cartomancie & Guidance Spirituelle",
    description:
      "Découvrez la cartomancie avec Angeline NJ. Tirages de cartes personnalisés, guidance spirituelle et accompagnement bienveillant.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angeline NJ - Cartomancie & Guidance Spirituelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angeline NJ - Cartomancie & Guidance Spirituelle",
    description:
      "Découvrez la cartomancie avec Angeline NJ. Tirages de cartes personnalisés et guidance spirituelle.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-google-search-console",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cinzelDecorative.variable} ${manrope.variable}`}>
      <body className="antialiased star-field grain-overlay" suppressHydrationWarning>
        <MysticUniverseRain />
        <MysticParticles />
        <div className="glow-blobs" />
        <div className="relative z-20">
          {children}
        </div>
      </body>
    </html>
  );
}
