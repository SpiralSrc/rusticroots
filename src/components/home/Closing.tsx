import Link from "next/link";

const Closing = () => {
  return (
    <section className="w-screen h-[50rem] m-auto bg-gradient-theme pt-20">
      <div className="max-w-7xl h-full m-auto flex flex-col justify-center items-center">
        <span className="text-7xl font-sacramento font-extrabold text-center mb-20">
          “Life isn’t perfect, but your hair can be!”
        </span>
        <p className="text-center text-xl">
          <br /> Book your appointment today!
        </p>
        <div className="flex justify-center items-center">
          <Link
            href={"/contact"}
            className="py-4 px-5 bg-orange-950/20 shadow-xl rounded-xl my-20"
          >
            Get in touch with us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Closing;
