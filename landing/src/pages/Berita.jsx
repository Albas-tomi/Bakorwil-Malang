import React from "react";
import Card from "../components/beranda/Card";

export const Berita = () => {
  return (
    <div className="px-5">
      <h1 className="text-xl text-center font-semibold text-second mb-5">
        Berita Terbaru
      </h1>
      <div className="flex flex-row flex-wrap justify-between  gap-y-6">
        {/* =============== CARD =============== */}
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
        {/* =============== PAGINATION =============== */}
      <div className="flex justify-center mt-6">
        <div className="join">
          <button className="join-item btn btn-xs">1</button>
          <button className="join-item btn btn-xs btn-active">2</button>
          <button className="join-item btn btn-xs">3</button>
          <button className="join-item btn btn-xs">4</button>
        </div>
      </div>
    </div>
  );
};
