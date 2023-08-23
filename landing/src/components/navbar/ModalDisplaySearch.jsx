import React from "react";

const ModalDisplaySearch = ({ dataModal }) => {
  return (
    <dialog id="modalSearch" className="modal">
      <form
        method="dialog"
        className=" bg-dark h-screen overflow-y-auto w-full p-4 absolute top-0"
      >
        <button className="btn btn-sm btn-circle btn-ghost sticky left-0 top-0 place-self-end bg-error  hover:bg-primer text-white">
          ✕
        </button>
        <img
          src={dataModal.url}
          alt=""
          className="max-w-96 w-[40%] rounded-md mx-auto mt-[-40px]"
        />
        <h3 className="font-bold text-lg text-center capitalize text-second mt-4 mx-auto">
          {dataModal.judul}
        </h3>
        <div
          className="text-justify mx-auto"
          dangerouslySetInnerHTML={{
            __html: dataModal.deskripsi,
          }}
        />
      </form>
    </dialog>
  );
};

export default ModalDisplaySearch;
