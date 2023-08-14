import React from "react";
import { Accordion } from "../components/profile/Accordion";

const Profile = () => {
  return (
    <div id="profile">
      <div className="mt-5 grid justify-items-center mb-5 px-5 md:grid-cols-2">
        {/* ================= FOTO KEPALA BADAN BAKORWIL ================= */}
        <div className="text-center md:order-last">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="foto"
            className="w-40 md:w-72"
          />
          <h1 className="font-bold underline">Drs. Budi Santosa</h1>
          <p className="text-xs text-text md:text-sm">Kepala Bakorwil Malang</p>
        </div>
        {/* ================= APA ITU BAKORWIL ? ================= */}
        <div className="mt-5 text-center md:text-left self-center">
          <h1 className="font-bold text-primer">APA ITU BAKORWIL ? </h1>
          <p className="text-xs text-text mt-2 md:text-sm">
            Bakorwil merupakan unsur penunjang kepala daerah, dipimpin oleh
            seorang kepala, yang benpm rada di bawah dan bertanggung jawab
            kepada Gubernur melalui Sekretaris Daerah.
          </p>
        </div>
      </div>
      <Accordion />
    </div>
  );
};

export default Profile;
