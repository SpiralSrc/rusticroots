import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import imgPng from "../../../public/assets/B99F15D5-3C00-4D1C-98A2-2275EF6CE171.png";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function aboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-screen h-screen">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-theme -z-50">
        <div className="fixed  top-0 left-0 -z-10 w-[50%] overflow-visible h-full opacity-15">
          <Image src={imgPng} alt="image" fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-7xl h-screen m-auto ">{children}</div>
    </section>
  );
}
