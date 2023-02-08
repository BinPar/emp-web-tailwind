import React, { useState } from 'react';
import Close from '../../icons/Close';

const BannerPromo: React.FC = () => {
  const [closeBanner, setCloseBanner] = useState<boolean>(false);
  return (
    <div
      className={`bg-primaryvariant h-[70px] text-white text-center px-6 tracking-wider flex-col justify-center relative${
        closeBanner ? ' hidden' : ' flex'
      }`}
    >
      <p className="text-base">Ya está disponible Mi Eureka.</p>
      <div className="text-2.5xs font-light flex justify-center items-center">
        <p>Disfruta 30 días gratis de la biblioteca que siempre quisiste tener.</p>
        <a
          href="https://www.medicapanamericana.com/es/general/formacion/profesional-fisioterapeuta"
          className="hidden lg:inline uppercase border-b border-white hover:bg-white hover:text-primary p-1"
        >
          Lo quiero
        </a>
      </div>
      <button
        type="button"
        className="w-8 absolute right-0"
        onClick={(): void => setCloseBanner(!closeBanner)}
      >
        <Close />
      </button>
    </div>
  );
};

export default BannerPromo;
