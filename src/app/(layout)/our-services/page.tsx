import ServicesList from "@/components/services-page/ServicesList";


export default function page() {
  return (
    <div className="w-[90%] mx-auto flex flex-col items-center justify-center mb-20 pb-20 backdrop-blur-sm rounded-xl border border-orange-400/30 px-10 lg:px-0">
      <h1 className="text-center text-5xl font-extrabold font-sacramento py-10">
        Our Services
      </h1>

      <div className="w-[80%] m-auto py-10">
        <p className="italic">
          *Due to the fact that stylists operate independently, prices may vary.
          Please contact us for more information.
        </p>
      </div>
      <ServicesList />
    </div>
  );
}
