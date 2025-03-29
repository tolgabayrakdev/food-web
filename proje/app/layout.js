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
  metadataBase: new URL('https://lezzethazinesi.com'),
  title: {
    default: "Lezzet Hazinesi - Türk Mutfağı",
    template: "%s | Lezzet Hazinesi"
  },
  description: "En lezzetli yemek tarifleri ve geleneksel Türk mutfağının en seçkin tatları",
  keywords: ["türk mutfağı", "yemek tarifleri", "ev yemekleri", "lezzetli tarifler"],
  authors: [{ name: "Lezzet Hazinesi Ekibi" }],
  creator: "Lezzet Hazinesi",
  publisher: "Lezzet Hazinesi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://lezzethazinesi.com",
    siteName: "Lezzet Hazinesi",
    title: "Lezzet Hazinesi - Türk Mutfağı",
    description: "En lezzetli yemek tarifleri ve geleneksel Türk mutfağının en seçkin tatları",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lezzet Hazinesi",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lezzet Hazinesi - Türk Mutfağı",
    description: "En lezzetli yemek tarifleri ve geleneksel Türk mutfağının en seçkin tatları",
    images: ["/images/og-image.jpg"],
    creator: "@lezzethazinesi"
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
    canonical: "https://lezzethazinesi.com",
    languages: {
      'tr-TR': "https://lezzethazinesi.com",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2712035708314627"
          crossOrigin="anonymous"></script>
        <meta name="google-site-verification" content="kbt80KgkmIzh44uYChZCRbejqXVJgCSUCwKKS0hnKKc" />
        <meta name="theme-color" content="" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
