import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa6";
import Dokumen from "../../Dokumen.json";
import { useState } from "react";
import { getDataDaftarInformasiPPID } from "../../getDataApi.js";

export const Modal = () => {
  const [dataDokumenPPID, setDataDokumenPPID] = useState([]);

  useEffect(() => {
    getDataDaftarInformasiPPID().then((data) => {
      setDataDokumenPPID(data);
    });
  }, []);

  const laporanLayanan = dataDokumenPPID.filter(
    (dokumenTeknis) =>
      dokumenTeknis.kategori == "Laporan Layanan Informasi dan Dokumentasi"
  );
  const informasiPublik = dataDokumenPPID.filter(
    (informasi) => informasi.kategori == "Daftar Informasi Publik"
  );
  const suratKeputusan = dataDokumenPPID.filter(
    (sk) => sk.kategori == "Surat Keputusan Kepala Bakorwil III Jawa Timur"
  );
  const pedomanTeknis = dataDokumenPPID.filter(
    (pedoman) => pedoman.kategori == "Buku Pedoman Teknis"
  );
  return (
    <>
      {/* Pedoman Teknis */}
      <dialog id="modal_dokumen_teknis" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base">Unduh Buku Pedoman Teknis</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {pedomanTeknis.map((pedoman) => (
              <a
                key={pedoman.id}
                target="_blank"
                rel="noopener noreferrer"
                href={pedoman.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: pedoman.deskripsi,
                  }}
                />{" "}
              </a>
            ))}
          </div>
        </form>
      </dialog>
      {/* Pedoman Teknis */}

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
            {laporanLayanan.map((lP) => (
              <a
                key={lP.id}
                target="_blank"
                rel="noopener noreferrer"
                href={lP.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: lP.deskripsi,
                  }}
                />
              </a>
            ))}
          </div>
          <h3 className="text-base mt-4">Daftar Informasi Publik</h3>
          <div className="grid grid-cols-2 gap-2">
            {informasiPublik.map((iP) => (
              <a
                key={iP.id}
                target="_blank"
                rel="noopener noreferrer"
                href={iP.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: iP.deskripsi,
                  }}
                />{" "}
              </a>
            ))}
          </div>
          <h3 className="text-base mt-4">
            Surat Keputusan Kepala Bakorwil III Jawa Timur
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {suratKeputusan.map((sk) => (
              <a
                key={sk.id}
                target="_blank"
                rel="noopener noreferrer"
                href={sk.link}
                className="btn bg-second hover:bg-birumuda text-white font-thin text-sm"
              >
                <span>
                  <FaDownload />
                </span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sk.deskripsi,
                  }}
                />{" "}
              </a>
            ))}
          </div>
        </form>
      </dialog>
    </>
  );
};
