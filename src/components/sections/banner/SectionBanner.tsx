import React from 'react';
import Box from '../../icons/Box';
import Calendar from '../../icons/Calendar';
import Card from '../../icons/Card';
import Warranties from '../../icons/Warranties';
import Lock from '../../icons/Lock';

const SectionBanner: React.FC = () => (
  <section className="mt-2.5">
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
    <h1 className="w-2/4 p-5 m-auto my-10 text-center text-gray-500 text-xl font-semibold tracking-wider border-y border-yellowmenu">
      EDITORIAL MÉDICA LÍDER EN PUBLICACIONES Y FORMACIÓN MÉDICA
    </h1>
    <div className="w-full bg-darkgray text-white py-3">
      <ul className="flex gap-10 justify-between text-sm font-semibold leading-4 w-[calc(100%_-_150px)] m-auto">
        <li className="flex w-56 items-center">
          <Warranties className="w-8 mr-5" />
          <p className="w-[calc(100%_-_32px)]">GARANTÍA EDITORIAL MÉDICA PANAMERICANA</p>
        </li>
        <li className="flex w-56 items-center">
          <Box className="w-8 mr-5" />
          <p className="w-[calc(100%_-_32px)]">ENVIO GRÁTIS</p>
        </li>
        <li className="flex w-56 items-center">
          <Calendar className="w-8 mr-5" />
          <p className="w-[calc(100%_-_32px)]">
            HASTA 72 HORAS LABORABLES EN PENÍNSULA. HASTA 7 DÍAS LABORABLES EN CANARIAS Y BALEARES
          </p>
        </li>
        <li className="flex w-56 items-center">
          <Card className="w-8 mr-5" />
          <p className="w-[calc(100%_-_32px)]">
            TARJETA CRÉDITO/DÉBITO, PAYPAL O TRANSFERENCIA BANCARIA
          </p>
        </li>
        <li className="flex w-56 items-center">
          <Lock className="w-8 mr-5" />
          <p className="w-[calc(100%_-_32px)]">100% SEGURO</p>
        </li>
      </ul>
    </div>
  </section>
);

export default SectionBanner;
