import React from 'react';

import Data from '../../Data.json';

const CardGaleri = ({ setPickOfGaleri }) => {
  return (
    <>
      {Data.slice(0, 6).map((dataGaleri) => (
        <label
          className="card card-compact bg-base-100 bg-cover rounded-md overflow-hidden relative cursor-pointer"
          onClick={() => {
            window.modalGaleri.showModal();
            setPickOfGaleri({ id: dataGaleri.id, title: dataGaleri.title, image: dataGaleri.image });
          }}
        >
          <img src={dataGaleri.image} alt="" className="object-cover h-28 md:h-40 lg:h-64" />
          <div className="absolute bottom-0 w-full text-center text-white font-medium text-xs lg:text-sm py-2 bg-neutral-900 bg-opacity-50 capitalize">{dataGaleri.title}</div>
        </label>
      ))}
    </>
  );
};

export default CardGaleri;
