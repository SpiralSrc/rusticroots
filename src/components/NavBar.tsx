"use client";
import Image from "next/image";
import logo from "../../public/assets/icon.png";
import { navData } from "@/lib/data";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (): void => {
    if (navRef.current) {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    }
    if (logoRef.current) {
      window.scrollY > 40 * 16
        ? (logoRef.current.style.opacity = "1")
        : (logoRef.current.style.opacity = "0");
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
        <div
          ref={logoRef}
          style={{
            opacity: 0,
            transition: "opacity 0.3s",
            display: "flex",
            flexDirection: "row",
            placeItems: "center",
          }}
        >
          <Image src={logo} alt="logo" className="w-10 h-9" />
          <span className="font-sacramento font-bold text-2xl ml-2">
            Rustic Roots Salon
          </span>
        </div>
        <ul className="flex flex-row gap-10 items-center">
          {navData.map((nav) => (
            <Link key={nav.name} href={nav.link}>
              {nav.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
