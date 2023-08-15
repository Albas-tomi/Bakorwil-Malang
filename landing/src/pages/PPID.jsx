import React, { useState } from 'react';
import { Accordion } from '../components/PPID/Accordion';
import Fotopengertian from '../components/PPID/Fotopengertian';
import Gambarprosedur from '../components/PPID/Gambarprosedur';
import Profileppid from '../components/PPID/Profileppid';
import Prosedurpermohonaninformasi from '../components/PPID/Prosedurpermohonaninformasi';

const PPID = () => {
  return (
    <>
      {/* ===================== FOTO DAN PENGERTIAN ===================== */}
      <div className="md:grid grid-cols-2 my-16 px-5 md:px-10 lg:px-20">
        <Fotopengertian />
      </div>
      {/* ===================== PROFILE PPID ===================== */}
      <div className="grid bg-second text-white p-5 md:px-10 lg:px-20 justify-items-center text-center">
        <Profileppid />
      </div>
      {/* ===================== PROSEDUR PERMOHONAN INFORMASI ===================== */}
      <div className="mt-5 p-5 md:px-10 lg:px-20">
        <Prosedurpermohonaninformasi />
      </div>
      {/* ===================== GAMBAR PROSEDUR PERMOHONAN INFORMASI ===================== */}
      <div className="grid p-5 md:px-10 lg:px-20 md:grid-cols-3">
        <Gambarprosedur />
      </div>
      {/* ===================== DAFTAR INFORMASI ===================== */}
      <div className="p-5 mt-5 mb-5 md:px-10 lg:px-20">
        <h1 className="font-bold text-center text-xl lg:text-2xl text-second">Daftar Informasi</h1>
        <Accordion />
      </div>
    </>
  );
};

export default PPID;
