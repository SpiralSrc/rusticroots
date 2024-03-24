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
      <div className="max-w-6xl m-auto pt-28 pb-10">
        <div className="w-full flex flex-row justify-around items-start">
          <Image
            src={rrslogo}
            width={250}
            height={150}
            alt="logo"
            className="opacity-60"
          />
          <div className="flex flex-row self-center items-center gap-3 text-left">
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
              <h3 className="font-medium text-md">Connect with us</h3>
              <RiFacebookCircleLine size={25} />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="font-medium text-md">Copyrights</h3>
              <p className="text-sm">
                Rustic Root Salon &copy;<span>{year}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
