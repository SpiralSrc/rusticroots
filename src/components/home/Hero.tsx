import Image from "next/image";
import heroImage from "../../../public/assets/rrslogo.png";

export default function Hero() {
  return (
    <section className="w-screen h-screen sm:h-[90vh] bg-hero-img bg-no-repeat bg-cover bg-center">
      <div className=" max-w-7xl h-full flex justify-center items-end m-auto">
        <div className=" relative w-3/4 sm:w-4/5 h-1/2 sm:h-3/4 mb-20 sm:mb-10">
          <Image
            src={heroImage}
            fill
            alt="Logo image"
            className=" object-fill backdrop-blur-sm bg-orange-950/20 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
