// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import BakorwilLogo from "../../assets/image/logobakorwilmalang.png";


const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Beranda</a></li>
                            <li><a>Profil</a></li>
                            <li><a>Kinerja</a></li>
                            <li><a>PPID</a></li>
                            <li><a>SAKIB & RB</a></li>
                            <li>
                                <a>Unduh</a>
                                <ul className="p-2">
                                    <li><a>Buku Pedoman Teknis</a></li>
                                    <li><a>Dokumen PPID</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className=""><img src={BakorwilLogo} alt="" className="w-28" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Beranda</a></li>
                        <li><a>Profil</a></li>
                        <li><a>Kinerja</a></li>
                        <li><a>PPID</a></li>
                        <li><a>SAKIB & RB</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Unduh Dokumen</summary>
                                <ul className="p-2">
                                    <li><a>Buku Pedoman Teknis</a></li>
                                    <li><a>Dokumen PPID</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end text-white ">
                    <a className="bg-second px-3 py-1 rounded-md"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                </div>
            </div>
        </>
    )
}

export default Navbar