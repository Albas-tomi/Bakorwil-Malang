import React from 'react';

import LogoJatim from '../../assets/image/logopemrov-png.png';
import KotaBatu from '../../assets/image/kota-batu.png';
import KotaMalang from '../../assets/image/kota-malang.png';
import KotaBlitar from '../../assets/image/kota-blitar.png';
import KotaPasuruan from '../../assets/image/kota-pasuruan.png';
import KotaSurabaya from '../../assets/image/kota-surabaya.png';
import KabMalang from '../../assets/image/kab-malang.png';
import KabBlitar from '../../assets/image/kab-blitar.png';
import KabPasuruan from '../../assets/image/kab-pasuruan.png';
import KabSidoarjo from '../../assets/image/kab-sidoarjo.png';

const WilayahKerjaMobile = () => {
  return (
    <>
      {/* Mobile */}
      <div className="wilayah-kerja my-12 px-5 md:px-20 lg:hidden">
        <div className="bg-second rounded-2xl py-5">
          <div className="flex justify-center items-center gap-7 font-semibold">
            <img src={LogoJatim} alt="" className="w-10" />
            <div className="text-white">Wilayah Kerja Bakorwil 3 Malang</div>
          </div>
          <div className="h-[2px] w-full my-5 bg-white"></div>
          <div className="grid grid-cols-5 place-items-center gap-y-5">
            <a href="https://batukota.go.id/Portal/profil" target="_blank" rel="noreferrer">
              <img src={KotaBatu} alt="kota-batu" className="h-16" />
            </a>
            <a href="https://malangkota.go.id/" target="_blank" rel="noreferrer">
              <img src={KotaMalang} alt="kota-malang" className="h-16" />
            </a>
            <a href="https://blitarkota.go.id/" target="_blank" rel="noreferrer">
              <img src={KotaBlitar} alt="kota-blitar" className="h-16" />
            </a>
            <a href="https://pasuruankota.go.id/" target="_blank" rel="noreferrer">
              <img src={KotaPasuruan} alt="kota-pasuruan" className="h-16" />
            </a>
            <a href="https://www.surabaya.go.id/" target="_blank" rel="noreferrer">
              <img src={KotaSurabaya} alt="kota-surabaya" className="h-16" />
            </a>
            <a href="https://www.malangkab.go.id/mlg/" target="_blank" rel="noreferrer">
              <img src={KabMalang} alt="kab-malang" className="h-16" />
            </a>
            <a href="https://www.blitarkab.go.id/" target="_blank" rel="noreferrer">
              <img src={KabBlitar} alt="kab-blitar" className="h-16" />
            </a>
            <a href="https://www.pasuruankab.go.id/" target="_blank" rel="noreferrer">
              <img src={KabPasuruan} alt="kab-pasuruan" className="h-16" />
            </a>
            <a href="https://www.sidoarjokab.go.id/" target="_blank" rel="noreferrer">
              <img src={KabSidoarjo} alt="kab-sidoarjo" className="h-14" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WilayahKerjaMobile;
