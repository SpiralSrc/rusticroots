export default function About() {
  return (
    <section className="w-screen bg-gradient-theme py-32">
      <div className="max-w-7xl h-[40rem] m-auto  flex justify-center items-center ">
        <div className="w-full h-5/6 flex flex-row justify-between">
          <div className="w-full h-full flex flex-col gap-8 justify-center pr-10">
            <h2 className="text-2xl">Welcome to...</h2>
            <h1 className="text-3xl mb-6 font-bold text-left">
              <span className="text-7xl font-sacramento font-extrabold">
                Rustic Roots Salon!
              </span>
            </h1>

            <div className="w-full flex flex-col gap-5 lg:text-lg">
              <p>
                Experience the perfect blend of style and sophistication with
                our wide range of salon services.
              </p>
              <p>
                With years of experience, we are committed to serve <br /> your
                beauty needs and help bring out the best in you! <br />{" "}
              </p>
              <p>Your utter satisfaction is our ultimate reward!</p>
            </div>
          </div>
          {/* <div className="w-2/4 h-full relative object-cover">
              <Image src={hairPng} fill alt="png" />
            </div> */}
        </div>
      </div>
    </section>
  );
}
