import React from "react";

export const Modal = ({ data }) => {
  return (
    <>
      {/* =============== MODAL =============== */}
      <dialog id="modalBerita" className="modal">
        <form
          method="dialog"
          className=" bg-begron h-screen overflow-y-auto w-full p-4 absolute top-0"
        >
          <button className="btn btn-sm btn-circle btn-ghost sticky left-0 top-0 place-self-end bg-error  hover:bg-primer text-white">
            ✕
          </button>
          <img
            src={`http://localhost:4000/beritaImg//${data.gambar}`}
            alt=""
            className="max-w-96 md:w-[60%] w-[100%] rounded-md mx-auto mt-[-40px]"
          />
          <h3 className="font-bold text-lg text-center capitalize text-second mt-4 mx-auto">
            {data.judul}
          </h3>
          <div
            className="text-justify mx-auto"
            dangerouslySetInnerHTML={{
              __html: data.deskripsi,
            }}
          />
        </form>
      </dialog>
    </>
  );
};
