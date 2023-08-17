import React from "react";

const ModalPengumuman = ({ pickOfPengumuman }) => {
  const urlImg = "http://localhost:4000/pengumumanImg/";

  return (
    <>
      <dialog
        onClick={() => window.modal_pengumuman.close()}
        id="modal_pengumuman"
        className="modal"
      >
        <form method="dialog">
          <figure className="">
            <img
              src={`${urlImg}/${pickOfPengumuman.gambar}`}
              alt=""
              className="shadow-xl "
            />
          </figure>
        </form>
      </dialog>
    </>
  );
};

export default ModalPengumuman;
