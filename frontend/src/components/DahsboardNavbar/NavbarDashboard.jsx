import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminGambar from "../../assets/img/admin111.png";
import Logo from "../../assets/img/logopemrov.png";
import LogoButton from "../../assets/img/LogoutButton.png";
import ConfirmLogout from "./ConfirmLogout";

const NavbarDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = useMemo(() => {
    const pathName = location.pathname.split("/")[1];
    if (pathName === "pengumuman") return "Pengumuman";
    if (pathName === "berita") return "Berita";
    if (pathName === "dokumen") return "Dokumen";
    if (pathName === "carrousel") return "Carrousel";
    if (pathName === "bakorwil") return "Bakorwil";
    if (pathName === "galeri") return "Galeri";
    if (pathName === "ppid") return "PPID";
    if (pathName === "program") return "Program";
    if (pathName === "video") return "Video";
    if (pathName === "wilayah-kerja") return "Wilayah Kerja";
  }, [location]);

  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    const accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      navigate("/", { replace: true });
      window.location.reload();
    }
  };
  const userName = sessionStorage.getItem("name");
  const userEmail = sessionStorage.getItem("email");

  return (
    <div className="w-full border-b shadow-sm border-gray-400 h-24 flex items-center px-8">
      <div className="flex w-1/2">
        <h1 className="text-lg font-semibold">{currentPage}</h1>
      </div>
      <div className="flex w-1/2 justify-end  items-center  gap-4">
        <div className="flex items-center mr-11 gap-5">
          <img src={Logo} alt="logo" className="w-[46px] h-[46px]" />
          <div>
            <p className="font-semibold">{userName}</p>
            <span>{userEmail}</span>
          </div>
        </div>
        <button
          onClick={() => {
            window.my_modal_confirmLogout.show();
          }}
          className="border hover:bg-slate-100 duration-500 border-gray-300 rounded-full p-4"
        >
          <img src={LogoButton} alt="Logo Button" />
        </button>
      </div>
      <ConfirmLogout handleLogout={handleLogout} />
    </div>
  );
};

export default NavbarDashboard;
