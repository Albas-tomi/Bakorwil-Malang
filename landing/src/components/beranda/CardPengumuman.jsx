import React from "react";

export const CardPengumuman = () => {
  const showModal = () => {};
  return (
    <>
      <div className="card card-compact bg-base-100 w-[80%] rounded-md shadow-xl">
        <figure>
          <img src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
        </figure>
        <div className="card-body absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#262626] opacity-60 md:py-6 rounded-lg">
          <p className="text-sm text-white text-center font-bold md:text-md">
            Hey, I Am The Big Boss
          </p>
        </div>
      </div>
    </>
  );
};
