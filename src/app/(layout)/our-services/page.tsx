import ServicesList from "@/components/services-page/ServicesList";


export default function page() {
  return (
    <div className="w-screen pt-24">
      <div className="max-w-7xl mx-2 xs:mx-auto flex flex-col items-center justify-center mb-32 pb-20 backdrop-blur-sm rounded-xl border border-orange-400/30 px-5 xs:px-10 lg:px-0">
        <h1 className="w-[70%] text-center text-5xl font-extrabold font-sacramento pt-10 pb-5 border-b border-orange-400/30">
          Our Services
        </h1>

        <div className="w-[90%] md:w-[80%] m-auto py-10">
          <p className="italic">
            *Due to the fact that stylists operate independently, prices may
            vary. Please contact us for more information.
          </p>
        </div>
        <ServicesList />
      </div>
    </div>
  );
}
