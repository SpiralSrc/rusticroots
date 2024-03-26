"use client";

import Image from "next/image";
import rrslogo from "../../../public/assets/rrslogo.png";
import { navData } from "@/lib/data";
import { RiFacebookCircleLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const year = new Date().getFullYear();
  const path = usePathname();

  return (
    <footer className="w-screen bg-gradient-theme3">
      <div className="max-w-6xl m-auto p-16">
        <div className="w-full flex flex-row flex-wrap justify-around items-center border-b border-orange-400/40 pb-10">
          <Image
            src={rrslogo}
            width={150}
            height={100}
            alt="logo"
            className="opacity-60"
          />
          <div className="flex flex-row items-center gap-3 text-left">
            {navData.map((nav, id) => (
              <Link
                key={id}
                href={nav.link}
                className={`${
                  nav.link === path
                    ? "text-orange-950/60 font-md"
                    : "font-md hover:text-orange-950/40 transition-all duration-500 ease-in-out"
                }`}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="font-medium text-md">Follow us</h3>
              <RiFacebookCircleLine size={25} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 pt-5">
          <p className="text-sm text-orange-50/30">
            Rustic Root Salon &copy;<span>{year}. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
