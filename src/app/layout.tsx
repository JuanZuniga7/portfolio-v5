import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/semantic/Navbar";
import Footer from "@/components/semantic/Footer";
import Image from "next/image";
import svgHero from "../../public/svg/hero.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Zuniga",
  description: "A personal portfolio website for Juan Zuniga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:w-[75%] text-white overflow-x-hidden overflow-y-auto flex flex-col">
          <Image
            src={svgHero.src}
            alt="Hero"
            width={1572}
            priority
            height={795}
            className="absolute -top-[98px] -z-10"
          />
          <Navbar />
          <div className="pb-10 h-full">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
