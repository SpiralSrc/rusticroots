import img from "../../../public/assets/frame2.png";
import Image from "next/image";

const AboutBg = () => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full py-4">
        <Image src={img} fill alt="image" />
      </div>
    </div>
  );
};

export default AboutBg;
