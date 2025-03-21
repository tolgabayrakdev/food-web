import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://lezzetdunyasi.com'),
  title: {
    default: "Lezzet Dünyası - Türk Mutfağı",
    template: "%s | Lezzet Dünyası"
  },
  description: "En lezzetli yemek tarifleri ve geleneksel Türk mutfağının en seçkin tatları",
  keywords: ["türk mutfağı", "yemek tarifleri", "ev yemekleri", "lezzetli tarifler"],
  authors: [{ name: "Lezzet Dünyası Ekibi" }],
  creator: "Lezzet Dünyası",
  publisher: "Lezzet Dünyası",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://lezzetdunyasi.com",
    siteName: "Lezzet Dünyası",
    title: "Lezzet Dünyası - Türk Mutfağı",
    description: "En lezzetli yemek tarifleri ve geleneksel Türk mutfağının en seçkin tatları",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lezzet Dünyası",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lezzet Dünyası - Türk Mutfağı",
    description: "En lezzetli yemek tarifleri ve geleneksel Türk mutfağının en seçkin tatları",
    images: ["/images/og-image.jpg"],
    creator: "@lezzetdunyasi"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://lezzetdunyasi.com",
    languages: {
      'tr-TR': "https://lezzetdunyasi.com",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ef4444" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
