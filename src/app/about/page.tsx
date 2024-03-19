import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

export default function page() {
  return (
    <div className="w-screen h-screen bg-gradient-theme2">
      <h1>About Us</h1>
    </div>
  );
}
