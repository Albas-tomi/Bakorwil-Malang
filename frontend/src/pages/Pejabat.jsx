import React from "react";
import PejabatList from "../components/pejabat/PejabatList";

const Pejabat = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">Daftar Pejabat</h1>
        <button
          onClick={() => {
            window.my_modal_addPejabat.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Pejabat
        </button>
      </div>
      <PejabatList />
    </div>
  );
};

export default Pejabat;
