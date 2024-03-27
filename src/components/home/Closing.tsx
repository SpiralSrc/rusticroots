import Link from "next/link";

const Closing = () => {
  return (
    <section className="w-screen h-[50rem] m-auto bg-gradient-theme pt-10 lg:pt-20">
      <div className="max-w-7xl h-full m-auto flex flex-col justify-center items-center">
        <span className="text-4xl px-3 lg:px-0 md:text-5xl xl:text-7xl font-sacramento font-extrabold text-center mb-20">
          “Life isn’t perfect, but your hair can be!”
        </span>
        <p className="text-center text-lg md:text-xl">
          <br /> Book your appointment today!
        </p>
        <div className="flex justify-center items-center">
          <Link
            href={"/contact"}
            className="py-4 px-5  shadow-xl rounded-3xl my-20 bg-orange-400/20 transition-all ease-in-out duration-500 border border-transparent hover:border-orange-950/40 hover:text-orange-950/80 hover:bg-orange-200/20"
          >
            Get in touch with us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Closing;
