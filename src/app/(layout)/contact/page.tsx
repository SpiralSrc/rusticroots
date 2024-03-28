import Location from "@/components/home/Location";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

export default function page() {
  return (
    <div className="w-screen pt-24">
      <div className="max-w-7xl mx-2 flex flex-col justify-center items-center pb-20 backdrop-blur-sm rounded-xl border border-orange-400/30 xs:mx-auto">
        <h1 className="text-center text-5xl font-extrabold font-sacramento py-10">
          Contact Us
        </h1>

        <div className="w-[95%] m-auto">
          <Location />
        </div>
      </div>
    </div>
  );
}
