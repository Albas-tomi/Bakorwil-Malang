import React from "react";
import BeritaList from "../components/berita/BeritaList";

const Berita = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">Daftar Berita</h1>
        <button
          onClick={() => {
            window.my_modal_addBerita.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Berita
        </button>
      </div>
      <BeritaList />
    </div>
  );
};

export default Berita;
