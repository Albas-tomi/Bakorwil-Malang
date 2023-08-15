import React from 'react';

export const Accordion = () => {
  return (
    <div id="daftar" section="accordion" className="grid gap-y-4 p-5">
      {/* ================== INFORMASI BERKALA ================== */}
      <div className="collapse collapse-arrow bg-second text-white">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-base font-bold flex items-center gap-2 md:text-lg">Informasi Berkala</div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table table-xs md:table-md text-sm md:text-base">
              {/* head */}
              <tbody>
                {/* row A */}
                <tr className="font-bold">
                  <th>A</th>
                  <td>Informasi tentang profile Badan Publik :</td>
                </tr>
                <tr>
                  <th>1.</th>
                  <td>Informasi tentang kedudukan, domisili dan alamat lengkap</td>
                  <td>
                    <a
                      href="	
https://bakorwilmalang.jatimprov.go.id/tentang-kami-sejarah.html"
                    >
                      Tentang Kami
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>2.</th>
                  <td>Struktur organisasi, gambaran umum dan profil singkat pejabat</td>
                  <td>
                    <a
                      href="	
https://bakorwilmalang.jatimprov.go.id/tentang-kami-struktur-organisasi.html"
                    >
                      Struktur Organisasi
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>3. </th>
                  <td>Visi Misi</td>
                  <td>
                    <a href="">Visi Misi</a>
                  </td>
                </tr>
                <tr>
                  <th>4. </th>
                  <td>Tugas Pokok dan Fungsi</td>
                  <td>
                    <a href="">Tugas Fungsi Pemprov Jawa Timur</a>
                  </td>
                </tr>
                <tr>
                  <th>5. </th>
                  <td>Laporan harta kekayaan bagi pejabatNegara yang telah diperiksa, diverifikasi dan telah dikirimkan oleh Komisi Pemberatasan Korupsi ke Badan Publik untuk diumumkan</td>
                  <td>
                    <a href="">Wajib Lapor LHKPN Pemprov. Jatim</a>
                  </td>
                </tr>
                {/* row B */}
                <tr className="font-bold">
                  <th>B</th>
                  <td>Ringkasan informasi tentang program dan/atau kegiatan yang sedang dijalankan dalam lingkup Badan Publik, yang meliputi :</td>
                </tr>
                {/* row C */}
                <tr className="font-bold">
                  <th>C</th>
                  <td>Ringkasan informasi tentang kinerja Badan Publik berupa narasi tentang realisasi kegiatan yang telah maupun sedang dijalankan beserta capaiannya</td>
                </tr>
                {/* row D */}
                <tr className="font-bold">
                  <th>D</th>
                  <td>Ringkasan laporan keuangan, yang meliputi :</td>
                </tr>
                {/* row E */}
                <tr className="font-bold">
                  <th>E</th>
                  <td>Ringkasan laporan akses Informasi Publik</td>
                </tr>
                {/* row F */}
                <tr className="font-bold">
                  <th>F</th>
                  <td>Informasi tentang peraturan, keputusan, dan/atau kebijakan yang mengikat dan/atau berdampak bagi publik yang dikeluarkan oleh Badan Publik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ================== INFORMASI SERTA MERTA ================== */}
      <div className="collapse collapse-arrow bg-second text-white">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-base font-bold flex items-center gap-2 md:text-lg">Informasi Serta Merta</div>
        <div className="collapse-content">
          <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis asperiores unde odio incidunt deserunt quo est officia atque quod?</p>
        </div>
      </div>
      {/* ================== INFORMASI SETIAP SAAT ================== */}
      <div className="collapse collapse-arrow bg-second text-white">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-base font-bold flex items-center gap-2 md:text-lg">Informasi Setiap Saat</div>
        <div className="collapse-content">
          <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis asperiores unde odio incidunt deserunt quo est officia atque quod?</p>
        </div>
      </div>
    </div>
  );
};
