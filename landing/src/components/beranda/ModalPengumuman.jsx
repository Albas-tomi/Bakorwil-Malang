import React from "react";
const ModalPengumuman = ({ pickOfPengumuman }) => {
  const urlImg = `${import.meta.env.VITE_APP_DOMAIN}/pengumumanImg/`;

  return (
    <>
      <dialog
        onClick={() => window.modal_pengumuman.close()}
        id="modal_pengumuman"
        className="modal overflow-auto"
      >
        <form method="dialog">
          <figure className="">
            <img
              src={`${urlImg}/${pickOfPengumuman.gambar}`}
              alt=""
              className="shadow-xl max-w-4xl"
            />
          </figure>
        </form>
      </dialog>
    </>
  );
};

export default ModalPengumuman;
