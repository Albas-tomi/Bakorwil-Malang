import React from "react";
import WilayahKerjaList from "../components/WilayahKerja/WilayahKerjaList";

const WilayahKerja = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">
          Daftar Wilayah Kerja
        </h1>
        <button
          onClick={() => {
            window.my_modal_addWilayahKerja.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Wilayah Kerja
        </button>
      </div>
      <div className="flex flex-col my-2">
        <WilayahKerjaList />
      </div>
    </div>
  );
};

export default WilayahKerja;
