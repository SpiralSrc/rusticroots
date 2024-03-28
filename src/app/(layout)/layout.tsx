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
    <section>
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-theme -z-50">
        <Image
          src={imgPng}
          alt="image"
          className="object-fill fixed bottom-0 left-0 w-[45%] h-[95%] opacity-10"
        />
      </div>

      <div className="w-screen h-screen">{children}</div>
    </section>
  );
}
