import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Palak Sahu | AI Engineer",
  description:
    "AI Engineer specializing in machine learning, deep learning, and building intelligent systems. Explore my projects and research.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Palak Sahu" }],
  openGraph: {
    title: "Palak Sahu | AI Engineer",
    description:
      "AI Engineer specializing in machine learning, deep learning, and building intelligent systems.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-[var(--background)]`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
