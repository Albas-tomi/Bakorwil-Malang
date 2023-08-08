import React from "react";
import LogoHapus from "../../assets/img/deleteLogo.png";
const ConfirmDeleteVideo = ({ deleteVideoId, pickIdDelete }) => {
  return (
    <dialog id="my_modal_confirmDeleteVideo" className="modal">
      <form method="dialog" className="modal-box">
        <div className=" flex flex-col items-center justify-center">
          <img className="w-36" src={LogoHapus} alt="LogoHapus" />
          <h3 className="font-bold text-lg text-center my-4">
            Apakah Anda Yakin Ingin <br /> Menghapus Data ?{" "}
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => {
                window.my_modal_confirmDeleteVideo.close();
              }}
              className="btn bg-[#005DB9] w-[170px] text-white"
            >
              Batal
            </button>
            <button
              onClick={() => deleteVideoId(pickIdDelete)}
              className="btn w-[170px] btn-outline btn-[#005DB9]"
            >
              Iya
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default ConfirmDeleteVideo;
