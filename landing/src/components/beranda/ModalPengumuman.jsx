import React from 'react';

const ModalPengumuman = ({ pickOfPengumuman }) => {
  return (
    <>
      <dialog id="my_modal_pengumuman" className="modal modal-middle">
        <form method="dialog" className="modal-box grid place-items-center gap-2">
          <img src={pickOfPengumuman.image} alt="" className="rounded-md" />
          <h3 className="font-bold text-lg capitalize text-second">{pickOfPengumuman.title}</h3>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ModalPengumuman;
