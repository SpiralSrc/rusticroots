import Image from "next/image";
import heroImage from "../../public/assets/rrslogo.png";

export default function Hero() {
  return (
    <section className="w-screen h-[90vh] bg-[url('/assets/salon5.jpg')] bg-no-repeat bg-cover bg-center">
      <div className=" max-w-7xl h-full flex justify-center items-center m-auto">
        <Image
          src={heroImage}
          alt="Logo image"
          className="w-4/5 h-3/4 backdrop-blur-sm bg-orange-950/20 rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
