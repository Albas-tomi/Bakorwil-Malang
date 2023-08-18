import React from "react";

export const Modal = ({ data }) => {
  const urlImg = "http://localhost:4000/beritaImg/";

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
                src={`${urlImg}${data.gambar}`}
              />
            </figure>
            <h3 className="font-bold text-center text-lg mt-4 capitalize">
              {data.judul}
            </h3>
            <div
              className="py-4"
              dangerouslySetInnerHTML={{
                __html: data.deskripsi,
              }}
            />
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
