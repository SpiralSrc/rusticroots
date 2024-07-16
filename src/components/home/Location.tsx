import dynamic from "next/dynamic";

const Map = dynamic(() => import("../ui/Map"), {
  ssr: false,
});

const Location = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 backdrop-blur p-5 xs:p-10 lg:p-20 rounded-xl border border-orange-400/40 gap-14">
      <div className=" rounded-xl  border border-orange-400/40 p-5">
        <h2 className="text-4xl text-center font-sacramento font-extrabold pt-5 pb-5">
          Salon Hours
        </h2>
        <p className="italic mt-3">
          *To ensure availability, please contact us through the number or email
          below for consultations/appointments. We are happy to serve you!
        </p>
        <div className="flex flex-row justify-evenly gap-3 pt-5">
          <p>Mondays-Fridays</p>
          <p>9:30am-2:00pm</p>
        </div>
        <div>
          <h2 className="text-4xl text-center font-sacramento font-extrabold pt-16 pb-6 ">
            Address
          </h2>
          <div className="w-full flex flex-col justify-center text-center pb-5">
            <p>416 Whitcomb Ave, Tonasket, Wa 98855</p>
            <p>509-322-7022</p>
            <p>aliciaj98855@yahoo.com</p>
          </div>
        </div>
      </div>

      <div className="h-[400px] lg:w-full rounded-xl overflow-hidden border-2 border-orange-300/40">
        <Map />
      </div>
    </div>
  );
};

export default Location;
