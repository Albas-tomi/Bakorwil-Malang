import React from "react";

export const Card = ({ p, Get }) => {
  return (
    <>
      <div
        key={p.id}
        className="card card-compact bg-base-100 w-[80%] shadow-xl"
      >
        <button
          className=""
          onClick={() => {
            window.modalPengumuman.showModal();
            Get({
              id: p.id,
              image: p.image,
              title: p.title,
            });
          }}
        >
          <figure className="rounded-xl">
            <img className="object-cover h-48 w-96" src={p.image} />
          </figure>
        </button>
      </div>
    </>
  );
};
