import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen bg-gradient-theme2">
      <section className="max-w-7xl m-auto">{children}</section>
    </div>
  );
}
