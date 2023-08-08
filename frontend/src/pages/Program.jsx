import React from "react";
import ProgramtList from "../components/program/ProgramList";

const Program = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">Daftar Program</h1>
        <button
          onClick={() => {
            window.my_modal_addProgram.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Program
        </button>
      </div>
      <ProgramtList />
    </div>
  );
};

export default Program;
