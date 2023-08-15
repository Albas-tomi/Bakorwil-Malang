import React, { useEffect, useState } from "react";
import { getDataVideo } from "../../getDataApi";

const CardVideo = () => {
  const [dataVideo, setDataVideo] = useState([]);

  // ===================== FOR GET API ======================
  useEffect(() => {
    getDataVideo().then((data) => {
      setDataVideo(data);
    });
  }, []);

  return (
    <div>
      <div className="video mt-12 md:px-10 lg:mt-16 px-5 lg:px-20">
        <h1 className="text-xl md:text-2xl text-center font-semibold text-second">
          Video Terkait
        </h1>
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-5 justify-center mt-4 md:mt-8">
          {dataVideo
            .reverse()
            .slice(-2)
            .map((video) => (
              <iframe
                key={video.id}
                src={video.link}
                allow="navigation"
                className="rounded-lg h-60 md:w-1/2 lg:h-96"
              ></iframe>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
