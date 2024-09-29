import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google'

import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// load font from google fonts
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Blogger",
  description: "Personal blog created with Next.js, Headless-UI and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} antialiased h-full bg-white text-black dark:bg-gray-950 dark:text-white"`}
      >
        <AuthProvider>
          <Navbar />
          <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
