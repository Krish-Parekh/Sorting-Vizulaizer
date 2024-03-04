import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SortingAlgorithmProvider } from "@/context/Vizualizer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sorting Vizualizer",
  description: "A sorting algorithm vizualizer built with React and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <SortingAlgorithmProvider>{children}</SortingAlgorithmProvider>
      </body>
    </html>
  );
}
