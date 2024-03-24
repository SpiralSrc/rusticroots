import { servicesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <section className="w-screen py-32 bg-gradient-theme2 relative">
      <div className="max-w-7xl m-auto p-10 lg:p-0 ">
        <h2 className="text-7xl font-sacramento font-extrabold text-center mb-28">
          Our Services
        </h2>

        <div className="flex flex-wrap gap-14 px-10 lg:px-0 rounded-top justify-center">
          {servicesData.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-t-[25%] overflow-hidden bg-orange-950/20 backdrop-blur-md border-4 border-orange-400/40"
            >
              <div className="relative w-80 h-[450px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  className="object-cover"
                  fill
                />
              </div>

              <div className="py-5 text-center">
                <h3 className="text-xl font-bold">{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="w-full flex justify-center mt-10">
          <Link
            href={"/our-services"}
            className="py-4 px-4 bg-orange-950/40 rounded-3xl text-lg my-10"
          >
            Click here for more info...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
