import React, { useState } from "react";

import ModalGaleri from "../components/beranda/ModalGaleri";
import Card from "../components/galeri/Card";
import Video from "../components/galeri/Video";
import CardRapat from "../components/galeri/CardRapat";
import CardKORPRI from "../components/galeri/CardKORPRI";

const Galeri = () => {
  const [pickOfGaleri, setPickOfGaleri] = useState("");
  // ============== GANTI TAB BUTTON ==============
  const [toggleState, setToggleState] = useState("semua");
  const gantiTab = (i) => {
    setToggleState(i);
  };
  return (
    <>
      {/* Galeri Foto */}
      <div className="galeri px-5 md:px-10 lg:px-20">
        <h1 className="p-5 md:p-10 text-xl text-center font-semibold text-[#094067] md:text-4xl">
          Galeri Foto
        </h1>
        <div className="kategori md:w-[50%] lg:w-[30%] grid grid-cols-4 justify-items-center text-sm font-medium capitalize mx-auto">
          <button
            className={
              toggleState === "semua"
                ? "bg-primer py-1 px-3 rounded-full  text-white"
                : "py-1 px-3 rounded-full  active:bg-primer active:text-white"
            }
            onClick={() => gantiTab("semua")}
          >
            Semua
          </button>
          <button
            className={
              toggleState === "rapat"
                ? "bg-primer py-1 px-3 rounded-full  text-white"
                : "py-1 px-3 rounded-full  active:bg-primer active:text-white"
            }
            onClick={() => gantiTab("rapat")}
          >
            Rapat
          </button>
          <button
            className={
              toggleState === "kegiatan"
                ? "bg-primer py-1 px-3 rounded-full  text-white"
                : "py-1 px-3 rounded-full  active:bg-primer active:text-white"
            }
            onClick={() => gantiTab("kegiatan")}
          >
            Kegiatan
          </button>

          <button
            className={
              toggleState === "KORPRI"
                ? "bg-primer py-1 px-3 rounded-full  text-white"
                : "py-1 px-3 rounded-full  active:bg-primer active:text-white"
            }
            onClick={() => gantiTab("KORPRI")}
          >
            KORPRI
          </button>
        </div>

        {/* Card Semua */}
        <div className={toggleState === "semua" ? "" : "hidden"}>
          <Card setPickOfGaleri={setPickOfGaleri} />
        </div>

        {/* Card Rapat */}
        <div className={toggleState === "rapat" ? "" : "hidden"}>
          <CardRapat setPickOfGaleri={setPickOfGaleri} />
        </div>

        {/* Card KORPRI */}
        <div className={toggleState === "KORPRI" ? "" : "hidden"}>
          <CardKORPRI setPickOfGaleri={setPickOfGaleri} />
        </div>

        {/* Card Kegiatan */}
        <div className={toggleState === "kegiatan" ? "" : "hidden"}>
          <CardKORPRI setPickOfGaleri={setPickOfGaleri} />
        </div>

        {/* Modal */}
        <ModalGaleri pickOfGaleri={pickOfGaleri} />
      </div>
      {/* End Galeri Foto */}

      {/* Galeri Video */}
      <div className="galeri px-5 md:px-10 lg:px-20">
        <h1 className="p-5 md:p-10 text-xl text-center font-semibold text-[#094067] md:text-4xl">
          Galeri Video
        </h1>
        <Video />
      </div>
      {/* End Galeri Video */}
    </>
  );
};

export default Galeri;
