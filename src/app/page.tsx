import About from "@/components/home/About";
import Closing from "@/components/home/Closing";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Location from "@/components/home/Location";
import OurServices from "@/components/home/OurServices";
import outsideImg from "../../public/assets/outside.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <About />
      <OurServices />
      <Closing />
      <div className="w-screen bg-gradient-theme3 overflow-hidden pb-20">
        <div className="w-full h-64 xs:h-80 sm:h-[400px] lg:h-[70vh] lg:bg-outside-img bg-cover bg-fixed bg-left-top lg:bg-left-top xl:bg-center pb-20">
          <div className="hidden lg:h-[500px] xl:h-[700px] "></div>
          <div className="relative w-full h-64 xs:h-80 sm:h-[400px] rounded-b-[25%] shadow-lg overflow-hidden lg:hidden">
            <Image
              src={outsideImg}
              alt="image"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
