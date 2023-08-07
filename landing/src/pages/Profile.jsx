import React from "react";
import { Accordion } from "../components/profile/Accordion";

export const Profile = () => {
  return (
    <div id="profile">
      <div className="grid justify-items-center mb-5 px-5 md:grid-cols-2">
        <div className="text-center md:order-last">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="foto"
            className="w-40"
          />
          <h1 className="font-bold underline">Drs. Budi Santosa</h1>
          <p className="text-sm text-text">Kepala Bakorwil Malang</p>
        </div>
        <div className="mt-5 text-center md:self-center">
          <h1 className="font-bold text-primer">APA ITU BAKORWIL ? </h1>
          <p className="text-sm text-text">
            Bakorwil merupakan unsur penunjang kepala daerah, dipimpin oleh
            seorang kepala, yang berada di bawah dan bertanggung jawab kepada
            Gubernur melalui Sekretaris Daerah.
          </p>
        </div>
      </div>
      <Accordion />
    </div>
  );
};
