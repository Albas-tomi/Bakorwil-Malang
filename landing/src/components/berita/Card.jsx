import React from "react";
import { FaClock, FaEye } from "react-icons/fa6";

export const Card = ({ beritaData, Get }) => {
  return (
    <>
      <div
        key={beritaData.id}
        className="card card-compact bg-base-100 shadow-xl md:w-[80%]"
      >
        <figure>
          <img className="object-cover h-48 w-96" src={beritaData.image} />
        </figure>
        <div className="card-body">
          <p className="text-[#3da9fc] flex items-center">
            <span className="mr-2">
              <FaClock />
            </span>
            {beritaData.tgl}
          </p>
          <p>
            {beritaData.title.substring(0, 60)}
            <span> </span>
            {/* =========== MODAL =========== */}
            <button
              onClick={() => {
                window.modalBerita.showModal();
                Get({
                  id: beritaData.id,
                  image: beritaData.image,
                  tgl: beritaData.tgl,
                  title: beritaData.title,
                  deskripsi: beritaData.deskripsi,
                });
              }}
            >
              <a className="text-[#3da9fc]">selengkanya</a>
            </button>
          </p>
          <p className="text-xs text-second flex items-center gap-2 right-0 bottom-0 absolute pr-5 pb-2">
            <FaEye />
            12
          </p>
        </div>
      </div>
    </>
  );
};
