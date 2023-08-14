import React from "react";

export const Modal = ({ data }) => {
  return (
    <>
      {/* =============== MODAL =============== */}
      <dialog id="modalBerita" className="modal">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl grid items-center gap-3"
        >
          <div className="w-full grid justify-center">
            <figure className="">
              <img
                className="mx-auto object-cover sticky h-48 w-96"
                src={data.image}
              />
            </figure>
            <h3 className="font-bold text-center text-lg mt-4">{data.title}</h3>
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
