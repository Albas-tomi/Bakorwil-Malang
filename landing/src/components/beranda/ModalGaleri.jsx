import React from 'react';

const ModalGaleri = ({ pickOfGaleri }) => {
  return (
    <>
      <dialog onClick={() => window.modalGaleri.close()} id="modalGaleri" className="modal">
        <form method="dialog">
          <figure className="">
            <img src={pickOfGaleri.image} alt="" className="shadow-xl " />
          </figure>
        </form>
      </dialog>
    </>
  );
};

export default ModalGaleri;
