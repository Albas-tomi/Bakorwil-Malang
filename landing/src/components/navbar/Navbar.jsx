import BakorwilLogo from "../../assets/image/logobakorwilmalang.png";
import { NavLink } from "react-router-dom";
import SearchData from "./SearchData";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white px-5 md:px-20 sticky top-0 shadow-md z-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm flex flex-col gap-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink className={"bg-none"} to={"/"}>
                {({ isActive }) => (
                  <a
                    className={`${
                      isActive ? "text-birumuda font-bold" : " "
                    } cursor-pointer`}
                  >
                    Beranda
                  </a>
                )}
              </NavLink>
              <NavLink className={"bg-none"} to={"/profil"}>
                {({ isActive }) => (
                  <a
                    className={`${
                      isActive ? "text-birumuda font-bold" : " "
                    } cursor-pointer`}
                  >
                    Profil
                  </a>
                )}
              </NavLink>
              <NavLink className={"bg-none"} to={"/kinerja"}>
                {({ isActive }) => (
                  <a
                    className={`${
                      isActive ? "text-birumuda font-bold" : " "
                    } cursor-pointer`}
                  >
                    Kinerja
                  </a>
                )}
              </NavLink>
              <NavLink className={"bg-none"} to={"/ppid"}>
                {({ isActive }) => (
                  <a
                    className={`${
                      isActive ? "text-birumuda font-bold" : " "
                    } cursor-pointer`}
                  >
                    PPID
                  </a>
                )}
              </NavLink>
              <NavLink className={"bg-none"} to={"/sakib"}>
                {({ isActive }) => (
                  <a
                    className={`${
                      isActive ? "text-birumuda font-bold" : " "
                    } cursor-pointer`}
                  >
                    SAKIB & RB
                  </a>
                )}
              </NavLink>
              <li>
                <a>Unduh</a>
                <ul className="p-2">
                  <li>
                    <a>Buku Pedoman Teknis</a>
                  </li>
                  <li>
                    <a>Dokumen PPID</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="ml-3">
            <img src={BakorwilLogo} alt="" className="w-28" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex items-center gap-4 menu-horizontal px-1">
            <NavLink className={"bg-none"} to={"/"}>
              {({ isActive }) => (
                <a
                  className={`${
                    isActive ? "text-birumuda" : " "
                  } cursor-pointer`}
                >
                  Beranda
                  <div
                    className={`${
                      isActive ? "h-[3px] bg-birumuda w-full" : " bg-none"
                    } cursor-pointer`}
                  ></div>
                </a>
              )}
            </NavLink>
            <NavLink className={"bg-none"} to={"/profil"}>
              {({ isActive }) => (
                <a
                  className={`${
                    isActive ? "text-birumuda" : " "
                  } cursor-pointer`}
                >
                  Profil
                  <div
                    className={`${
                      isActive ? "h-[3px] bg-birumuda w-full" : " bg-none"
                    } cursor-pointer`}
                  ></div>
                </a>
              )}
            </NavLink>
            <NavLink className={"bg-none"} to={"/kinerja"}>
              {({ isActive }) => (
                <a
                  className={`${
                    isActive ? "text-birumuda" : " "
                  } cursor-pointer`}
                >
                  Kinerja
                  <div
                    className={`${
                      isActive ? "h-[3px] bg-birumuda w-full" : " bg-none"
                    } cursor-pointer`}
                  ></div>
                </a>
              )}
            </NavLink>
            <NavLink className={"bg-none"} to={"/ppid"}>
              {({ isActive }) => (
                <a
                  className={`${
                    isActive ? "text-birumuda" : " "
                  } cursor-pointer`}
                >
                  PPID
                  <div
                    className={`${
                      isActive ? "h-[3px] bg-birumuda w-full" : " bg-none"
                    } cursor-pointer`}
                  ></div>
                </a>
              )}
            </NavLink>
            <NavLink className={"bg-none"} to={"/sakib"}>
              {({ isActive }) => (
                <a
                  className={`${
                    isActive ? "text-birumuda" : " "
                  } cursor-pointer`}
                >
                  SAKIB & RB
                  <div
                    className={`${
                      isActive ? "h-[3px] bg-birumuda w-full" : " bg-none"
                    } cursor-pointer`}
                  ></div>
                </a>
              )}
            </NavLink>
            <li tabIndex={0}>
              <details>
                <summary>Unduh Dokumen</summary>
                <ul className="p-2">
                  <li>
                    <a>Buku Pedoman Teknis</a>
                  </li>
                  <li>
                    <a>Dokumen PPID</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-white ">
          <SearchData />
        </div>
      </div>
    </>
  );
};

export default Navbar;
