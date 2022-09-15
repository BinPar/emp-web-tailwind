import React from 'react';

const BannerPromo: React.FC = () => (

        <div className="bg-primaryvariant h-[70px] text-white text-center tracking-wider flex flex-col justify-center">
        <p className="">Semana de la Fisioterapia, hasta 50% dto.</p>
        <div className="mt-2 text-xs font-light flex justify-center">
            <p>Promoción válida hasta el 15 de septiembre.</p>
            <a
                href="https://www.medicapanamericana.com/es/general/formacion/profesional-fisioterapeuta"
                className="uppercase pb-1 border-b border-white hover:bg-white"
            >
                Ver cursos.
            </a>
        </div>
    </div>

);
  
  export default BannerPromo;

