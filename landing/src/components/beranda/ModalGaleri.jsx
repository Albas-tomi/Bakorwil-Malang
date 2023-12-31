import React from "react";

const ModalGaleri = ({ pickOfGaleri }) => {
  const urlImg = `${import.meta.env.VITE_APP_DOMAIN}/galeriImg/`;

  return (
    <>
      <dialog
        onClick={() => window.modalGaleri.close()}
        id="modalGaleri"
        className="modal"
      >
        <form method="dialog">
          <figure className="">
            <img
              src={`${urlImg}${pickOfGaleri.gambar}`}
              alt=""
              className="shadow-xl  max-w-3xl"
            />
          </figure>
        </form>
      </dialog>
    </>
  );
};

export default ModalGaleri;
