import { FaEnvelope, FaFacebook, FaGlobe, FaInstagram, FaLocationDot, FaPhone, FaTwitter } from 'react-icons/fa6';

import LogoJatim from '../../assets/image/logopemrov-png.png';
import LogoJdihn from '../../assets/image/jdihn.png';
import LogoLpse from '../../assets/image/lpse.png';
import LogoLapor from '../../assets/image/lapor.png';

const Footer = () => {
  return (
    <div>
      {/* Pemprov Jatim */}
      <div className="footer px-5 md:px-10 lg:20px bg-dark text-white pb-10">
        <div className="isi mx-auto">
          <h1 className="font-medium text-sm mx-auto mt-10">PEMPROV JATIM</h1>
          <div className="grid grid-cols-2 gap-x-16 gap-y-7 mx-auto items-center mt-5">
            <a href="https://jatimprov.go.id/" target="_blank" rel="noreferrer">
              <img src={LogoJatim} alt="" className="w-20" />
            </a>
            <a href="https://jdih.jatimprov.go.id/" target="_blank" rel="noreferrer">
              <img src={LogoJdihn} alt="" className="w-20" />
            </a>
            <a href="https://lpse.jatimprov.go.id/eproc4" target="_blank" rel="noreferrer">
              <img src={LogoLpse} alt="" className="w-20" />
            </a>
            <a href="https://www.lapor.go.id/" target="_blank" rel="noreferrer">
              <img src={LogoLapor} alt="" className="w-20" />
            </a>
          </div>
        </div>

        {/* Kontak Kami */}
        <div className="isi mx-auto flex flex-col gap-4 text-xs md:text-sm mt-7">
          <h1 className="font-medium text-sm mx-auto ">KONTAK KAMI</h1>
          <a href="#" className="flex gap-3 mt-3">
            <FaLocationDot className="self-center" />
            <div className="font-light">
              Jl. Simpang Ijen No. 2 Oro-oro Dowo,
              <br />
              Kecamatan Klojen Kota Malang
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </a>
          <a href="#" className="flex gap-3">
            <FaPhone className="self-center" />
            <div className="font-light">
              (0341) 551321
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </a>
          <a href="#" className="flex gap-3">
            <FaEnvelope className="self-center" />
            <div className="font-light">
              bakorwilmalang@jatimprov.go.id
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </a>
        </div>

        {/* Link Bakorwil */}
        <div className="isi mx-auto flex flex-col gap-4 text-xs md:text-sm mt-7">
          <h1 className="font-medium text-sm mx-auto">BAKORWIL JATIM</h1>
          <a href="#" className="flex gap-3 mt-3">
            <FaGlobe className="self-center" />
            <div className="font-light">
              Bakorwil Madiun
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </a>
          <a href="#" className="flex gap-3">
            <FaGlobe className="self-center" />
            <div className="font-light">
              Bakorwil Bojonegoro
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </a>
          <a href="#" className="flex gap-3">
            <FaGlobe className="self-center" />
            <div className="font-light">
              Bakorwil Pamekasan
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </a>
          <a href="#" className="flex gap-3">
            <FaGlobe className="self-center" />
            <div className="font-light">
              Bakorwil Jember
              <div className="h-[2px] w-full bg-white"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Link Sosmed */}
      <div className="bg-second py-5 text-xl md:flex flex-row-reverse items-center justify-around">
        <div className="flex text-white justify-center gap-12">
          <a href="https://www.instagram.com/bakorwilmalang/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/bakorwil.malang.7/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/BakorwilMalang" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:bakorwilmalang@jatimprov.go.id?Subject=Mau%20tanya" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
        </div>
        <div className="text-sm md:text-base font-medium text-white text-center mt-5 md:mt-0">Copyright © 2022. Bakorwil Malang</div>
      </div>
    </div>
  );
};

export default Footer;
