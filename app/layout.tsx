import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Filmkaar Production - Film Production House",
  description: "Professional film production house creating exceptional cinematic experiences",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-sans">{children}</body>
    </html>
  )
}
