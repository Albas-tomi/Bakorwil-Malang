import React from 'react';

const ModalGaleri = ({ pickOfGaleri }) => {
  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box grid place-items-center gap-2">
          <img src={pickOfGaleri.image} alt="" className="rounded-md max-w-92" />
          <h3 className="text-lg font-bold capitalize text-second">{pickOfGaleri.title}</h3>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default ModalGaleri;
