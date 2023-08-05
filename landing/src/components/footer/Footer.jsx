import { FaEnvelope, FaGlobe, FaLocationDot, FaPhone } from 'react-icons/fa6';

import LogoJatim from '../../assets/image/logopemrov-png.png';
import LogoJdihn from '../../assets/image/jdihn.png';
import LogoLpse from '../../assets/image/lpse.png';
import LogoLapor from '../../assets/image/lapor.png';

const Footer = () => {
  return (
    <div>
      {/* Pemprov Jatim */}
      <div className="footer mt-10 px-5 bg-dark text-white pb-5">
        <h1 className="font-medium text-lg mx-auto mt-10">PEMPROV JATIM</h1>
        <div className="isi mx-auto">
          <div className="grid grid-cols-2 gap-x-16 gap-y-7 mx-auto items-center">
            <img src={LogoJatim} alt="" className="w-20" />
            <img src={LogoJdihn} alt="" className="w-20" />
            <img src={LogoLpse} alt="" className="w-20" />
            <img src={LogoLapor} alt="" className="w-20" />
          </div>

          {/* Kontak Kami */}
          <h1 className="font-medium text-lg  mx-auto mt-10">KONTAK KAMI</h1>
          <div className="isi mx-auto flex flex-col gap-4 text-base">
            <a href="#" className="flex gap-3 mt-5">
              <FaLocationDot className="text-lg self-center" />
              <div className="font-light">
                Jl. Simpang Ijen No. 2 Oro-oro Dowo,
                <br />
                Kecamatan Klojen Kota Malang
                <div className="h-[2px] w-full bg-white"></div>
              </div>
            </a>
            <a href="#" className="flex gap-3">
              <FaPhone className="text-lg self-center" />
              <div className="font-light">
                (0341) 551321
                <div className="h-[2px] w-full bg-white"></div>
              </div>
            </a>
            <a href="#" className="flex gap-3">
              <FaEnvelope className="text-lg self-center" />
              <div className="font-light">
                bakorwil3provjatim.dimalang@gmail.com
                <div className="h-[2px] w-full bg-white"></div>
              </div>
            </a>
          </div>

          {/* Link Bakorwil */}
          <h1 className="font-medium text-lg  mx-auto mt-10">BAKORWIL JATIM</h1>
          <div className="isi mx-auto flex flex-col gap-4 text-base">
            <a href="#" className="flex gap-3 mt-5">
              <FaGlobe className="text-lg self-center" />
              <div className="font-light">
                Bakorwil Madiun
                <div className="h-[2px] w-full bg-white"></div>
              </div>
            </a>
            <a href="#" className="flex gap-3 mt-5">
              <FaGlobe className="text-lg self-center" />
              <div className="font-light">
                Bakorwil Bojonegoro
                <div className="h-[2px] w-full bg-white"></div>
              </div>
            </a>
            <a href="#" className="flex gap-3 mt-5">
              <FaGlobe className="text-lg self-center" />
              <div className="font-light">
                Bakorwil Pamekasan
                <div className="h-[2px] w-full bg-white"></div>
              </div>
            </a>
            <a href="#" className="flex gap-3 mt-5">
              <FaGlobe className="text-lg self-center" />
              <div className="font-light">
                Bakorwil Jember
                <div className="h-[2px] w-full bg-white"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
