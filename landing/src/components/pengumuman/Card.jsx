import React from 'react';

export const Card = ({ pengumumanData, Get }) => {
  return (
    <>
      <label
        className="card card-compact bg-base-100 bg-cover rounded-md overflow-hidden relative cursor-pointer"
        onClick={() => {
          window.modalPengumuman.showModal();
          Get({ id: pengumumanData.id, title: pengumumanData.title, image: pengumumanData.image });
        }}
      >
        <img src={pengumumanData.image} alt="" className="object-cover h-28 md:h-44 lg:h-64" />
        <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-neutral-900 bg-opacity-50 capitalize">{pengumumanData.title}</div>
      </label>
    </>
  );
};
