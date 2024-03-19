import Image from "next/image";
import logo from "../../public/assets/icon.png";
import { navData } from "@/lib/data";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-screen h-16 fixed top-0 left-0 z-50 backdrop-blur-lg bg-none">
      <div className="max-w-7xl h-full flex justify-between m-auto items-center">
        <div className="w-10 h-9 relative opacity-0">
          <Image src={logo} fill alt="logo" />
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
