import React, { useState } from "react";

const Profileppid = () => {
  // ============== GANTI TAB BUTTON ==============
  const [toggleState, setToggleState] = useState(1);
  const gantiTab = (i) => {
    setToggleState(i);
  };

  return (
    <div>
      <p className="mb-4 font-bold mt-5 md:text-2xl">
        Profile PPID Pelaksana Bakorwil Malang
      </p>
      <div className="md:grid grid-cols-2 gap-4 items-center ">
        <div>
          <img
            src="https://bakorwilmalang.jatimprov.go.id/images/struktur_organisasi/3db4ad8555afee7d6e682d8dacd65590.png"
            alt=""
            className="mb-4"
          />
        </div>
        <div>
          <p className="md:text-lg md:text-start">
            Pejabat Pengelola Informasi dan Dokumentasi (PPID) menyediakan dan
            memberikan informasi melalui desk layanan informasi baik secara
            langsung maupun melalui media antara lain:
          </p>
          <ul className="list-disc ml-5 text-xs mb-4 md:text-base md:text-start">
            <li>Situs Web : bakorwilmalang.jatimprov.go.id</li>
            <li>Email : bakorwilmalang@jatimprov.go.id</li>
            <li>Telepon : (0341) 555366, Fax (0341) 551323</li>
            <li>
              Kantor : JL. Simpang Ijen No. 2 Oro-oro Dowo, Kecamatan Klojen,
              Kota Malang
            </li>
          </ul>
        </div>
      </div>
      {/* ===================== BUTTON TUGAS DAN FUNGSI PPID ===================== */}
      <div className="grid grid-cols-2 mb-4 gap-2 md:gap-12">
        <div>
          <button
            className={
              toggleState === 1
                ? "btn capitalize  border-2 border-white text-second"
                : "btn capitalize  border-2 bg-second border-white text-white"
            }
            onClick={() => gantiTab(1)}
          >
            Tugas PPID
          </button>
        </div>
        <div>
          <button
            className={
              toggleState === 2
                ? "btn capitalize  border-2 border-white text-second"
                : "btn capitalize  border-2 bg-second border-white text-white"
            }
            onClick={() => gantiTab(2)}
          >
            fungsi PPID
          </button>
        </div>
      </div>
      {/* ===================== TUGAS DAN FUNGSI PPID ===================== */}
      <div className="mb-4">
        <div className={toggleState === 1 ? "text-center" : "hidden"}>
          <h1 className="font-bold text-xl">Tugas PPID Pelaksana</h1>
          <p className="mt-3 text-xs md:text-base">
            Merencanakan, mengorganisasikan, melaksanakan, mengawasi dan
            mengevaluasi pelaksanaan kegiatan pengelolaan dan pelayanan
            informasi di lingkungan satuan kerja.
          </p>
        </div>
        <div className={toggleState === 2 ? "text-center" : "hidden"}>
          <h1 className="font-bold text-xl">Fungsi PPID Pelaksana</h1>
          <p className="mt-3 text-xs md:text-base">
            Merencanakan, mengorganisasikan, melaksanakan, mengawasi dan
            mengevaluasi pelaksanaan kegiatan pengelolaan dan pelayanan
            informasi di lingkungan satuan kerja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profileppid;
