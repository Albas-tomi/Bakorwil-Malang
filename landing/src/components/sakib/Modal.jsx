import { data } from "autoprefixer";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import Dokumen from "../../Dokumen.json";

const Modal = () => {
  const dataRS = Dokumen.filter((kategori) => kategori.kategori === "RS");
  const dataRK = Dokumen.filter((kategori) => kategori.kategori === "RS");
  const dataRA = Dokumen.filter((kategori) => kategori.kategori === "RS");

  console;
  return (
    <div>
      {/* ===================== RENCANA STRATEGIS ===================== */}
      <dialog id="rencana_strategis" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-sm">
            Unduh Document Rencana Strategis
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {dataRS.map((rs) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second text-white font-thin text-xs"
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
          <h3 className="font-bold text-sm">Unduh Document Rencana Kerja</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="btn bg-second text-white font-thin text-xs">
              <span>
                <FaDownload />
              </span>
              2012
            </div>
          </div>
        </form>
      </dialog>

      {/* ===================== RENCANA AKSI ===================== */}
      <dialog id="rencana_aksi" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-sm">Unduh Document Rencana Aksi</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="btn bg-second text-white font-thin text-xs">
              <span>
                <FaDownload />
              </span>
              2012
            </div>
          </div>
        </form>
      </dialog>

      {/* ===================== INDIKATOR KINERJA UTAMA ===================== */}
      <dialog id="iku" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-sm">
            Unduh Document Indikator Kinerja Utama
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="btn bg-second text-white font-thin text-xs">
              <span>
                <FaDownload />
              </span>
              2012
            </div>
          </div>
        </form>
      </dialog>

      {/* ===================== POHON KINERJA ===================== */}
      <dialog id="pohon_kinerja" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-sm">Unduh Documen Pohon Kinerja</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="btn bg-second text-white font-thin text-xs">
              <span>
                <FaDownload />
              </span>
              2012
            </div>
          </div>
        </form>
      </dialog>

      {/* ===================== PERJANJIAN KINERJA ===================== */}
      <dialog id="perjanjian_kinerja" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-sm">
            Unduh Documen perjanjian Kinerja
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="btn bg-second text-white font-thin text-xs">
              <span>
                <FaDownload />
              </span>
              2012
            </div>
          </div>
        </form>
      </dialog>

      {/* ===================== LAPORAN KINERJA ===================== */}
      <dialog id="laporan_kinerja" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-sm">Unduh Documen Laporan Kinerja</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="btn bg-second text-white font-thin text-xs">
              <span>
                <FaDownload />
              </span>
              2012
            </div>
          </div>
        </form>
      </dialog>

      {/* ===================== EVALUASI INTERNAL ===================== */}
      <dialog id="evaluasi_internal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-sm">Unduh Documen Evaluasi Internal</h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="btn bg-second text-white font-thin text-xs">
              <span>
                <FaDownload />
              </span>
              2012
            </div>
          </div>
        </form>
      </dialog>

      {/* ===================== PENGUKURAN KINERJA ===================== */}
      <dialog id="pengukuran_kinerja" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-sm">
            Unduh Documen Pengukuran Kinerja
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="btn bg-second text-white font-thin text-xs">
              <span>
                <FaDownload />
              </span>
              2012
            </div>
          </div>
        </form>
      </dialog>

      {/* ===================== REFORMASI BIROKRASI ===================== */}
      <dialog id="reformasi_birokrasi" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-sm">
            Unduh Documen Reformasi Birokrasi
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="btn bg-second text-white font-thin text-xs">
              <span>
                <FaDownload />
              </span>
              2012
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
