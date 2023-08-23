import moment from "moment";
import React from "react";
import { FaClock } from "react-icons/fa6";

const CardSeacrhDisplay = ({ setDataModal, filteredData }) => {
  return (
    <>
      {filteredData.map((data, idx) => (
        <div key={idx} className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover h-28 md:h-44 lg:h-56 w-[100%]"
              src={data.url}
            />
          </figure>
          <div className="card-body flex gap-1">
            <span className="text-primer text-xs flex items-center gap-1">
              <FaClock />
              {moment(data.createdAt).format("DD MMM YYYY")}
            </span>
            <p className="capitalize">
              {data.judul.substring(0, 60)}
              <span> </span>
              {/* =========== MODAL =========== */}
              <button
                onClick={() => {
                  window.modalSearch.showModal();
                  setDataModal({
                    id: data.id,
                    url: data.url,
                    createdAt: data.createdAt,
                    judul: data.judul,
                    deskripsi: data.deskripsi,
                  });
                }}
              >
                <a className="text-primer">selengkanya</a>
              </button>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSeacrhDisplay;
