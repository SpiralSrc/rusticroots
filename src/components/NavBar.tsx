"use client";
import Image from "next/image";
import logo from "../../public/assets/icon.png";
import { navData } from "@/lib/data";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoScrolled, setLogoScrolled] = useState(false);

  const path = usePathname();
  const home = "/";

  const handleScroll = (): void => {
    if (navRef.current) {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    }

    if (logoRef.current) {
      if (path === home) {
        window.scrollY > 40 * 16
          ? setLogoScrolled(true)
          : setLogoScrolled(false);
      } else {
        logoRef.current.style.opacity = "1";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className={`nav ${isScrolled ? "scrolled z-50" : ""}`}>
      <div className="max-w-7xl h-full flex justify-between m-auto items-center">
        {path === home ? (
          <Link
            href={"/"}
            ref={logoRef}
            className={`logo ${logoScrolled ? "scrolledY" : ""}`}
          >
            <Image src={logo} alt="logo" className="w-10 h-9" />
            <span className="font-sacramento font-bold text-2xl ml-2">
              Rustic Roots Salon
            </span>
          </Link>
        ) : (
          <Link href={"/"} ref={logoRef} className={`logo scrolledY`}>
            <Image src={logo} alt="logo" className="w-10 h-9" />
            <span className="font-sacramento font-bold text-2xl ml-2">
              Rustic Roots Salon
            </span>
          </Link>
        )}
        <ul className="flex flex-row gap-10 items-center">
          {navData.map((nav) => (
            <Link
              key={nav.name}
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
        </ul>
      </div>
    </nav>
  );
}
