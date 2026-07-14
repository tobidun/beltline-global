import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Open_Sans,
  Poppins,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beltlineglobalservices.com"),
  title: {
    default: "Beltline Global Services Limited",
    template: "%s | Beltline Global Services Limited",
  },
  description:
    "Beltline Global Services Limited provides consulting, training, IT, logistics, trading, events, property development, and related support services across Nigeria.",
  icons: {
    icon: "/BELTLINE GLOBAL FAVICON NAVY BLUE SVG.svg",
    apple: "/BELTLINE GLOBAL FAVICON NAVY BLUE SVG.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beltline Global Services Limited",
    description:
      "Professional consulting, training, IT, logistics, trading, events, and property support across Nigeria.",
    url: "https://beltlineglobalservices.com",
    siteName: "Beltline Global Services Limited",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Beltline Global Services Limited brand preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beltline Global Services Limited",
    description:
      "Professional consulting, training, IT, logistics, trading, events, and property support across Nigeria.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${openSans.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
