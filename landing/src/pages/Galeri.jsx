import React from 'react';

import CardGaleri from '../components/beranda/CardGaleri';

const Galeri = () => {
  return (
    <>
      <div className="galeri px-5">
        <h1 className="p-5 text-xl text-center font-semibold text-[#094067] md:text-4xl">Galeri</h1>
        <div className="kategori grid grid-cols-4 justify-items-center text-sm font-medium capitalize">
          <a href="#" className="py-1 px-3 rounded-full hover:bg-primer hover:text-white active:bg-primer active:text-white">
            Semua
          </a>
          <a href="#" className="py-1 px-3 rounded-full hover:bg-primer">
            Rapat
          </a>
          <a href="#" className="py-1 px-3 rounded-full hover:bg-primer">
            Kegiatan
          </a>
          <a href="#" className="py-1 px-3 rounded-full hover:bg-primer">
            KORPRI
          </a>
        </div>
        <div className="card grid grid-cols-2 md:grid-cols-3 gap-10 items-stretch justify-between mt-5">
          <CardGaleri />
        </div>
      </div>
    </>
  );
};

export default Galeri;
