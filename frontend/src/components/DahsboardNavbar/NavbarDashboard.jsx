import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import AdminGambar from "../../assets/img/admin111.png";
import Logo from "../../assets/img/logopemrov.png";

const NavbarDashboard = () => {
  const location = useLocation();

  const currentPage = useMemo(() => {
    const pathName = location.pathname.split("/")[1];
    if (pathName === "pengumuman") return "Pengumuman";
    if (pathName === "berita") return "Berita";
    if (pathName === "struktur-organisasi") return "Struktur Organisasi";
    if (pathName === "database-user") return "Database User";
    if (pathName === "pendapatan") return "Pendapatan";
  }, [location]);

  return (
    <div className="w-full border-b shadow-sm border-gray-400 h-24 flex items-center px-8">
      <div className="flex w-1/2">
        <h1 className="text-lg font-semibold">{currentPage}</h1>
      </div>
      <div className="flex w-1/2 justify-end  items-center  gap-4">
        <div className="flex items-center mr-11 gap-5">
          <img src={Logo} alt="logo" className="w-[46px] h-[46px]" />
          <div>
            <p className="font-semibold">{"Albas Tomi"}</p>
            <span>{"emailUserLogin"}</span>
          </div>
        </div>
        <button className="border hover:bg-slate-100 duration-500 border-gray-300 rounded-full p-4">
          <img src={AdminGambar} alt="Logo" className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default NavbarDashboard;
