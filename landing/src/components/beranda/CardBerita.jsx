import React, { useState } from "react";

import { FaClock } from "react-icons/fa";
import { getDataBerita } from "../../getDataApi";
import { useEffect } from "react";

const CardBerita = ({ setPickOfBerita }) => {
  //   ====================Get Data ===================

  const [dataBerita, setDataBerita] = useState([]);
  const urlImg = "http://localhost:4000/beritaImg/";
  useEffect(() => {
    getDataBerita().then((data) => {
      setDataBerita(data);
    });
  }, []);
  //   ==================== Ubah tanggal Pembuatan ===================
  return (
    <>
      {dataBerita.slice(0, 6).map((data) => (
        <div
          key={data.id}
          className="card card-compact bg-base-100 shadow-xl cursor-pointer"
          onClick={() => {
            window.my_modal_5.showModal();
            setPickOfBerita({
              id: data.id,
              judul: data.judul,
              deskripsi: data.deskripsi,
              gambar: data.gambar,
            });
          }}
        >
          <figure>
            <img
              src={`${urlImg}/${data.gambar}`}
              alt=""
              className="object-cover h-28 md:h-44 lg:h-56 w-[100%]"
            />
          </figure>
          <div className="card-body flex gap-1">
            <span className="text-primer text-xs flex items-center gap-1">
              <FaClock /> {data.createdAt}
            </span>
            <h3 className="font-medium capitalize">{data.judul}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBerita;
