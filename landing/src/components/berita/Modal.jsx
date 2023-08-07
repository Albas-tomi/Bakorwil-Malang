import React from "react";

export const Modal = ({ data }) => {
  return (
    <>
      {/* =============== MODAL =============== */}
      <dialog id="modalBerita" className="modal">
        <form
          method="dialog"
          className="modal-box flex flex-col justify-center"
        >
          <div className="w-full flex flex-col justify-center">
            <figure className="mx-auto">
              <img className="object-cover h-48 w-96" src={data.image} />
            </figure>
            <h3 className="font-bold text-center text-lg">{data.title}</h3>
            <p className="py-4">{data.deskripsi}</p>
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
};
