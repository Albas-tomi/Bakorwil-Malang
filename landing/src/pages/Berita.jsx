import React from "react";
import Card from "../components/beranda/Card";
import Data from "../Data.json";

export const Berita = () => {
  return (
    <div>
      <h1 className="text-xl text-center font-semibold text-[#094067] mb-5 md:text-4xl">
        Berita Hari ini
      </h1>
      {/* =============== GRID COL CARD =============== */}
      <div className="grid grid-cols-2 gap-2 gap-y-6 justify-items-center md:grid-cols-3">
        {/* =============== CARD =============== */}
        <Card />
      </div>
      {/* =============== PAGINATION =============== */}
      <div className="grid justify-items-center my-6">
        <div className="join">
          <button className="join-item btn btn-md">1</button>
          <button className="join-item btn btn-md btn-active">2</button>
          <button className="join-item btn btn-md">3</button>
          <button className="join-item btn btn-md">4</button>
        </div>
      </div>

      {/* =============== MODAL =============== */}
      {/* {BeritaCard.map((bc) => {
        return ( */}
      <dialog id="modalll" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Lorem ipsum dolor sit amet.</h3>
          <p className="py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            magnam in nesciunt eius beatae iste assumenda quo sed non blanditiis
            perspiciatis alias, quas quam dolor repellat voluptatum. Nesciunt,
            corporis officiis!
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      {/* );
      })} */}
    </div>
  );
};
