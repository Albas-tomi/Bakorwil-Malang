import React, { useState } from 'react';

const Profileppid = () => {
  // ============== GANTI TAB BUTTON ==============
  const [toggleState, setToggleState] = useState(1);
  const gantiTab = (i) => {
    setToggleState(i);
  };

  return (
    <div>
      <p id="profil" className="mb-7 font-bold mt-5 text-xl lg:text-2xl">
        Profile PPID Pelaksana Bakorwil Malang
      </p>
      <div className="md:grid grid-cols-2 gap-4 items-center lg:mb-8">
        <div>
          <img src="https://bakorwilmalang.jatimprov.go.id/images/struktur_organisasi/3db4ad8555afee7d6e682d8dacd65590.png" alt="" className="mb-5" />
        </div>
        <div className="text-sm">
          <p className="md:text-lg md:text-start text-justify">Pejabat Pengelola Informasi dan Dokumentasi (PPID) menyediakan dan memberikan informasi melalui desk layanan informasi baik secara langsung maupun melalui media antara lain:</p>
          <ul className="list-disc ml-5 mb-8 md:text-base md:text-start text-justify">
            <li>Situs Web : bakorwilmalang.jatimprov.go.id</li>
            <li>Email : bakorwilmalang@jatimprov.go.id</li>
            <li>Telepon : (0341) 555366, Fax (0341) 551323</li>
            <li>Kantor : JL. Simpang Ijen No. 2 Oro-oro Dowo, Kecamatan Klojen, Kota Malang</li>
          </ul>
        </div>
      </div>
      {/* ===================== BUTTON TUGAS DAN FUNGSI PPID ===================== */}
      <div className="grid grid-cols-2 mb-8 lg:mb-12 gap-2 w-full md:w-[40%] lg:w-[30%] mx-auto">
        <div>
          <button className={toggleState === 1 ? 'btn capitalize  border-2 border-white text-second' : 'btn capitalize  border-2 bg-second border-white text-white'} onClick={() => gantiTab(1)}>
            Tugas PPID
          </button>
        </div>
        <div>
          <button className={toggleState === 2 ? 'btn capitalize  border-2 border-white text-second' : 'btn capitalize  border-2 bg-second border-white text-white'} onClick={() => gantiTab(2)}>
            fungsi PPID
          </button>
        </div>
      </div>
      {/* ===================== TUGAS DAN FUNGSI PPID ===================== */}
      <div className="mb-4">
        <div className={toggleState === 1 ? 'text-center' : 'hidden'}>
          <h1 className="font-bold text-xl lg:text-2xl ">Tugas PPID Pelaksana</h1>
          <p className="mt-3 text-sm md:text-lg">Merencanakan, mengorganisasikan, melaksanakan, mengawasi dan mengevaluasi pelaksanaan kegiatan pengelolaan dan pelayanan informasi di lingkungan satuan kerja.</p>
        </div>
        <div className={toggleState === 2 ? 'text-center' : 'hidden'}>
          <h1 className="font-bold text-xl lg:text-2xl ">Fungsi PPID Pelaksana</h1>
          <ul className="list-decimal text-sm mt-3 text-start px-5 md:text-lg">
            <li>Mengelola dan melayani Informasi publik serta dokumentasi di satuan kerjanya.</li>
            <li>Pengolahan, penataan, data penyimpanan dan/atau informasi publik yang diperoleh di satuan kerjanya.</li>
            <li>Penyeleksian dan pengujian data dan informasi publik yang termasuk kategori dikecualikan dari informasi yang dibuka untuk publik yang ditetapkan oleh pejabat yang berwenang.</li>
            <li>Pengujian aksesibilitas atas suatu informasi publik.</li>
            <li>Penyelesaian sengketa pelayanan informasi.</li>
            <li>Pelaksanaan koordinasi antar bidang dalam pengelolaan dan pelayanan informasi publik serta dokumentasi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profileppid;
