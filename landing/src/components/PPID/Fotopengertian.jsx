import React from "react";
import { FaClipboardList, FaSuitcase, FaUser } from "react-icons/fa6";
import FotoPPID from "../../assets/image/foto_ppid.jpg";

const Fotopengertian = () => {
  return (
    <>
      {/* ===================== FOTO ===================== */}
      <div className="grid justify-center mt-3">
        <img
          src={FotoPPID}
          alt=""
          className="rounded-full object-cover w-64 h-64 md:w-72 lg:w-96 md:h-72 lg:h-96 shadow-xl border-8 border-white"
        />
      </div>
      {/* ===================== JUDUL DAN PENGERTIAN ===================== */}
      <div className="md:grid justify-items-start">
        <div>
          <h1 className="font-bold text-primer text-2xl lg:text-3xl tracking-widest text-center md:text-start mt-7">
            Apa Pengertian PPID ?
          </h1>
          <p className="text-sm text-text mt-5 lg:mt-7 md:text-md lg:text-lg text-justify leading-relaxed">
            Pejabat Pengelola Informasi dan Dokumentasi (PPID) adalah pejabat
            yang bertanggung jawab di bidang penyimpanan, pendokumentasian,
            penyediaan, dan/atau pelayanan informasi di badan publik.
          </p>
        </div>

        {/* ===================== BUTTON ===================== */}
        <div className="mt-10 flex gap-2 justify-center md:gap-10">
          <a
            href="#profil"
            id="profil"
            className="btn bg-white shadow-lg md:w-40 lg:text-base"
          >
            <div>
              <span className="text-second">
                <FaUser className="text-xl lg:text-2xl" />
              </span>
            </div>
            <div className="text-start">
              <p className="capitalize">profile</p>
              <p className="text-xs font-extralight">PPID</p>
            </div>
            <br />
          </a>
          <a
            href="#layanan"
            id="layanan"
            className="btn bg-white shadow-lg md:w-40 lg:text-base"
          >
            <div>
              <span className="text-second">
                <FaSuitcase className="text-xl lg:text-2xl" />
              </span>
            </div>
            <div className="text-start">
              <p className="capitalize">layanan</p>
              <p className="text-xs capitalize font-extralight">Informasi</p>
            </div>
          </a>
          <a
            href="#daftar"
            id="daftar"
            className="btn bg-white shadow-lg md:w-40 lg:text-base"
          >
            <div>
              <span className="text-second">
                <FaClipboardList className="text-xl lg:text-2xl" />
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
