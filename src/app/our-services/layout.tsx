import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import imgPng from "../../../public/assets/B99F15D5-3C00-4D1C-98A2-2275EF6CE171.png";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen bg-gradient-theme2 relative">
      <div className="fixed top-0 left-0 -z-10 w-[40%] h-full">
        <Image src={imgPng} alt="image" fill className="opacity-40" />
      </div>

      <section className="max-w-7xl m-auto">{children}</section>
    </div>
  );
}
