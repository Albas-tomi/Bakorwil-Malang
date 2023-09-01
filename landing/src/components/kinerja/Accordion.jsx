import React from 'react';

const Accordion = () => {
  return (
    <div section="accordion" className="flex flex-col gap-y-4 p-5 md:px-10 lg:px-20 my-7">
      {/* ================== SEKERTARIAT ================== */}
      <div className="collapse collapse-arrow bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-sm font-bold text-second flex items-center gap-2 md:text-lg">Sekertariat</div>
        <div className="collapse-content">
          <ul className="list-decimal ml-5 mb-8 text-sm md:text-base">
            <li>Rapat koordinasi, fasilitasi, dan menyinergikan tugas dan fungsi Bakorwil III Malang dengan unit pelakasana teknis dan cabang Dinas Pendidikan di seluruh wilayah kerja Bakowril III Malang tahun 2023.</li>
            <li>Sinkronisasi, monitoring, dan evaluasi keterisian data dalam Sistem Informasi Pemerentihan Daerah (SIPD) di seluruh Kabupaten dan Kota se-wilayah kerja Bakowril III Malang tahun 2023.</li>
          </ul>
        </div>
      </div>
      {/* ================== BIDANG PEMERINTAHAN ================== */}
      <div className="collapse collapse-arrow bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-sm font-bold text-second flex items-center gap-2 md:text-lg">Bidang Pemerintahan</div>
        <div className="collapse-content">
          <ul className="list-decimal ml-5 mb-8 text-sm md:text-base md:text-start text-justify">
            <li>
              Kegiatan koordinasi. fasilitasi, monitoring dan evaluasi kerja sama Blitar Raya, Pemerintah Kabupaten Malang dan Pemerintah Kabupaten Tulungagung dalam rangka mendukung Peraturan Presiden No. 80 Tahun 2019 tentang Proyek
              Selingkar Wilis dan Jalan Lintas Selatan (JLS).
            </li>
            <li>
              Rekomendasi Inisiasi percepatan pelaksanaan kesepakatan bersama pembangunan Bromo Tengger Semeru meliputi Pemerintah Provinsi Jawa Timur, Pemerintah Kota Batu, Pemerintah Kabupaten dan Kota Malang, Pemerintah Kabupaten dan
              Kota Pasuruan, Pemerintah Kabupaten dan Kota Probolinggo dan Kabupaten Lumajang.
            </li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi kebencanaan daerah hulu dan hilir seputar Daerah Aliran Sungai (DAS) Brantas di Malang Raya.</li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi pembinaan kearsipan mendukung pertanggungjawaban pengelolaan dana desa dalam penanganan COVID-19.</li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi kesiapsiagaan menghadapi bencana hidrometeorologi (banjir, tanah longsor, dIl.) sewilayah kerja Bakorwil III Malang.</li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi sistem kependudukan yang terintegrasi dengan Satu Data Jawa Timur untuk seluruh masyarakat sewilayah kerja Bakorwil III Malang</li>
          </ul>
        </div>
      </div>
      {/* ================== BIDANG PEMBANGUNAN EKONOMI ================== */}
      <div className="collapse collapse-arrow bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-sm font-bold text-second flex items-center gap-2 md:text-lg">Bidang Pembangunan Ekonomi</div>
        <div className="collapse-content">
          <ul className="list-decimal ml-5 mb-8 text-sm md:text-base md:text-start text-justify">
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi inisiasi Memorandum of Understanding (MoU) kerja sama Malang Raya.</li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi kerjasama pembangunan pariwisata dan ekonomi kreatif Malang Raya.</li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi kerja sama platform digital sebagai media promosi karya talenta Millenial Job Center (MJC) Bakorwil III Malang.</li>
            <li>
              Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi proses sinkonisasi data pengembangan Website Geographic Information System (Web-GIS) Sistem Informasi Pembangunan Ekonomi (SIBANGEKO) di wilayah keria Bakorwil III ang.
            </li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi penggalian potensi ekonomi baru di masa pandemi COVID-19.</li>
            <li>
              Kegiatan koordinasi. fasilitasi. monitoring dan evaluasi pembinaan dan penguatan Himpunan Petani Pemakai Air (HIPPA) dan Gabungan Himpunan Petani Pemakai Air (GHIPPA) untuk kesejahteraan petani sewilayah keria Bakorwil III
              Malang
            </li>
          </ul>
        </div>
      </div>
      {/* ================== BIDANG KEMASYARAKATAN ================== */}
      <div className="collapse collapse-arrow bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-sm font-bold text-second flex items-center gap-2 md:text-lg">Bidang Kemasyarakatan</div>
        <div className="collapse-content">
          <ul className="list-decimal ml-5 mb-8 text-sm md:text-base md:text-start text-justify">
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi efektivitas pembelajaran tatap muka bagi siswa sekolah sewilyah kerja Bakorwil III Malang</li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi permasalahan tenaga kerja sewilayah kerja Bakorwil III Malang.</li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi Kesejahteraan Sosial Anak dan Pemenuhan Hak Anak seta Perlindungan Khusus Anak menuju Provinsi Jawa Timur sebagai Provinsi Layak Anak (Provila) Tahun 2023.</li>
            <li>Kegiatan koordinasi. fasilitasi, monitoring dan evaluasi Pembangunan Jaring Komunikasi dan Komunikasi antar OPD Ierkait Dalam Pelaksanaan Millenial Job Center.</li>
            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi optimalisasi vaksinasi COVID-19 untuk target Kekebalan Kelompok/Hera Immunity.</li>
            <li>
              Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi akselerasi implementasi Peraturan Gubernur No. 36 Tahun 2021 tentang Pelaksanaan Jaminan Sosial Tenaga Kerja Melalui BPJS Ketenagakerjaan Provinsi Jawa Timur di Kota
              Surabaya, Kota Batu. Kota dan Kabupaten Blitar serta Kota dan Kabupaten Pasuruan
            </li>
          </ul>
        </div>
      </div>
      {/* ================== BIDANG SARANA DAN PRASARANA ================== */}
      <div className="collapse collapse-arrow bg-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-sm font-bold text-second flex items-center gap-2 md:text-lg">Bidang Sarana dan Prasarana</div>
        <div className="collapse-content">
          <ul className="list-decimal ml-5 mb-8 text-sm md:text-base md:text-start text-justify">
            <li>Kegiatan koordinasi, fasilitasi. monitoring dan evaluasi inisiasi perjanjian kerja sama pengelolaan lingkungan hidup Malang Raya.</li>

            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi Tempat Pembuangan Akhir (TPA) Sampah Regional.</li>

            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi permasalahan pengelolaan sampah di kawasan Sungai Welang Kabupaten Pasuruan.</li>

            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi laporan progres pembangunan Jalan, Lintas Selatan (JLS) di wilayah Kabupaten Blitar.</li>

            <li>Kegiatan koordinasi. fasilitasi, monitoring dan evaluasi laporan progres pembangunan Jalan Lints Selatan (JLS) di wilayah Kabupaten Malang.</li>

            <li>Kegiatan koordinasi, fasilitasi, monitoring dan evaluasi laporan progres pembangunan Jalan Lintas Selatan (JLS) di wilayah Kabupaten Blitar jilid 2.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
