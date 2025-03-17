// src/app/layout.tsx
import React from "react";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Creators List",
  description:
    "Discover and connect with amazing creators from around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar transparent={true} />
        <main className="flex-1 pt-24">{children}</main>
      </body>
    </html>
  );
}
