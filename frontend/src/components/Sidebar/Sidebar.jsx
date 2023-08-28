/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logopemrov.png";
import { TfiAnnouncement, TfiImage } from "react-icons/tfi";
import { TiDocumentText, TiNews, TiChartAreaOutline } from "react-icons/ti";
import { RiGovernmentLine } from "react-icons/ri";
import { GoVersions, GoVideo } from "react-icons/go";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="relative min-w-[270px] pt-8 border-r-2 border-gray-300 ">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-whiterounded-full cursor-pointer"></div>
        <img className="h-16" src={Logo} alt="Logo" />
      </div>

      <NavLink to={"/pengumuman"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300"
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <TfiAnnouncement className="h-[28px] w-[28px]" />
              <span className="text-start font-medium pl-8 w-full text-sm">
                Pengumuman
              </span>
            </li>
          </ul>
        )}
      </NavLink>

      <NavLink to={"/berita"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300 "
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <TiNews className="h-[28px] w-[28px]" />

              <span className="text-start pl-8 w-full font-medium  text-sm">
                Berita
              </span>
            </li>
          </ul>
        )}
      </NavLink>

      <NavLink to={"/dokumen"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300"
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <TiDocumentText className="h-[28px] w-[28px]" />

              <span className="text-start pl-8 w-full text-sm font-medium  ">
                Dokumen{" "}
              </span>
            </li>
          </ul>
        )}
      </NavLink>

      <NavLink to={"/carrousel"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300 "
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <TfiImage className="h-[28px] w-[28px]" />

              <span className="text-start pl-8 w-full text-sm  font-medium  ">
                Carrousel
              </span>
            </li>
          </ul>
        )}
      </NavLink>

      <NavLink to={"/bakorwil"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300 "
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <RiGovernmentLine className="h-[28px] w-[28px]" />

              <span className="text-start pl-8 w-full text-sm  font-medium  ">
                Bakorwil
              </span>
            </li>
          </ul>
        )}
      </NavLink>
      <NavLink to={"/galeri"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300 "
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <HiOutlinePhotograph className="h-[28px] w-[28px]" />

              <span className="text-start pl-8 w-full text-sm  font-medium  ">
                Galeri
              </span>
            </li>
          </ul>
        )}
      </NavLink>

      <NavLink to={"/program"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300 "
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <AiOutlineProject className="h-[28px] w-[28px]" />

              <span className="text-start pl-8 w-full text-sm  font-medium  ">
                Program
              </span>
            </li>
          </ul>
        )}
      </NavLink>
      <NavLink to={"/video"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300 "
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <GoVideo className="h-[28px] w-[28px]" />

              <span className="text-start pl-8 w-full text-sm  font-medium  ">
                Video
              </span>
            </li>
          </ul>
        )}
      </NavLink>
      <NavLink to={"/daftar-informasi-PPID"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300 "
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <TiChartAreaOutline className="h-[28px] w-[28px]" />

              <span className="text-start pl-8 w-full text-sm  font-medium  ">
                Daftar Informasi PPID
              </span>
            </li>
          </ul>
        )}
      </NavLink>
      <NavLink to={"/struktur-pejabat"}>
        {({ isActive }) => (
          <ul
            className={`${
              isActive
                ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
                : "w-full py-4 text-slate-300 "
            } cursor-pointer`}
          >
            <li className="flex mx-auto w-full pl-11 text-start justify-center items-center mr-10">
              <GoVersions className="h-[28px] w-[28px]" />

              <span className="text-start pl-8 w-full text-sm  font-medium  ">
                Struktur Pejabat
              </span>
            </li>
          </ul>
        )}
      </NavLink>
    </div>
  );
};

export default Sidebar;
