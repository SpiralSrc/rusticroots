import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

export default function page() {
  return (
    <div className="w-[90%] m-auto flex flex-col justify-center items-center pb-20 backdrop-blur-sm rounded-xl border border-orange-400/30">
      <h1 className="text-center text-5xl xl:text-6xl font-extrabold font-sacramento py-10">
        About Our Salon
      </h1>

      <div className="w-[85%] m-auto">
        <div>
          <h3 className="text-xl font-medium mb-4">Our mission</h3>
          <p>
            With years of experience, we are committed to serve <br /> your
            beauty needs and help bring out the best in you! <br />{" "}
          </p>
          <p>Your utter satisfaction is our ultimate reward!</p>
        </div>
      </div>
    </div>
  );
}
