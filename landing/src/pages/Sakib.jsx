import React from "react";
import Button from "../components/sakib/Button";
import Modal from "../components/sakib/Modal";

const Sakib = () => {
  return (
    <div>
      <h1 className="text-center my-5 font-bold text-md text-second">
        Dokumen Sakib & RB
      </h1>
      <div className="grid gap-y-3 justify-center md:grid-cols-3 justify-items-center">
        <Button />
        <Modal />
      </div>
    </div>
  );
};

export default Sakib;
