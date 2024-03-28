import Image from "next/image";
import heroImage from "../../../public/assets/rrslogo.png";

export default function Hero() {
  return (
    <section className="w-screen h-screen sm:h-[90vh] bg-hero-img bg-no-repeat bg-cover bg-left sm:bg-center">
      <div className=" max-w-7xl h-full flex justify-center items-end m-auto">
        <div className=" relative w-[360px] h-[250px] xs:w-[400px] xs:h-[290px] sm:w-[500px] sm:h-[390px] lg:w-[700px] lg:h-[590px] mb-20">
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
