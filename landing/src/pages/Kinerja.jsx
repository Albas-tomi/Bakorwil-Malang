import React from "react";
import Accordion from "../components/kinerja/Accordion";

const Kinerja = () => {
  return (
    <div id="kinerja">
      <div className="relative w-full h-24 md:h-36 lg:h-44 overflow-hidden">
        <img
          src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg"
          className="w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-second opacity-60 h-full">
          <h3 className="text-lg text-white font-bold text-center pt-4 md:pt-14 md:text-4xl">
            Uraian Kinerja Bakorwil III Malang
          </h3>
        </div>
      </div>

      {/* =================== ACCORDION =================== */}
      <Accordion />
    </div>
  );
};

export default Kinerja;
