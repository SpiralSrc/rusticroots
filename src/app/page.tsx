import About from "@/components/home/About";
import Closing from "@/components/home/Closing";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Location from "@/components/home/Location";
import OurServices from "@/components/home/OurServices";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <About />
      <OurServices />
      <Closing />
      <div className="w-screen bg-gradient-theme3 overflow-hidden">
        <div className="w-full rounded-b[20%] bg-outside-img bg-cover bg-fixed bg-center pb-20">
          <div className="h-[600px] "></div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
