import React from "react";

export const Modal = ({ data }) => {
  const urlImg = "http://localhost:4000/pengumumanImg/";

  return (
    <>
      <dialog
        onClick={() => window.modalPengumuman.close()}
        id="modalPengumuman"
        className="modal overflow-auto"
      >
        <form method="dialog">
          <figure className="">
            <img
              src={`${urlImg}${data.gambar}`}
              alt="gambar"
              className="shadow-xl max-w-4xl"
            />
          </figure>
        </form>
      </dialog>
    </>
  );
};
