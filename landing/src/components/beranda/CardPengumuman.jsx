import React from 'react';

import Data from '../../Data.json';

const CardPengumuman = ({ setPickOfPengumuman }) => {
  return (
    <>
      {Data.slice(0, 2).map((dataPengumuman) => (
        <div
          className="card md:grid md:grid-cols-1 lg:grid-cols-5 items-stretch object-cover cursor-pointer"
          onClick={() => {
            window.my_modal_pengumuman.showModal();
            setPickOfPengumuman({ id: dataPengumuman.id, title: dataPengumuman.title, image: dataPengumuman.image });
          }}
        >
          <div className="card card-compact col-span-2 bg-base-100 bg-cover rounded-md overflow-hidden shadow-xl md:shadow-none">
            <img src={dataPengumuman.image} alt={dataPengumuman.title} className="h-28 md:h-52 lg:h-16 object-cover" />
            <div className="absolute lg:hidden bottom-0 w-full text-center text-white text-xs py-2 bg-neutral-900 bg-opacity-50">Lorem ipsum dolor sit</div>
          </div>
          <h3 className="hidden lg:inline-block col-span-3 md:text-xs lg:text-sm font-medium capitalize place-self-center">{dataPengumuman.title}</h3>
        </div>
      ))}
    </>
  );
};

export default CardPengumuman;
