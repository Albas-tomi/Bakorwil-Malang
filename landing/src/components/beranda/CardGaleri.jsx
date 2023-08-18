import React, { useEffect, useState } from "react";
import { getDataGaleri } from "../../getDataApi";

const CardGaleri = ({ setPickOfGaleri }) => {
  const [dataGaleri, setDataGaleri] = useState([]);
  const urlImg = "http://localhost:4000/galeriImg/";
  useEffect(() => {
    getDataGaleri().then((data) => {
      setDataGaleri(data);
    });
  }, []);

  return (
    <>
      {dataGaleri
        .slice(0, 6)
        .reverse()
        .map((dataGaleri) => (
          <label
            key={dataGaleri.id}
            className="card card-compact bg-base-100 bg-cover rounded-md overflow-hidden relative cursor-pointer"
            onClick={() => {
              window.modalGaleri.showModal();
              setPickOfGaleri({
                id: dataGaleri.id,
                judul: dataGaleri.judul,
                gambar: dataGaleri.gambar,
              });
            }}
          >
            <img
              src={`${urlImg}${dataGaleri.gambar}`}
              alt=""
              className="object-cover h-28 md:h-40 lg:h-64"
            />
            <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-neutral-900 bg-opacity-50 capitalize">
              {dataGaleri.judul}
            </div>
          </label>
        ))}
    </>
  );
};

export default CardGaleri;
