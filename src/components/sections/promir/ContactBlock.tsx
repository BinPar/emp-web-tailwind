import FaceBook from '../../icons/FaceBook';
import HeadPhone from '../../icons/HeadPhone';
import Mail from '../../icons/Mail';
import Phone from '../../icons/Phone';
import Twitter from '../../icons/Twitter';
import Youtube from '../../icons/Youtube';

import Image from 'next/image';

const ContactBlock: React.FC = () => (
  <div className="bg-primary p-10 flex justify-center items-center w-full lg:w-2/4">
    <div>
      <div className="text-center mb-6">
        <HeadPhone className="text-white w-16 m-auto mb-3" />
        <p className="text-white uppercase text-xs font-semibold mb-3">
          lunes a jueves
          <span className="block font-thin mt-1 text-base">08:00 - 17:00</span>
        </p>
        <p className="text-white uppercase text-xs font-semibold">
          viernes
          <span className="block font-thin mt-1 text-base">08:00 - 15:00</span>
        </p>
      </div>
      <div className="text-center mb-6">
        <Mail className="text-white w-16 m-auto mb-1" />
        <p className="block font-light tracking-[1px] text-sm text-white">info@promir.es</p>
      </div>
      <div className="text-center mb-6">
        <Phone className="text-white w-16 m-auto mb-3" />
        <p className="block font-light tracking-[1px] text-sm text-white">91 131 78 00</p>
      </div>
      <div className="flex gap-5 pt-6 border-t border-white max-w-[190px] m-auto justify-between">
        <a href="#">
          <FaceBook className="w-6 text-white" />
        </a>
        <a href="#">
          <Twitter className="w-6 text-white" />
        </a>
        <a href="#">
          <Image width={24} height={24} alt="instagram" src="/img/insta.svg" />
        </a>
        <a href="#">
          <Youtube className="w-6 text-white" />
        </a>
      </div>
    </div>
  </div>
);
export default ContactBlock;
