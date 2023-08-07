import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";

export const Card = ({ b, Get }) => {
  return (
    <>
      <div
        key={b.id}
        className="card card-compact bg-base-100 shadow-xl md:w-[80%]"
      >
        <figure>
          <img className="object-cover h-48 w-96" src={b.image} />
        </figure>
        <div className="card-body">
          <p className="text-[#3da9fc]">
            <span className="mr-2">
              <FontAwesomeIcon icon={faClock} /> 20 agustus 2023
            </span>
          </p>
          <p>
            {b.deskripsi.substring(0, 60)}...
            <span> </span>
            {/* =========== MODAL =========== */}
            <button
              onClick={() => {
                window.modalBerita.showModal();
                Get({
                  id: b.id,
                  image: b.image,
                  title: b.title,
                  deskripsi: b.deskripsi,
                });
              }}
            >
              <a className="text-[#3da9fc]">selengkanya</a>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};
