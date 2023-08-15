import React, { useEffect, useState } from "react";

import Data from "../../Data.json";

const Slider = () => {
  const [indexGambarSlide, setIndexGambarSlide] = useState(0);
  useEffect(() => {
    const detikPerubahan = setInterval(() => {
      setIndexGambarSlide((gambarSlide) => (gambarSlide + 1) % Data.length);
    }, 10000);
    return () => {
      clearInterval(detikPerubahan);
    };
  }, []);
  return (
    <>
      <div className="carousel w-full">
        {Data.map((dataSlider, idx) => (
          <div
            id={idx}
            className={`carousel-item relative w-full ${
              idx === indexGambarSlide ? "block" : "hidden"
            }`}
          >
            <img
              src={dataSlider.image}
              className="w-full h-56 md:h-96 lg:h-screen object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                onClick={() =>
                  setIndexGambarSlide(
                    (indexGambarSlide - 1 + Data.length) % Data.length
                  )
                }
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                onClick={() =>
                  setIndexGambarSlide((indexGambarSlide + 1) % Data.length)
                }
                className="btn btn-circle"
              >
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
