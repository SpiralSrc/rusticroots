import type { Metadata } from "next";
import { Inter, Sacramento } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const sacramento = Sacramento({
  weight: "400",
  variable: "--font-sacramento",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Rustic Roots Salon",
    template: "%s | Rustic Roots Salon",
  },
  description: "Your friendly salon in town.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sacramento.variable}`}>
        <div className="w-screen h-screen overflow-y-scroll">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
