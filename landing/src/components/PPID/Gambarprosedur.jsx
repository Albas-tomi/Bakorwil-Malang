import React from 'react';

import AlurPenyelesaian from '../../assets/image/alur-penyelesaian.jpg';
import LayananInformasi from '../../assets/image/layanan-informasi.jpg';

const Gambarprosedur = () => {
  return (
    <>
      <div className="md:w-[180%] relative">
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#262626] opacity-70 md:py-4">
          <h3 class="text-sm text-center text-white font-medium md:text-lg">SOP Pelayanan Informasi dan Alur Keberatan</h3>
        </div>
        <img src={LayananInformasi} alt="" />
      </div>
      <div className="my-6 md:rotate-90 md:w-[23rem]">{/* <div className="h-1 rounded w-40 mx-auto bg-second md:w-40"></div> */}</div>
      <div className="md:grid items-center relative">
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#262626] opacity-70 md:py-4">
          <h3 class="text-sm text-center text-white font-medium md:text-lg">Alur Penyelesaian Sengketa Informasi Melalui Komisi Konfirasi</h3>
        </div>
        <img src={AlurPenyelesaian} alt="" />
      </div>
    </>
  );
};

export default Gambarprosedur;
