import ServicesList from "@/components/services-page/ServicesList";


export default function page() {
  return (
    <div className="w-full flex flex-col justify-center my-28 pb-20 backdrop-blur-sm rounded-xl border border-orange-400/30 ">
      <header className="w-full flex justify-center items-center">
        <h1 className="text-center text-5xl font-extrabold font-sacramento py-10">
          Our Services
        </h1>
      </header>

      <ServicesList />
    </div>
  );
}
