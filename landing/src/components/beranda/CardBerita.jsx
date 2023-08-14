import React, { useState } from 'react';
import Data from '../../Data.json';

import { FaClock } from 'react-icons/fa';

const CardBerita = ({ setPickOfBerita }) => {
  return (
    <>
      {Data.slice(0, 6).map((dataBerita) => (
        <div
          className="card card-compact bg-base-100 shadow-xl cursor-pointer"
          onClick={() => {
            window.my_modal_5.showModal();
            setPickOfBerita({ id: dataBerita.id, title: dataBerita.title, deskripsi: dataBerita.deskripsi, image: dataBerita.image });
          }}
        >
          <figure>
            <img src={dataBerita.image} alt="" className="object-cover h-28 md:h-36 lg:h-56 w-[100%]" />
          </figure>
          <div className="card-body flex gap-1">
            <span className="text-primer text-xs flex items-center gap-1">
              <FaClock /> 20 Agustus 2023
            </span>
            <h3 className="font-medium capitalize">{dataBerita.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBerita;
