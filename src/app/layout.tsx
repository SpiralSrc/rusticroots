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

const baseURL = process.env.RRS_URL;

export const metadata: Metadata = {
  metadataBase: new URL(`${baseURL}`),
  title: {
    default: "Rustic Roots Salon",
    template: "%s | Rustic Roots Salon",
  },
  description: "Your friendly salon in town.",
  openGraph: {
    title: "Rustic Roots Salon",
    description: "Your friendly salon in town.",
    url: baseURL,
    siteName: "Rustic Roots Salon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sacramento.variable}`}>
        <div className="w-screen h-screen">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
