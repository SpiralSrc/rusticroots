import Image from "next/image";
import heroImage from "../../../public/assets/rrslogo.png";

export default function Hero() {
  return (
    <section className="w-screen h-screen sm:h-[90vh] bg-hero-img bg-no-repeat bg-cover bg-left sm:bg-center">
      <div className=" max-w-7xl h-full flex m-auto">
        <div className="w-full h-full backdrop-blur-[2px] sm:backdrop-blur-none flex justify-center items-center sm:items-end ">
          <div className=" relative w-[360px] h-[250px] xs:w-[550px] xs:h-[390px] sm:w-[600px] sm:h-[490px] lg:w-[750px] lg:h-[590px] sm:mb-20">
            <Image
              src={heroImage}
              fill
              alt="Logo image"
              className=" object-fill backdrop-blur-sm bg-orange-950/20 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
