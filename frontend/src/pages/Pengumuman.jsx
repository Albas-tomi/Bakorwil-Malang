import React from "react";
import PengumumanList from "../components/pengumuman/PengumumanList";

const Pengumuman = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">Daftar Pengumuman</h1>
        <button
          onClick={() => {
            window.my_modal_add.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Pengumuman
        </button>
      </div>
      <div className="flex flex-col my-2">
        <PengumumanList />
      </div>
    </div>
  );
};

export default Pengumuman;
