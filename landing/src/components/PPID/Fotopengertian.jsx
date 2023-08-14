import React from "react";
import { FaClipboardList, FaSuitcase, FaUser } from "react-icons/fa6";

const Fotopengertian = () => {
  return (
    <>
      {/* ===================== FOTO ===================== */}
      <div className="grid justify-center mt-3">
        <img
          src="https://i.pinimg.com/736x/45/b3/16/45b31658d8beb88ae4db99a0a4efc4ae.jpg"
          alt=""
          className="rounded-full w-52 h-52 shadow-2xl border-4 border-white md:w-60 md:h-60"
        />
      </div>
      {/* ===================== JUDUL DAN PENGERTIAN ===================== */}
      <div className="md:grid justify-items-start">
        <div>
          <h1 className="mt-3 text-center text-lg font-bold text-primer md:text-2xl">
            Apa Pengertian PPID ?
          </h1>
        </div>
        <div>
          <p className="mt-1 text-center text-xs md:text-start md:text-lg">
            Pejabat Pengelola Informasi dan Dokumentasi (PPID) adalah pejabat
            yang bertanggung jawab di bidang penyimpanan, pendokumentasian,
            penyediaan, dan/atau pelayanan informasi di badan publik.
          </p>
        </div>
        {/* ===================== BUTTON ===================== */}
        <div className="mt-3 mb-7 flex gap-2 justify-center md:gap-10">
          <a href="" id="profil" className="btn bg-white shadow-lg md:w-40">
            <div>
              <span className="text-second">
                <FaUser />
              </span>
            </div>
            <div className="text-start">
              <p className="capitalize">profile</p>
              <p className="text-xs font-extralight">PPID</p>
            </div>
            <br />
          </a>
          <a href="" id="layanan" className="btn bg-white shadow-lg md:w-40">
            <div>
              <span className="text-second">
                <FaSuitcase />
              </span>
            </div>
            <div className="text-start">
              <p className="capitalize">layanan</p>
              <p className="text-xs capitalize font-extralight">Informasi</p>
            </div>
          </a>
          <a href="" id="daftar" className="btn bg-white shadow-lg md:w-40">
            <div>
              <span className="text-second">
                <FaClipboardList />
              </span>
            </div>
            <div className="text-start">
              <p className="capitalize">Daftar</p>
              <p className="text-xs capitalize font-extralight">Informasi</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Fotopengertian;
