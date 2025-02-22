"use client"

import "./globals.css";
import Header from "@/components/home-page/navbar";
import SocialNavbar from "@/components/home-page/social-navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SocialNavbar />
        {children}
        </body>
    </html>
  )
}
