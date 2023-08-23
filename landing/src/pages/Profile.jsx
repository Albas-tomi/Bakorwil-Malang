import React from "react";
import { Accordion } from "../components/profile/Accordion";

import FotoKaban from "../assets/image/kaban.png";
import { useEffect } from "react";
import { useState } from "react";
import { getDataPejabat } from "../getDataApi";

const Profile = () => {
  //   ====================Get Data ===================
  const [dataPejabat, setDataPejabat] = useState([]);
  useEffect(() => {
    getDataPejabat().then((data) => {
      setDataPejabat(data);
    });
  }, []);
  return (
    <div id="profile">
      <div className="mt-5 grid justify-items-center mb-5 px-5 pb-5 md:px-10 lg:px-20 md:grid-cols-2 gap-4">
        {/* ================= FOTO KEPALA BADAN BAKORWIL ================= */}
        <div className="text-center md:order-last relative w-full">
          <div className="h-56 w-56 md:h-80 md:w-80 rounded-full bg-primer mx-auto mt-8 md:mt-16 drop-shadow-lg"></div>
          <img
            src={FotoKaban}
            alt="foto"
            className="w-48 md:w-72 absolute top-[-6px] right-24 md:right-10 lg:right-44 drop-shadow-xl"
          />
          <h1 className="font-bold underline mt-3">Drs. Budi Santosa</h1>
          <p className="text-xs text-text md:text-sm">Kepala Bakorwil Malang</p>
        </div>
        {/* ================= APA ITU BAKORWIL ? ================= */}
        <div className="mt-7 text-center md:text-left self-center">
          <h1 className="font-bold text-primer text-2xl lg:text-3xl tracking-widest">
            APA ITU BAKORWIL ?{" "}
          </h1>
          <p className="text-sm text-text mt-3 lg:mt-7 md:text-md lg:text-lg text-justify leading-relaxed">
            Bakorwil merupakan unsur penunjang kepala daerah, dipimpin oleh
            seorang kepala, yang berada di bawah dan bertanggung jawab kepada
            Gubernur melalui Sekretaris Daerah.
          </p>
        </div>
      </div>
      <Accordion dataPejabat={dataPejabat} />
    </div>
  );
};

export default Profile;
