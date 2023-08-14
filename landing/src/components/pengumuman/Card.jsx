import React from "react";

export const Card = ({ pengumumanData, Get }) => {
  return (
    <>
      <div
        key={pengumumanData.id}
        className="card card-compact bg-base-100 w-[80%] shadow-xl"
      >
        <button
          className=""
          onClick={() => {
            window.modalPengumuman.showModal();
            Get({
              id: pengumumanData.id,
              image: pengumumanData.image,
              title: pengumumanData.title,
            });
          }}
        >
          <figure className="rounded-xl">
            <img className="object-cover h-48 w-96" src={pengumumanData.image} />
          </figure>
        </button>
      </div>
    </>
  );
};
