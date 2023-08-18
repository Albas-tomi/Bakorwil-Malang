import React from "react";
import { FaFile } from "react-icons/fa6";

const Button = () => {
  return (
    <>
      {/* ==================== RENCANA STRATEGIS ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.rencana_strategis.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Rencana Strategis
      </a>
      {/* ==================== RENCANA KERJA ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.rencana_kerja.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Rencana Kerja
      </a>
      {/* ==================== RENCANA AKSI ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.rencana_aksi.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Rencana Aksi
      </a>
      {/* ==================== INDIKATOR KINERJA UTAMA ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.iku.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Indikator Kinerja Utama
      </a>
      {/* ==================== POHON KINERJA ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.pohon_kinerja.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Pohon Kinerja
      </a>
      {/* ==================== PERJANJIAN KINERJA ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.perjanjian_kinerja.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Perjanjian Kinerja
      </a>
      {/* ==================== LAPORAN KINERJA ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.laporan_kinerja.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Laporan Kinerja
      </a>
      {/* ==================== EVALUASI INTERNAL ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.evaluasi_internal.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Evaluasi Internal
      </a>
      {/* ==================== PENGUKURAN KINERJA ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.pengukuran_kinerja.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Pengukuran Kinerja
      </a>
      {/* ==================== REFORMASI BIROKRASI ==================== */}
      <a
        href="#"
        rel="noopener noreferrer"
        className="btn hover:bg-birumuda bg-second text-white text-xs font-extralight rounded-md w-56"
        onClick={() => window.reformasi_birokrasi.showModal()}
      >
        <span>
          <FaFile />
        </span>
        Reformasi Birokrasi
      </a>
    </>
  );
};

export default Button;
