import React from "react";

export const Modal = ({ data }) => {
  return (
    <>
        <dialog id="modalPengumuman" className="modal">
          <form method="dialog">
            <div className="w-full">
              <figure className="">
                <img
                  className="object-cover w-72 rounded-md mx-auto"
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
