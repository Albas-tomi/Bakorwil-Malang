import React, { useEffect, useState } from "react";
import { getDataCarrousel } from "../../getDataApi";

const Slider = () => {
  const [dataCarrousel, setDataCarrousel] = useState([]);
  const urlImg = `${import.meta.env.VITE_APP_DOMAIN}/carrouselImg/`;

  // ===================== FOR GET API ======================
  useEffect(() => {
    getDataCarrousel().then((data) => {
      setDataCarrousel(data);
    });
  }, []);

  const [indexGambarSlide, setIndexGambarSlide] = useState(0);
  useEffect(() => {
    const detikPerubahan = setInterval(() => {
      setIndexGambarSlide((indexGambarSlide + 1) % dataCarrousel.length);
    }, 8000);
    return () => {
      clearInterval(detikPerubahan);
    };
  }, [indexGambarSlide, dataCarrousel]);
  return (
    <>
      <div className="carousel w-full">
        {dataCarrousel.map((dataSlider, idx) => (
          <div
            key={dataSlider.id}
            id={idx}
            className={`carousel-item relative w-full ${
              idx === indexGambarSlide ? "block" : "hidden"
            }`}
          >
            <img
              src={`${urlImg}${dataSlider.gambar}`}
              className="w-full h-56 md:h-96 lg:h-screen object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                onClick={() =>
                  setIndexGambarSlide(
                    (indexGambarSlide - 1 + dataCarrousel.length) %
                      dataCarrousel.length
                  )
                }
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                onClick={() =>
                  setIndexGambarSlide(
                    (indexGambarSlide + 1) % dataCarrousel.length
                  )
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
