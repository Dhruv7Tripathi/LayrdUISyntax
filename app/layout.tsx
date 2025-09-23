import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/landingpage/footer";
import { Navbar } from "@/components/landingpage/navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LayrdUI - Syntax Template",
  description: "A modern, responsive, and customizable UI template built with Next.js and Tailwind CSS.",
  keywords: [
    "Next.js UI Template",
    "Tailwind CSS components",
    "Responsive design",
    "React UI kit",
    "Geist UI",
    "Modern web UI",
    "Syntax template",
    "UI framework"
  ],
  authors: [{ name: "Dhruv", url: "https://dhruvtripathi.in" }],
  creator: "Dhruv",
  metadataBase: new URL("https://layrdui.com"), // Change to your domain
  openGraph: {
    title: "LayrdUI - Modern UI Template",
    description: "Responsive, accessible UI components powered by Next.js and Tailwind.",
    url: "https://layrdui.com",
    siteName: "LayrdUI",
    images: [
      {
        url: "https://layrdui.com/og-image.png", // Add a real OG image
        width: 1200,
        height: 630,
        alt: "LayrdUI - Syntax Template",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LayrdUI - Syntax Template",
    description: "A modern, responsive, and customizable UI template built with Next.js and Tailwind CSS.",
    images: ["https://layrdui.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      ><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
