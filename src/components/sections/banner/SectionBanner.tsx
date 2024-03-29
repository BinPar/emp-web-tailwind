import React from 'react';
import Box from '../../icons/Box';
import Calendar from '../../icons/Calendar';
import Card from '../../icons/Card';
import Warranties from '../../icons/Warranties';
import Lock from '../../icons/Lock';

const SectionBanner: React.FC = () => (
  <section className="lg:mt-2.5">
    <a
      href="https://www.medicapanamericana.com/es/general/formacion/profesional-fisioterapeuta"
      className="h-full w-full"
    >
      <div className="bg-slide h-[430px] w-full bg-center bg-cover" />
    </a>
    <div className="flex justify-center mt-2.5">
      <span className="w-2 h-2 bg-primary variant rounded-md mr-5" />
      <span className="w-2 h-2 bg-slate-300 rounded-md mr-5" />
      <span className="w-2 h-2 bg-slate-300 rounded-md mr-5" />
      <span className="w-2 h-2 bg-slate-300 rounded-md mr-5" />
      <span className="w-2 h-2 bg-slate-300 rounded-md mr-5" />
      <span className="w-2 h-2 bg-slate-300 rounded-md" />
    </div>
    <h1 className="lg:w-2/4 p-5 mx-6 lg:m-auto !my-10 text-center text-gray-500 text-xl font-semibold tracking-wider border-y border-yellowmenu">
      EDITORIAL MÉDICA LÍDER EN PUBLICACIONES Y FORMACIÓN MÉDICA
    </h1>
    <div className="w-full bg-darkgray text-white text-2xs lg:text-xs font-semibold leading-4 py-3 px-3 lg:px-[75px]">
      <div className='flex lg:gap-10 justify-between max-w-[1105px] m-auto'>
        <div className="flex min-w-[153px] border-r border-r-white border-opacity-50 pr-2 lg:pr-0 lg:min-w-[210px] max-w-[224px] items-center mb-3">
          <Warranties className="w-8 mr-5" />
          <p className="w-[calc(100%_-_32px)]">GARANTÍA EDITORIAL MÉDICA PANAMERICANA</p>
        </div>
        <ul className="flex gap-10 justify-between overflow-auto ml-1 pb-3 pl-6 lg:pl-0 lg:ml-0 scrollClass">
          <li className="flex items-center min-w-[115px] lg:min-w-[132px] lg:max-w-[300px]">
            <Box className="w-8 mr-5" />
            <p className="w-[calc(100%_-_32px)]">ENVIO GRÁTIS</p>
          </li>
          <li className="flex items-center min-w-[244px] lg:max-w-[244px]">
            <Calendar className="w-8 mr-5" />
            <p className="w-[calc(100%_-_32px)]">
              HASTA 72 HORAS LABORABLES EN PENÍNSULA. HASTA 7 DÍAS LABORABLES EN CANARIAS Y BALEARES
            </p>
          </li>
          <li className="flex items-center min-w-[180px] lg:min-w-[210px] lg:max-w-[210px]">
            <Card className="w-8 mr-5" />
            <p className="w-[calc(100%_-_32px)]">
              TARJETA CRÉDITO/DÉBITO, PAYPAL O TRANSFERENCIA BANCARIA
            </p>
          </li>
          <li className="flex items-center min-w-[117px] lg:min-w-[135px] lg:max-w-[300px]">
            <Lock className="w-8 mr-5" />
            <p className="w-[calc(100%_-_32px)]">100% SEGURO</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default SectionBanner;
