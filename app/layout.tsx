import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sylvia Llorente | Portfolio",
  description: "Portfolio personal de desarrollo web",
  keywords: "Desarrollo web, React.js, PHP, Portfolio personal",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  
  openGraph: {
    title: "Sylvia Llorente | Portfolio",
    description: "Portfolio personal de desarrollo web",
    url: "https://sllorentedev.vercel.app/",
    siteName: "Sylvia Llorente Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741702164/portfolio/portfolioSN_fpf4db.jpg", // Imagen para compartir en redes
        width: 1200,
        height: 630,
        alt: "Preview de Sylvia Llorente Portfolio",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
