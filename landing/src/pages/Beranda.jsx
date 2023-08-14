import Slider from '../components/beranda/Slider';

import CardBerita from '../components/beranda/CardBerita';
import { useState } from 'react';
import ModalBerita from '../components/beranda/ModalBerita';
import CardPengumuman from '../components/beranda/CardPengumuman';
import ModalPengumuman from '../components/beranda/ModalPengumuman';
import WilayahKerjaMobile from '../components/beranda/WilayahKerjaMobile';
import WilayahKerjaDekstop from '../components/beranda/WilayahKerjaDekstop';
import CardVideo from '../components/beranda/CardVideo';
import CardGaleri from '../components/beranda/CardGaleri';
import ModalGaleri from '../components/beranda/ModalGaleri';

const Beranda = () => {
  const [pickOfBerita, setPickOfBerita] = useState('');
  const [pickOfPengumuman, setPickOfPengumuman] = useState('');
  const [pickOfGaleri, setPickOfGaleri] = useState('');

  return (
    <div>
      <Slider />

      <div className="lg:grid grid-cols-4 gap-20 md:px-10 lg:px-20">
        {/* Pengumuman */}
        <div className="flex flex-col order-last">
          <div className="pengumuman mt-12 md:mt-16 px-5 md:px-0">
            <h1 className="text-xl lg:text-2xl text-center font-semibold text-second">Pengumuman</h1>
            <div className="grid grid-cols-2 lg:grid-cols-1 items-stretch md:gap-x-10 gap-5 mt-4 md:mt-8">
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

          <WilayahKerjaDekstop />
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
          <div className="grid grid-cols-2 justify-between mt-4 md:mt-8 gap-x-5 gap-y-10 md:gap-y-14 md:gap-x-10">
            <CardBerita setPickOfBerita={setPickOfBerita} />
          </div>

          {/* Modal */}
          <ModalBerita pickOfBerita={pickOfBerita} />
        </div>
      </div>

      {/* Video */}
      <CardVideo />

      {/* Lihat lainnya */}
      <div className="flex justify-center mt-5">
        <a href="galeri" className="py-1 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize text-sm">
          Lihat Lainnya
        </a>
      </div>

      {/* Galeri */}
      <div className="galeri mt-12 md:px-10 lg:mt-16 px-5 lg:px-20 pt-5 pb-5 md:pb-10 bg-birumuda">
        <h1 className="text-xl md:text-2xl text-center font-semibold text-second">Galeri</h1>
        <div className="card grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5 md:gap-x-10 md:gap-y-14 items-stretch justify-between mt-8">
          <CardGaleri setPickOfGaleri={setPickOfGaleri} />
        </div>

        {/* Modal Galeri */}
        <ModalGaleri pickOfGaleri={pickOfGaleri} />

        {/* Lihat lainnya */}
        <div className="flex justify-center mt-5">
          <a href="galeri" className="py-1 px-3 rounded-lg bg-second text-white hover:bg-birumuda capitalize text-sm">
            Lihat Lainnya
          </a>
        </div>
      </div>

      {/* Wilayah Kerja */}

      <WilayahKerjaMobile />
    </div>
  );
};

export default Beranda;
