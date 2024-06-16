import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import { gilory } from "@/fonts/gilory";
import StoreProvider from "@/lib/state/storeProvider";

export const metadata: Metadata = {
  title: "Stays",
  description:
    "Stays is a platform that allows you to find and book accommodations for your next trip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" className="bg-white text-gray-700">
        <body className={gilory.className + " flex h-[100dvh]"}>
          <Navbar />
          <div className="flex-1 pt-32 md:pt-20">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
