import React from 'react';

const ModalPengumuman = ({ pickOfPengumuman }) => {
  return (
    <>
      <dialog onClick={() => window.modal_pengumuman.close()} id="modal_pengumuman" className="modal">
        <form method="dialog">
          <figure className="">
            <img src={pickOfPengumuman.image} alt="" className="shadow-xl " />
          </figure>
        </form>
      </dialog>
    </>
  );
};

export default ModalPengumuman;
