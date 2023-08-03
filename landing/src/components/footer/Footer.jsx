import { FaLocationDot } from 'react-icons/fa6';

import LogoJatim from '../../assets/image/logopemrov-png.png';
import LogoJdihn from '../../assets/image/jdihn.png';
import LogoLpse from '../../assets/image/lpse.png';
import LogoLapor from '../../assets/image/lapor.png';

const Footer = () => {
  return (
    <div>
      <div className="footer mt-10 px-5 bg-dark text-white pb-5">
        <h1 className="font-semibold text-lg mx-auto mt-10">PEMPROV JATIM</h1>
        <div className="isi mx-auto">
          <div className="grid grid-cols-2 gap-x-16 gap-y-7 mx-auto items-center">
            <img src={LogoJatim} alt="" className="w-20" />
            <img src={LogoJdihn} alt="" className="w-20" />
            <img src={LogoLpse} alt="" className="w-20" />
            <img src={LogoLapor} alt="" className="w-20" />
          </div>
          <h1 className="font-semibold text-lg  mx-auto mt-10">KONTAK KAMI</h1>
          <div className="isi mx-auto">
            <div className="flex gap-3 text-sm mt-5">
              <FaLocationDot className="text-lg self-center" />
              <div className="font-light">
                Jl. Simpang Ijen No. 2 Oro-oro Dowo,
                <br />
                Kecamatan Klojen Kota Malang
                <div className="h-2 w-full bg-text"></div>
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <FaLocationDot className="text-lg self-center" />
              <div className="font-light">
                (0341) 551321
                <hr />
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <FaLocationDot className="text-lg self-center" />
              <div className="font-light">
                bakorwil3provjatim.dimalang@gmail.com
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
