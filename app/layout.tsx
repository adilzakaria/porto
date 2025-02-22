"use client"

import "./globals.css";
import Header from "@/components/home-page/navbar";
import SocialNavbar from "@/components/home-page/social-navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adil Zakar's Portfolio",
  description: "My site description", 
}

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
