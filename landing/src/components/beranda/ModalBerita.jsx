import React from 'react';

const ModalBerita = ({ pickOfBerita }) => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl grid gap-3">
          <button className="btn btn-sm btn-circle btn-ghost sticky left-0 top-0 place-self-end bg-error hover:bg-primer text-white">✕</button>
          <img src={pickOfBerita.image} alt="" className="max-w-92 rounded-md mx-auto mt-[-40px]" />
          <h3 className="font-bold text-lg capitalize text-second mt-4 mx-auto">{pickOfBerita.title}</h3>
          <p className="text-justify mx-auto">{pickOfBerita.deskripsi}</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalBerita;
