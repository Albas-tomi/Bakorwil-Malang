import React from "react";

export const Modal = ({ data }) => {
  return (
    <>
      {/* <dialog id="modalPengumuman" className="modal">
        <form method="dialog">
          <figure className="">
            <img src={data.image} alt="" className="shadow-xl " />
          </figure>
        </form>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog> */}
      <dialog
        onClick={() => window.modalPengumuman.close()}
        id="modalPengumuman"
        className="modal"
      >
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <figure className="">
            <img src={data.image} alt="" className="shadow-xl " />
          </figure>
        </form>
      </dialog>
    </>
  );
};
