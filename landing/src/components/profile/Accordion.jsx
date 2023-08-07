import React from "react";
import {
  FaAddressCard,
  FaFeather,
  FaFileSignature,
  FaMapMarked,
} from "react-icons/fa";

export const Accordion = () => {
  return (
    <div section="accordion" className="bg-second flex flex-col gap-y-4 p-5">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm font-bold text-second flex items-center gap-2">
          <span>
            <FaFeather />
          </span>
          Sejarah Bakorwil
        </div>
        <div className="collapse-content">
          <p className="text-sm">hello sejarah bakorwil</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm font-bold text-second flex items-center gap-2">
          <span>
            <FaFileSignature />
          </span>
          Tujuan & Sasaran
        </div>
        <div className="collapse-content">
          <p className="text-sm">hello tujuan & sasaran</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm font-bold text-second flex items-center gap-2">
          <span>
            <FaAddressCard />
          </span>
          Struktur Bakorwil
        </div>
        <div className="collapse-content">
          <p className="text-sm">hello sejarah bakorwil</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-sm font-bold text-second flex items-center gap-2">
          <span>
            <FaMapMarked />
          </span>
          Sejarah Bakorwil
        </div>
        <div className="collapse-content">
          <p className="text-sm">hello sejarah bakorwil</p>
        </div>
      </div>
    </div>
  );
};
