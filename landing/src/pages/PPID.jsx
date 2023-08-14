import React, { useState } from "react";
import { Accordion } from "../components/PPID/Accordion";
import Fotopengertian from "../components/PPID/Fotopengertian";
import Gambarprosedur from "../components/PPID/Gambarprosedur";
import Profileppid from "../components/PPID/Profileppid";
import Prosedurpermohonaninformasi from "../components/PPID/Prosedurpermohonaninformasi";

const PPID = () => {
  return (
    <div>
      {/* ===================== FOTO DAN PENGERTIAN ===================== */}
      <div className="md:grid grid-cols-2 my-5">
        <Fotopengertian />
      </div>
      {/* ===================== PROFILE PPID ===================== */}
      <div className="grid bg-second text-white p-5 justify-items-center text-center">
        <Profileppid />
      </div>
      {/* ===================== PROSEDUR PERMOHONAN INFORMASI ===================== */}
      <div className="mt-5 p-5">
        <Prosedurpermohonaninformasi />
      </div>
      {/* ===================== GAMBAR PROSEDUR PERMOHONAN INFORMASI ===================== */}
      <div className="grid p-5 md:grid-cols-3">
        <Gambarprosedur />
      </div>
      {/* ===================== DAFTAR INFORMASI ===================== */}
      <div className="P-5">
        <h1 className="font-bold text-lg text-center md:text-xl">
          Daftar Informasi
        </h1>
        <Accordion />
      </div>
    </div>
  );
};

export default PPID;
