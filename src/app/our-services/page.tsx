import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function page() {
  return (
    <div className="w-screen h-screen bg-gradient-theme2">
      <h1>Services</h1>
    </div>
  );
}
