import React from "react";

const Berita = () => {
  return (
    <div className="h-screen bg-blue-300">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>
            Lembaga Koordinasi Wilayah di Indonesia memiliki sejarah
            perkembangan yang cukup panjang, masih menjadi daerah jajahan
            Belanda dengan nama Hindia Belanda, system pemerintahan bersifat
            sentralitistis, urusan-urusan Pemerintahan Pusat maupun urusan
            Pemrintahan Daerah sampai sekecil-kecilnya diselenggarakan oleh
            Pemerintahan Pusat, yaitu terpusat ditangan Governeur Genaral.
            Berdasarkan Undang-Undang Pemerintahan Hindia Belanda, yang lebih
            dikenal Regerings Reglement (RR) yang dimuat dalam Stactsblad tahun
            1854 yang diberlakukan tanggal 1 Mei 1855, maka Hindia Belanda
            dibagi atas daerah adminstratif :
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Berita;
