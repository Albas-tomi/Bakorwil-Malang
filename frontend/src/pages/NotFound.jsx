import React from "react";
import { useNavigate } from "react-router";
import notFound from "../assets/img/not-found.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#fdfbff] flex items-center justify-center">
      <div className="w-[360px] h-[310px] flex flex-col justify-center gap-2">
        <div className="flex flex-col items-center gap-4">
          <img src={notFound} alt="not-found-img" width={140} height={120} />
          <div className="w-[290px] h-[96px] flex flex-col text-center gap-3">
            <h1 className="font-face-ro font text-4xl">Page 404 Not Found</h1>
            <p className="font-face-ro text-base">
              Halaman tidak ditemukan. Kamu bisa kembali ke halaman sebelumnya
            </p>
          </div>
        </div>
        <button
          className="w-[360px] absolute bottom-0 h-[50px] text-white bg-[#227ad3] rounded-2xl"
          onClick={() => navigate(-1)}
        >
          Get Back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
