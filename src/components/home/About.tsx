import Link from "next/link";

export default function About() {
  return (
    <section className="w-screen bg-gradient-theme py-32">
      <div className="max-w-7xl h-[40rem] m-auto  flex justify-center items-center ">
        <div className="w-full h-5/6 flex flex-row justify-between">
          <div className="w-full h-full flex flex-col gap-8 justify-center px-10">
            <h2 className="text-xl md:text-2xl">Welcome to...</h2>
            <h1 className="text-3xl mb-6 font-bold text-left">
              <span className="text-5xl sm:text-6xl md:text-7xl font-sacramento font-extrabold">
                Rustic Roots Salon!
              </span>
            </h1>

            <div className="w-full flex flex-col gap-5 lg:text-lg">
              <p>
                Experience the perfect blend of style and sophistication with
                our wide range of salon services.
              </p>
              <div className="flex items-start">
                <Link
                  href={"/our-salon"}
                  className="py-3 px-5 rounded-3xl mt-10 bg-orange-400/20 transition-all ease-in-out duration-500 shadow-xl border border-transparent hover:border-orange-200/40 hover:text-orange-950/80 hover:bg-orange-200/20"
                >
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
