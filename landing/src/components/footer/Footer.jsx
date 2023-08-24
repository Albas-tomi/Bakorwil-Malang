import { FaEnvelope, FaGlobe, FaLocationDot, FaPhone } from 'react-icons/fa6';

import LogoJatim from '../../assets/image/logopemrov-png.png';
import LogoJdihn from '../../assets/image/jdihn.png';
import LogoLpse from '../../assets/image/lpse.png';
import LogoLapor from '../../assets/image/lapor.png';

const Footer = () => {
  return (
    <div>
      <div className="footer mt-10 px-5 bg-dark text-white pb-5">
        {/* Pemprov Jatim */}
        <div className="isi mx-auto">
          <h1 className="font-medium text-lg mx-auto my-7">PEMPROV JATIM</h1>
          <div className="grid grid-cols-2 gap-x-16 gap-y-7 mx-auto items-center">
            <img src={LogoJatim} alt="" className="w-20" />
            <img src={LogoJdihn} alt="" className="w-20" />
            <img src={LogoLpse} alt="" className="w-20" />
            <img src={LogoLapor} alt="" className="w-20" />
          </div>
        </div>

        {/* Kontak Kami */}
        <div className="isi mx-auto text-lg">
          <h1 className="font-medium  mx-auto my-3">KONTAK KAMI</h1>
          <div className="flex gap-3 my-1">
            <FaLocationDot className="self-center" />
            <div className="font-light">
              Jl. Simpang Ijen No. 2 Oro-oro Dowo, Kecamatan Klojen Kota Malang
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </div>
          <div className="flex gap-3 my-1">
            <FaPhone className="self-center" />
            <div className="font-light">
              (0341) 551321
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </div>
          <div className="flex gap-3 my-1">
            <FaEnvelope className="self-center" />
            <div className="font-light">
              bakorwilmalang@jatimprov.go.id
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* Link Bakorwil */}
        <div className="isi mx-auto text-lg">
          <h1 className="font-medium text-lg  mx-auto my-3">BAKORWIL JATIM</h1>
          <div className="flex gap-3">
            <FaGlobe className="text-lg self-center" />
            <div className="font-light">
              Bakorwil Madiun
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </div>
          <div className="flex gap-3">
            <FaGlobe className="text-lg self-center" />
            <div className="font-light">
              Bakorwil Bojonegoro
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </div>
          <div className="flex gap-3">
            <FaGlobe className="text-lg self-center" />
            <div className="font-light">
              Bakorwil Pamekasan
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </div>
          <div className="flex gap-3">
            <FaGlobe className="text-lg self-center" />
            <div className="font-light">
              Bakorwil Jember
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
