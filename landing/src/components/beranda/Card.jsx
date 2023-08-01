import React from "react";

const Card = () => {
  return (
    <>
      <div className="card card-compact w-[47%] bg-base-100 shadow-xl">
        <figure>
          <img src="https://placehold.co/600x400" alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </>
  );
};

export default Card;
