import React from "react";

const ModalGaleri = ({ pickOfGaleri }) => {
  const urlImg = "http://localhost:4000/galeriImg/";

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
              className="shadow-xl "
            />
          </figure>
        </form>
      </dialog>
    </>
  );
};

export default ModalGaleri;
