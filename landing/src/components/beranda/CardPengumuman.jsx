import React, { useEffect, useState } from "react";
import { getDataPengumuman } from "../../getDataApi";

const CardPengumuman = ({ setPickOfPengumuman }) => {
  const [dataPengumuman, setDataPengumuman] = useState([]);
  const urlImg = "http://localhost:4000/pengumumanImg/";
  useEffect(() => {
    getDataPengumuman().then((data) => {
      setDataPengumuman(data);
    });
  }, []);
  return (
    <>
      {dataPengumuman.slice(0, 2).map((data) => (
        <label
          className="card md:grid md:grid-cols-1 lg:grid-cols-5 items-stretch object-cover cursor-pointer"
          onClick={() => {
            window.modal_pengumuman.showModal();
            setPickOfPengumuman({
              id: data.id,
              judul: data.judul,
              gambar: data.gambar,
            });
          }}
        >
          <div className="card card-compact col-span-2 bg-base-100 bg-cover rounded-md overflow-hidden shadow-xl md:shadow-none">
            <img
              src={`${urlImg}/${data.gambar}`}
              alt={data.judul}
              className="h-28 md:h-52 lg:h-16 object-cover"
            />
            <div className="absolute lg:hidden bottom-0 w-full text-center text-white text-xs py-2 bg-neutral-900 bg-opacity-50">
              Lorem ipsum dolor sit
            </div>
          </div>
          <h3 className="hidden line-clamp-2 lg:inline-block col-span-3 md:text-xs lg:text-sm font-medium capitalize place-self-center">
            <p className="line-clamp-3 mx-2">{data.judul}</p>
          </h3>
        </label>
      ))}
    </>
  );
};

export default CardPengumuman;
