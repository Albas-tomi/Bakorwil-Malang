import React from "react";
import DaftarInformasiPPIDList from "../components/DaftarInformasiPPID/DaftarInformasiPPIDList";

const DaftarInformasiPPID = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">
          Daftar Daftar Informasi PPID
        </h1>
        <button
          onClick={() => {
            window.my_modal_addDaftarInformasiPPID.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Daftar Informasi
        </button>
      </div>
      <DaftarInformasiPPIDList />
    </div>
  );
};

export default DaftarInformasiPPID;
