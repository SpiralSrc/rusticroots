import SalonSlider from "@/components/our-salon/SalonSlider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

export default function page() {
  return (
    <div className="w-[90%] m-auto flex flex-col justify-center items-center pb-20 backdrop-blur-sm rounded-xl border border-orange-400/30">
      <h1 className="w-[70%] text-center text-5xl xl:text-6xl font-extrabold font-sacramento pt-10 pb-4 mb-10 ">
        About
      </h1>

      <div className="w-[85%] m-auto pb-10 mb-20 border-b border-orange-400/30">
        <h3 className="text-xl font-medium mb-4">Our Mission</h3>
        <div className="w-[90%] mx-auto flex flex-col gap-4">
          <p className="indent-10">
            We are committed to give the quality service you deserve. With years
            of experience, <br /> we are happy to help achieve your beauty needs
            and bring out the best in you!
          </p>
          <p>Your utter satisfaction is our ultimate reward!</p>
        </div>
      </div>

      <div className="w-5/6 m-auto flex flex-col justify-center">
        <h3 className="text-5xl font-sacramento font-bold text-center mb-10">
          Our Salon
        </h3>
        <div className="w-3/4 flex m-auto">
          <p className="mb-10 indent-10">
            Discover the ultimate fusion of fashion and beauty at our salon,
            linked to Maeson Jean and Co Boutique. Explore a diverse range of
            clothing, accessories, and beauty services to elevate your style and
            indulge in self-care.
          </p>
        </div>

        <SalonSlider />
      </div>
    </div>
  );
}
