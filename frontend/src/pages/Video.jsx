import React from "react";
import VideoList from "../components/video/VideoList";

const Video = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between px-4 w-full items-center">
        <h1 className="text-[#005DB9] font-bold text-xl">Daftar Video</h1>
        <button
          onClick={() => {
            window.my_modal_addVideo.showModal();
          }}
          className="btn bg-[#005DB9] text-white hover:bg-blue-700"
        >
          + Tambah Video
        </button>
      </div>
      <VideoList />
    </div>
  );
};

export default Video;
