import React from 'react';

const ModalBerita = ({ pickOfBerita }) => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">{pickOfBerita.title}</h3>
          <p className="py-4">{pickOfBerita.deskripsi}</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ModalBerita;
