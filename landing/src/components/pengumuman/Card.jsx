import React from "react";

export const Card = ({ p, Get }) => {
  return (
    <>
      <div className="card card-compact bg-base-100 w-[80%] shadow-xl">
        <button
          className=""
          onClick={() => {
            window.modalPengumuman.showModal();
            Get({
              id: p.id,
              image: p.image,
              title: p.title,
              deskripsi: p.deskripsi,
            });
          }}
        >
          <figure className="rounded-xl">
            <img className="object-cover h-48 w-96" src={p.image} />
          </figure>
        </button>
        <div className="card-body absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#262626] opacity-60 md:py-6 rounded-lg">
          <p className="text-xs text-white text-center ">
            {p.deskripsi.substring(0, 20)}
          </p>
        </div>
      </div>
    </>
  );
};
