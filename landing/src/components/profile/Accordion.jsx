import React from "react";

export const Accordion = () => {
  return (
    <div section="accordion" className="bg-second flex flex-col gap-y-4 p-5">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm">Sejarah Bakorwil</div>
        <div className="collapse-content">
          <p className="text-sm">hello sejarah bakorwil</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm">Tujuan & Sasaran</div>
        <div className="collapse-content">
          <p className="text-sm">hello tujuan & sasaran</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm">Struktur Bakorwil</div>
        <div className="collapse-content">
          <p className="text-sm">hello struktur bakorwil</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm">Wilayah Kerja</div>
        <div className="collapse-content">
          <p className="text-sm">hello wilayah kerja</p>
        </div>
      </div>
    </div>
  );
};
