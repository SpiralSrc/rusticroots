import { servicesData } from "@/lib/data";

const ServicesList = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      {servicesData.map((service, id) => (
        <div
          key={id}
          className="w-[80%] flex flex-col items-center justify-start border border-orange-400/40 py-5 px-10 rounded-lg"
        >
          <h3 className="w-full text-center border-b border-orange-400/40 py-3 font-sacramento text-4xl font-bold">
            {service.name}
          </h3>
          <div className="w-full flex flex-col justify-start gap-10 py-5">
            {service.subData.map((sub, id) => (
              <div key={id} className="w-full flex flex-row justify-between">
                <p>{sub.service}</p>
                <p>{sub.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
