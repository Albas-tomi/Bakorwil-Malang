import React, { useEffect, useState } from "react";
import { getDataPengumuman } from "../../getDataApi";
import { BsClockHistory } from "react-icons/bs";
import dayjs from "dayjs";

const CardPengumuman = ({ setPickOfPengumuman }) => {
  const [dataPengumuman, setDataPengumuman] = useState([]);
  const urlImg = `${import.meta.env.VITE_APP_DOMAIN}/pengumumanImg/`;
  useEffect(() => {
    getDataPengumuman().then((data) => {
      setDataPengumuman(data);
    });
  }, []);
  return (
    <>
      {dataPengumuman.slice(0, 2).map((data) => (
        <label
          key={data.id}
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
          <div className="card card-compact col-span-2 flex  justify-center items-center bg-cover rounded-md overflow-hidden shadow-xl md:shadow-none">
            <img
              src={`${urlImg}/${data.gambar}`}
              alt={data.judul}
              className="h-28 md:h-52 lg:h-16 rounded-md object-cover"
            />
            <div className="absolute lg:hidden bottom-0 w-full text-center text-white text-xs py-2 bg-neutral-900 bg-opacity-50">
              <p className="text-sm">{data.judul}</p>
            </div>
          </div>
          <div className="hidden mx-2 line-clamp-2 lg:inline-block col-span-3 md:text-xs lg:text-sm font-medium capitalize place-self-center">
            <p className="my-2 font-semibold">{data.judul}</p>
            <div className="flex justify-center items-center gap-2">
              <BsClockHistory />
              <p className="text-xs">
                {dayjs(data.createdAt).format("DD MMM YYYY")}
              </p>
            </div>
          </div>
        </label>
      ))}
    </>
  );
};

export default CardPengumuman;
