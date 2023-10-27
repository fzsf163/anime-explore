import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// fonts
const noto_serif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime   Explore",
  description: "An unofficial site for anime exploring",
  authors: { name: "Md Fakhruzzaman Sarkar", url: "#" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_serif.className} bg-orange-500 text-stone-100`}>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
