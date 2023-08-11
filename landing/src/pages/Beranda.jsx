import Slider from '../components/beranda/Slider';

import LogoJatim from '../assets/image/logopemrov-png.png';
import KotaBatu from '../assets/image/kota-batu.png';
import KotaMalang from '../assets/image/kota-malang.png';
import KotaBlitar from '../assets/image/kota-blitar.png';
import KotaPasuruan from '../assets/image/kota-pasuruan.png';
import KotaSurabaya from '../assets/image/kota-surabaya.png';
import KabMalang from '../assets/image/kab-malang.png';
import KabBlitar from '../assets/image/kab-blitar.png';
import KabPasuruan from '../assets/image/kab-pasuruan.png';
import KabSidoarjo from '../assets/image/kab-sidoarjo.png';
import CardBerita from '../components/beranda/CardBerita';
import { useState } from 'react';
import ModalBerita from '../components/beranda/ModalBerita';
import CardPengumuman from '../components/beranda/CardPengumuman';
import ModalPengumuman from '../components/beranda/ModalPengumuman';

const Beranda = () => {
  const [pickOfBerita, setPickOfBerita] = useState('');
  const [pickOfPengumuman, setPickOfPengumuman] = useState('');

  return (
    <div>
      <Slider />

      <div className="md:grid grid-cols-4 gap-20 md:px-20">
        {/* Pengumuman */}
        <div className="flex flex-col order-last">
          <div className="pengumuman mt-12 md:mt-16 px-5 md:px-0">
            <h1 className="text-xl md:text-2xl text-center font-semibold text-second">Pengumuman</h1>
            <div className="grid grid-cols-2 md:grid-cols-1 items-stretch gap-10 md:gap-5 mt-4 md:mt-8">
              <CardPengumuman setPickOfPengumuman={setPickOfPengumuman} />
            </div>

            {/* Lihat lainnya */}
            <div className="flex justify-center mt-5">
              <a href="pengumuman" className="flex items-center h-7 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize text-sm">
                Lihat Lainnya
              </a>
            </div>

            {/* Modal */}
            <ModalPengumuman pickOfPengumuman={pickOfPengumuman} />
          </div>

          {/* Wilayah Kerja */}
          <div className="wilayah-kerja mt-12 px-5 md:px-0 hidden md:inline-block">
            <div className="bg-second rounded-2xl py-5">
              <div className="flex justify-center items-center gap-3 font-semibold">
                <img src={LogoJatim} alt="" className="w-10" />
                <div className="text-white">
                  Wilayah Kerja <br /> Bakorwil 3 Malang
                </div>
              </div>
              <div className="h-[2px] w-full my-5 bg-white"></div>
              <div className="grid grid-cols-3 place-items-center gap-y-5">
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
        </div>

        {/* Berita */}
        <div className="berita mt-12 px-5 md:px-0 col-span-3">
          <div className="md:grid grid-cols-2 justify-between items-end">
            <h1 className="text-xl md:text-2xl text-center md:text-left font-semibold text-second">Berita Terbaru</h1>
            {/* Lihat lainnya */}
            <div className="hidden md:flex justify-end mt-5">
              <a href="berita" className="flex items-center h-7 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize text-sm">
                Lihat Lainnya
              </a>
            </div>
          </div>

          {/* Card Berita */}
          <div className="grid grid-cols-2 justify-between mt-4 md:mt-8 gap-10">
            <CardBerita setPickOfBerita={setPickOfBerita} />
          </div>

          {/* Lihat lainnya */}
          <div className="flex md:hidden justify-center mt-5">
            <a href="berita" className="py-1 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize text-sm">
              Lihat Lainnya
            </a>
          </div>

          {/* Modal */}
          <ModalBerita pickOfBerita={pickOfBerita} />
        </div>
      </div>

      {/* Video */}
      <div className="video mt-12 md:mt-16 px-5 md:px-20">
        <h1 className="text-xl md:text-2xl text-center font-semibold text-second">Video Terkait</h1>
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-4 md:mt-8">
          <iframe src="https://www.youtube.com/embed/OjRQIV3RG7Y" allow="navigation" className="rounded-lg h-60 md:w-1/2 lg:h-96"></iframe>
          <iframe src="https://www.youtube.com/embed/OjRQIV3RG7Y" allow="navigation" className="rounded-lg h-60 md:w-1/2 lg:h-96"></iframe>
        </div>
        {/* Lihat lainnya */}
        <div className="flex justify-center mt-5">
          <a href="#" className="py-1 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize text-sm">
            Lihat Lainnya
          </a>
        </div>
      </div>

      {/* Galeri */}
      <div className="galeri mt-12 md:mt-16 px-5 md:px-20 pt-5 pb-5 md:pb-10 bg-birumuda">
        <h1 className="text-xl md:text-2xl text-center font-semibold text-second">Galeri</h1>
        <div className="card grid grid-cols-2 md:grid-cols-3 gap-10 items-stretch justify-between mt-8">
          <div className="card card-compact bg-base-100 bg-cover rounded-xl overflow-hidden relative">
            <img src="https://placehold.co/500x400" alt="Shoes" />
            <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-neutral-900 bg-opacity-50">Lorem ipsum dolor sit</div>
          </div>
          <div className="card card-compact bg-base-100 bg-cover rounded-xl overflow-hidden">
            <img src="https://placehold.co/500x400" alt="Shoes" />
            <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-dark bg-opacity-50">Lorem ipsum dolor sit</div>
          </div>
          <div className="card card-compact bg-base-100 bg-cover rounded-xl overflow-hidden relative">
            <img src="https://placehold.co/500x400" alt="Shoes" />
            <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-dark bg-opacity-50">Lorem ipsum dolor sit</div>
          </div>
          <div className="card card-compact bg-base-100 bg-cover rounded-xl overflow-hidden">
            <img src="https://placehold.co/500x400" alt="Shoes" />
            <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-dark bg-opacity-50">Lorem ipsum dolor sit</div>
          </div>
          <div className="card card-compact bg-base-100 bg-cover rounded-xl overflow-hidden relative">
            <img src="https://placehold.co/500x400" alt="Shoes" />
            <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-dark bg-opacity-50">Lorem ipsum dolor sit</div>
          </div>
          <div className="card card-compact bg-base-100 bg-cover rounded-xl overflow-hidden">
            <img src="https://placehold.co/500x400" alt="Shoes" />
            <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-dark bg-opacity-50">Lorem ipsum dolor sit</div>
          </div>
        </div>

        {/* Lihat lainnya */}
        <div className="flex justify-center mt-5">
          <a href="galeri" className="py-1 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize text-sm">
            Lihat Lainnya
          </a>
        </div>
      </div>

      {/* Wilayah Kerja */}
      <div className="wilayah-kerja my-12 px-5 md:hidden">
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
    </div>
  );
};

export default Beranda;
