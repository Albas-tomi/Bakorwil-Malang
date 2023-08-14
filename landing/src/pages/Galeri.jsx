import React, { useState } from 'react';

import ModalGaleri from '../components/beranda/ModalGaleri';
import Card from '../components/galeri/Card';
import Video from '../components/galeri/Video';

const Galeri = () => {
  const [pickOfGaleri, setPickOfGaleri] = useState('');

  return (
    <>
      {/* Galeri Foto */}
      <div className="galeri px-5 md:px-10 lg:px-20">
        <h1 className="p-5 md:p-10 text-xl text-center font-semibold text-[#094067] md:text-4xl">Galeri Foto</h1>
        <div className="kategori md:w-[50%] lg:w-[30%] grid grid-cols-4 justify-items-center text-sm font-medium capitalize mx-auto">
          <a href="#" className="py-1 px-3 rounded-full hover:bg-primer hover:text-white active:bg-primer active:text-white">
            Semua
          </a>
          <a href="#" className="py-1 px-3 rounded-full hover:bg-primer hover:text-white active:bg-primer active:text-white">
            Rapat
          </a>
          <a href="#" className="py-1 px-3 rounded-full hover:bg-primer hover:text-white active:bg-primer active:text-white">
            Kegiatan
          </a>
          <a href="#" className="py-1 px-3 rounded-full hover:bg-primer hover:text-white active:bg-primer active:text-white">
            KORPRI
          </a>
        </div>

        {/* Card */}
        <Card setPickOfGaleri={setPickOfGaleri} />

        {/* Modal */}
        <ModalGaleri pickOfGaleri={pickOfGaleri} />
      </div>
      {/* End Galeri Foto */}

      {/* Galeri Video */}
      <div className="galeri px-5 md:px-10 lg:px-20">
        <h1 className="p-5 md:p-10 text-xl text-center font-semibold text-[#094067] md:text-4xl">Galeri Video</h1>
        <Video />
      </div>
      {/* End Galeri Video */}
    </>
  );
};

export default Galeri;
