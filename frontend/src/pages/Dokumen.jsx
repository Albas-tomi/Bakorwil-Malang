import React from "react";
import DokumentList from "../components/dokumen/DokumentList";

const Dokumen = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">Daftar Dokumen</h1>
        <button
          onClick={() => {
            window.my_modal_addDokumen.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Dokumen
        </button>
      </div>
      <DokumentList />
    </div>
  );
};

export default Dokumen;
