import React from "react";
import { FaDownload } from "react-icons/fa6";
import Dokumen from "../../Dokumen.json";

export const Modal = () => {
  const dataTeknis = Dokumen.filter(
    (dokumenTeknis) => dokumenTeknis.kategori == "RS"
  );
  const dataPpid = Dokumen.filter(
    (dokumenPpid) => dokumenPpid.kategori == "RK"
  );
  return (
    <>
      <dialog id="modal_dokumen_teknis" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">Unduh Buku Pedoman Teknis</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {dataTeknis.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm">
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>
      <dialog id="modal_dokumen_ppid" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">Unduh Dokumen PPID</h3>
          <h3 className="text-base mt-4">
            Laporan Layanan Informasi dan Dokumentasi
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {dataPpid.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm">
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
          <h3 className="text-base mt-4">Daftar Informasi Publik</h3>
          <div className="grid grid-cols-2 gap-2">
            {dataPpid.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm">
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
          <h3 className="text-base mt-4">
            Surat Keputusan Kepala Bakorwil III Jawa Timur
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {dataPpid.map((rs) => (
              <a
                key={rs.id}
                target="_blank"
                rel="noopener noreferrer"
                href={rs.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm">
                <span>
                  <FaDownload />
                </span>
                {rs.tahun}
              </a>
            ))}
          </div>
        </form>
      </dialog>
    </>
  );
};
