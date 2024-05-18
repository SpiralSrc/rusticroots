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
    <footer className="w-screen bg-transparent">
      <div className="max-w-6xl m-auto pt-16 pb-16 lg:pb-0">
        <div className="w-full flex flex-col sm:flex-row justify-center gap-5 sm:justify-around items-center border-b border-orange-400/40 pb-5">
          <div className="w-28 h-20 relative">
            <Image
              src={rrslogo}
              fill
              alt="logo"
              className="object-cover opacity-60"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-left">
            {navData.map((nav, id) => (
              <Link
                key={id}
                href={nav.link}
                className={`${
                  nav.link === path
                    ? "text-orange-300/30 font-bold"
                    : "font-md hover:text-orange-300/30 transition-all duration-500 ease-in-out"
                }`}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-6 mt-3 sm:mt-0">
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="font-medium text-md">Follow us</h3>
              <a
                href="https://www.facebook.com/groups/750893062229940"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookCircleLine size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 pt-5">
          <p className="text-sm text-orange-50/30">
            Rustic Roots Salon &copy;<span>{year}. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
