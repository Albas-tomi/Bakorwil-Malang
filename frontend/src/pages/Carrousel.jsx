import React from "react";
import CarrouselList from "../components/carrousel/CarrouselList";

const Carrousel = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">Daftar Carrousel</h1>
        <button
          onClick={() => {
            window.my_modal_addCarrousel.showModal();
          }}
          className="btn bg-[#005DB9] text-white my-2 hover:bg-blue-700"
        >
          + Tambah Carrousel
        </button>
      </div>
      <CarrouselList />
    </div>
  );
};

export default Carrousel;
