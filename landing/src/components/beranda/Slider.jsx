import React from 'react';

import Data from '../../Data.json';

const Slider = () => {
  return (
    <>
      <div className="carousel w-full">
        {Data.map((dataSlider) => (
          <div id="slide1" className="carousel-item relative w-full">
            <img src={dataSlider.image} className="w-full h-56 md:h-96 lg:h-screen object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
