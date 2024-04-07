"use client";

import Image from "next/image";
import logo from "../../public/assets/icon.png";
import { navData } from "@/lib/data";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GrMenu, GrClose } from "react-icons/gr";

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoScrolled, setLogoScrolled] = useState(false);
  const [modal, setModal] = useState(false);

  const path = usePathname();
  const home = "/";

  useEffect(() => {
    const handleScroll = (): void => {
      if (navRef.current) {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
      }

      if (logoRef.current) {
        if (path === home) {
          window.scrollY > 40 * 14
            ? setLogoScrolled(true)
            : setLogoScrolled(false);
        }
      }
    };

    const handlePageReload = (): void => {
      if (path === home) {
        window.location.reload();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path, logoRef, navRef]);

  // Mobile Menu
  const handleMenu = () => {
    setModal(!modal);
  };

  return (
    <nav>
      <div
        ref={navRef}
        className={`nav z-[1] ${isScrolled ? "scrolled z-20" : ""}`}
      >
        <div className="max-w-7xl h-full flex justify-between m-auto items-center">
          <Link
            href={"/"}
            ref={logoRef}
            className={
              path === home
                ? `logo ${logoScrolled ? "scrolledY" : ""}`
                : "logo scrolledY"
            }
          >
            <Image src={logo} alt="logo" className="w-10 h-9" />
            <span className="font-sacramento font-bold text-2xl ml-2 pt-1 hidden md:block">
              Rustic Roots Salon
            </span>
          </Link>

          <ul className="hidden flex-row gap-10 items-center lg:flex">
            {navData.map((nav) => (
              <Link
                key={nav.name}
                href={nav.link}
                className={`${
                  nav.link === path
                    ? "text-orange-300/70 font-bold"
                    : "font-md hover:text-orange-300/70 transition-all duration-500 ease-in-out"
                }`}
              >
                {nav.name}
              </Link>
            ))}
          </ul>
          <div
            onClick={handleMenu}
            className="flex flex-col justify-center items-center lg:hidden transition-all duration-500 z-50"
          >
            {!modal ? <GrMenu size={27} /> : ""}
          </div>
        </div>
      </div>

      {modal ? (
        <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-black/40">
          <GrClose
            size={27}
            onClick={handleMenu}
            className="absolute top-5 right-5 z-50"
          />
          <div className="absolute top-0 left-0 w-2/3 sm:w-2/4 h-full bg-black/40">
            <ul className="w-full h-full bg-gradient-theme3 flex flex-col gap-10 justify-center items-center relative transition-all ease-in duration-500 transform translate-y-0 opacity-100">
              {navData.map((nav) => (
                <Link
                  key={nav.name}
                  href={nav.link}
                  onClick={handleMenu}
                  style={{ opacity: modal ? 1 : 0 }}
                  className={
                    `${
                      nav.link === path
                        ? "text-orange-950/60"
                        : "hover:text-orange-950/40"
                    }` &&
                    "hover:bg-orange-200/20 hover:text-orange-950/40 w-5/6 py-5 rounded-2xl font-md text-center transition-all duration-500 ease popup delay-${index + 1}500"
                  }
                >
                  {nav.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
