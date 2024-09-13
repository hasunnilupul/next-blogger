import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google'

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// load font from google fonts
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Tags', href: '/tags' },
  { name: 'Projects', href: '#' },
  { name: 'About', href: '#' },
]

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
        <Navbar navLinks={navigation} />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
