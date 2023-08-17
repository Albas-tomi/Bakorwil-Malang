import React, { useState } from "react";
import { FaClock, FaEye } from "react-icons/fa6";

export const Card = ({ beritaData, Get }) => {
  const [kunjungan, setKunjungan] = useState(0);
  const urlImg = "http://localhost:4000/beritaImg/";

  const handleKunjunganIncrement = (id) => {
    setKunjungan((prevKunjungan) => ({
      ...prevKunjungan,
      [id]: (prevKunjungan[id] || 0) + 1,
    }));
  };
  return (
    <>
      <div
        key={beritaData.id}
        className="card card-compact bg-base-100 shadow-xl"
      >
        <figure>
          <img
            className="object-cover h-28 md:h-44 lg:h-56 w-[100%]"
            src={`${urlImg}${beritaData.gambar}`}
          />
        </figure>
        <div className="card-body flex gap-1">
          <span className="text-primer text-xs flex items-center gap-1">
            <FaClock /> {beritaData.createdAt}
          </span>
          <p className="capitalize">
            {beritaData.judul.substring(0, 60)}
            <span> </span>
            {/* =========== MODAL =========== */}
            <button
              onClick={() => {
                window.modalBerita.showModal();
                Get({
                  id: beritaData.id,
                  gambar: beritaData.gambar,
                  createdAt: beritaData.createdAt,
                  judul: beritaData.judul,
                  deskripsi: beritaData.deskripsi,
                });
                handleKunjunganIncrement(beritaData.id);
              }}
            >
              <a className="text-primer">selengkanya</a>
            </button>
          </p>
          <p className="text-xs text-second flex items-center gap-2 right-0 bottom-0 absolute pr-5 pb-2">
            <FaEye />
            {kunjungan[beritaData.id] || 0}
          </p>
        </div>
      </div>
    </>
  );
};
