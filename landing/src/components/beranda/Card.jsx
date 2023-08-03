import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import Data from "../../Data.json";

const Card = () => {

  return (
    <>
      {Data.map((bc) => {
        return (
          <div className="card card-compact bg-base-100 shadow-xl md:w-[80%]">
            <figure>
              <img className="object-cover h-48 w-96" src={bc.image} />
            </figure>
            <div className="card-body">
              <p className="text-[#3da9fc]">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faClock} /> 20 agustus 2023
                </span>
              </p>
              <p>
                {bc.deskripsi.substring(0, 60)}...
                <span> </span>
                <a
                  className="text-[#3da9fc]"
                  href="#"
                  onClick={() => window.modalll.showModal()}
                >
                  selengkanya
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
