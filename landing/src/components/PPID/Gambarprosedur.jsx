import React from "react";

const Gambarprosedur = () => {
  return (
    <>
      <div className="md:w-[180%] relative">
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#262626] opacity-70 md:py-4">
          <h3 class="text-sm text-center text-white font-bold md:text-lg">
            SOP Pelayanan Informasi dan Alur Keberatan
          </h3>
        </div>
        <img
          src="https://bakorwilmalang.jatimprov.go.id/images/ppid_layanan_informasi/bce0c48d1132df333aa97840cc0d8fa5.jpg"
          alt=""
        />
      </div>
      <div className="my-6 md:rotate-90 md:w-[23rem]">
        <div className="h-1 rounded w-40 mx-auto bg-second md:w-40"></div>
      </div>
      <div className="md:grid items-center relative">
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#262626] opacity-70 md:py-4 md:bottom-[90px]">
          <h3 class="text-sm text-center text-white font-bold md:text-xs">
            Alur Penyelesaian Sengketa Informasi Melalui Komisi Konfirasi
          </h3>
        </div>
          <img
            src="https://bakorwilmalang.jatimprov.go.id/images/ppid_layanan_informasi/281458f47b16c96cea8d39a1ff12c035.jpg"
            alt=""
          />
      </div>
    </>
  );
};

export default Gambarprosedur;
