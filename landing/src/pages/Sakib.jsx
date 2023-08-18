import React from "react";
import Button from "../components/sakib/Button";
import Modal from "../components/sakib/Modal";

const Sakib = () => {
  return (
    <div>
      <h1 className="text-center my-7 md:my-10 lg:my-15 font-bold text-md text-second text-xl md:text-4xl">
        Dokumen SAKIP & RB
      </h1>
      <div className="grid gap-y-3 justify-center md:grid-cols-3 justify-items-center mb-10">
        <Button />
        <Modal />
      </div>
    </div>
  );
};

export default Sakib;
