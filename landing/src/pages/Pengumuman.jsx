import React from "react";
import { CardPengumuman } from "../components/beranda/CardPengumuman";

export const Pengumuman = () => {
  return (
    <div>
      <h1 className="text-xl text-center font-semibold text-[#094067] mb-5 md:text-4xl">
        Pengumuman Hari ini
      </h1>
      {/* =============== GRID COL CARD =============== */}
      <div className="grid grid-cols-2 gap-2 gap-y-6 justify-items-center md:grid-cols-3">
        {/* =============== CARD =============== */}
        <CardPengumuman />
        <CardPengumuman />
        <CardPengumuman />
        <CardPengumuman />
        <CardPengumuman />
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
    </div>
  );
};
