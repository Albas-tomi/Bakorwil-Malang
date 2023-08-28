import React from "react";
import { FaDownload } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import { getDataDokumen } from "../../getDataApi";

const Modal = () => {
  const [dataDokumen, setDataDokumen] = useState([]);

  useEffect(() => {
    getDataDokumen().then((data) => {
      setDataDokumen(data);
    });
  }, []);

  const dokRencanaStrategis = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Rencana Strategis"
  );
  const dokRencanaAksi = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Rencana Aksi"
  );
  const dokRencanaKerja = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Rencana Kerja"
  );
  const dokIndikatorKinerjaUtama = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Indikator Kinerja Utama"
  );
  const dokPohonKinerja = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Pohon Kinerja"
  );
  const dokLaporanKinerja = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Laporan Kinerja"
  );
  const dokEvaluasiInternal = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Evaluasi Internal"
  );
  const dokPerjanjianKinerja = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Perjanjian Kinerja"
  );
  const dokPengukuranKinerja = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Pengukuran Kinerja"
  );
  const dokReformasiBirokrasi = dataDokumen.filter(
    (dokumen) => dokumen.kategori === "Reformasi Birokrasi"
  );

  return (
    <div>
      {/* ===================== RENCANA STRATEGIS ===================== */}
      <dialog id="rencana_strategis" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">
            Unduh Document Rencana Strategis
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokRencanaStrategis.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>

      {/* ===================== RENCANA KERJA ===================== */}
      <dialog id="rencana_kerja" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">Unduh Document Rencana Kerja</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokRencanaKerja.map((rk) => (
              <a
                key={rk.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rk.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rk.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>

      {/* ===================== RENCANA AKSI ===================== */}
      <dialog id="rencana_aksi" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">Unduh Document Rencana Aksi</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokRencanaAksi.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>

      {/* ===================== INDIKATOR KINERJA UTAMA ===================== */}
      <dialog id="iku" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">
            Unduh Document Indikator Kinerja Utama
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokIndikatorKinerjaUtama.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>

      {/* ===================== POHON KINERJA ===================== */}
      <dialog id="pohon_kinerja" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">Unduh Documen Pohon Kinerja</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokPohonKinerja.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>

      {/* ===================== PERJANJIAN KINERJA ===================== */}
      <dialog id="perjanjian_kinerja" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">
            Unduh Documen perjanjian Kinerja
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokPerjanjianKinerja.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>

      {/* ===================== LAPORAN KINERJA ===================== */}
      <dialog id="laporan_kinerja" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">Unduh Documen Laporan Kinerja</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokLaporanKinerja.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>

      {/* ===================== EVALUASI INTERNAL ===================== */}
      <dialog id="evaluasi_internal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">
            Unduh Documen Evaluasi Internal
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokEvaluasiInternal.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>

      {/* ===================== PENGUKURAN KINERJA ===================== */}
      <dialog id="pengukuran_kinerja" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">
            Unduh Documen Pengukuran Kinerja
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokPengukuranKinerja.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>

      {/* ===================== REFORMASI BIROKRASI ===================== */}
      <dialog id="reformasi_birokrasi" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">
            Unduh Documen Reformasi Birokrasi
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dokReformasiBirokrasi.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
