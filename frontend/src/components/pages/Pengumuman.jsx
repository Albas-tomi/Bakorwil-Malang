import React from "react";
import PengumumanList from "../pengumuman/PengumumanList";

const Pengumuman = () => {
  return (
    <div className="p-2">
      <button
        onClick={() => {
          window.my_modal_add.showModal();
        }}
        className="btn btn-outline btn-success"
      >
        Add Pengumuman
      </button>
      <div className="flex flex-col my-2">
        <PengumumanList />
      </div>
    </div>
  );
};

export default Pengumuman;
