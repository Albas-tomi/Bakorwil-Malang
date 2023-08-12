import React from "react";

export const Accordion = () => {
  return (
    <div section="accordion" className="grid gap-y-4 p-5">
      {/* ================== INFORMASI BERKALA ================== */}
      <div className="collapse collapse-arrow bg-second text-white">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm font-bold flex items-center gap-2 md:text-lg">
          Informasi Berkala
        </div>
        <div className="collapse-content">
          <p className="text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            reiciendis asperiores unde odio incidunt deserunt quo est officia
            atque quod?
          </p>
        </div>
      </div>
      {/* ================== INFORMASI SERTA MERTA ================== */}
      <div className="collapse collapse-arrow bg-second text-white">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm font-bold flex items-center gap-2 md:text-lg">
          Informasi Serta Merta
        </div>
        <div className="collapse-content">
          <p className="text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            reiciendis asperiores unde odio incidunt deserunt quo est officia
            atque quod?
          </p>
        </div>
      </div>
      {/* ================== INFORMASI SETIAP SAAT ================== */}
      <div className="collapse collapse-arrow bg-second text-white">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm font-bold flex items-center gap-2 md:text-lg">
          Informasi Setiap Saat
        </div>
        <div className="collapse-content">
          <p className="text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            reiciendis asperiores unde odio incidunt deserunt quo est officia
            atque quod?
          </p>
        </div>
      </div>
    </div>
  );
};
