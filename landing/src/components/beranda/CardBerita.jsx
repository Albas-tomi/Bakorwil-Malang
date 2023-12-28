import React, { useEffect, useState } from "react";

import { FaClock } from "react-icons/fa";
import { getDataBerita } from "../../getDataApi";
import dayjs from "dayjs";
import { FaEye } from "react-icons/fa6";

const CardBerita = ({ setPickOfBerita }) => {
  //   ====================Get Data ===================
  const [dataBerita, setDataBerita] = useState([]);

  const urlImg = `${import.meta.env.VITE_APP_DOMAIN}/beritaImg/`;
  useEffect(() => {
    getDataBerita().then((data) => {
      setDataBerita(data);
    });
  }, []);
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
              <FaClock /> {dayjs(data.createdAt).format("DD MMM YYYY")}
            </span>
            <h3 className="font-medium capitalize line-clamp-1 my-2 md:text-sm text-xs">
              {data.judul}
            </h3>
          </div>
          <p className="text-xs text-second flex items-center gap-2 right-0 bottom-0 absolute pr-5 pb-2">
            <FaEye />
            {data.views ? data.views : 0}
          </p>
        </div>
      ))}
    </>
  );
};

export default CardBerita;
