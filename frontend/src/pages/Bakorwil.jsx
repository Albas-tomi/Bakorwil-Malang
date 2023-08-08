import React from "react";
import BakorwilList from "../components/bakorwil/BakorwilList";

const Bakorwil = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">Daftar Bakorwil</h1>
        <button
          onClick={() => {
            window.my_modal_addBakorwil.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Bakorwil
        </button>
      </div>
      <BakorwilList />
    </div>
  );
};

export default Bakorwil;
