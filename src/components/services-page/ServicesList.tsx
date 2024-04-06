import { servicesData } from "@/lib/data";

const ServicesList = () => {
  return (
    <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
      {servicesData.map((service, id) => (
        <div
          key={id}
          className="min-w-60 xs:min-w-72 min-h-72 border mx-auto border-orange-400/40 py-5 rounded-lg"
        >
          <h3 className="w-full text-center border-b border-orange-400/40 py-3 font-sacramento text-4xl font-bold">
            {service.name}
          </h3>
          <div className="w-full flex flex-col justify-center gap-5 py-5">
            {service.subData.map((sub, id) => (
              <ul key={id} className="flex justify-start pl-10">
                <li className="list-disc">{sub.service}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
