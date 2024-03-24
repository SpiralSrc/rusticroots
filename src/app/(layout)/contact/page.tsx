import Location from "@/components/home/Location";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

export default function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-20 backdrop-blur-sm rounded-xl border border-orange-400/30 ">
      <header className="w-full flex justify-center items-center">
        <h1 className="text-center text-5xl font-extrabold font-sacramento py-10">
          Contact Us
        </h1>
      </header>
      <div className="w-[95%] m-auto">
        <Location />
      </div>
    </div>
  );
}
