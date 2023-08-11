import React from 'react';

const ModalPengumuman = ({ pickOfPengumuman }) => {
  return (
    <>
      <dialog id="my_modal_pengumuman" className="modal modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">{pickOfPengumuman.title}</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
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
