import React from "react";
import GaleriList from "../components/galeri/GaleriList";

const Galeri = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">Daftar Galeri</h1>
        <button
          onClick={() => {
            window.my_modal_addGaleri.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Galeri
        </button>
      </div>
      <GaleriList />
    </div>
  );
};

export default Galeri;
