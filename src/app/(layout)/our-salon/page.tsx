import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

export default function page() {
  return (
    <section className="w-full flex flex-col">
      <h1>About Us</h1>
    </section>
  );
}
