import React, { useState } from "react";
import { FaClock, FaEye } from "react-icons/fa6";
import dayjs from "dayjs";
import { editDataBerita } from "../../getDataApi";

export const Card = ({ beritaData, Get }) => {
  // ===================Menambahkan Jumlah Lihat Page ===================
  const [kunjungan, setKunjungan] = useState(beritaData.views || 0);
  const handleIncrementViews = () => {
    const formData = new FormData();
    formData.append("views", kunjungan + 1);
    editDataBerita(beritaData, formData);
    setKunjungan(kunjungan + 1);
  };
  const urlImg = `${import.meta.env.VITE_APP_DOMAIN}/beritaImg/`;
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
            <FaClock />
            {dayjs(beritaData.createdAt).format("DD MMM YYYY")}
          </span>
          <p className="capitalize">
            {beritaData.judul.substring(0, 30)}
            <span>...</span>
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
                handleIncrementViews(beritaData.id);
              }}
            >
              <a className="text-primer">selengkanya</a>
            </button>
          </p>
          <p className="text-xs text-second flex items-center gap-2 right-0 bottom-0 absolute pr-5 pb-2">
            <FaEye />
            {kunjungan}
          </p>
        </div>
      </div>
    </>
  );
};
