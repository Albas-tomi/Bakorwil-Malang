import React from "react";

export const Modal = ({ data }) => {
  return (
    <>
      <dialog id="modalPengumuman" className="modal">
        <form method="dialog bg-primer">
          <div className="w-full ">
            <figure className="">
              <img
                className="object-cover h-48 w-96 rounded-md "
                src={data.image}
              />
            </figure>
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
};
