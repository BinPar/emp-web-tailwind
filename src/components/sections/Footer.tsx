import React from 'react';
import Image from 'next/image';
import DivWrapper from './items/DivWrapper';

const footer: React.FC = () => (
  <footer className="bg-primary py-5 text-white">
    <DivWrapper className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] flex">
      <a href="#">
        <div className="max-w-[280px]">
          <Image
            width={608}
            height={410}
            alt="Claim Editorial Médica Panamericana"
            src="/assets/empWhite.svg"
          />
        </div>
      </a>
      <ul className="grid grid-cols-2">
        <li className="my-1 text-xs font-normal tracking-[1.2px]">
          <a href="#">Condiciones de la Licencia de Acceso</a>
        </li>
        <li className="my-1 text-xs font-normal tracking-[1.2px]">
          <a href="#">Condiciones de la Licencia de Acceso</a>
        </li>
        <li className="my-1 text-xs font-normal tracking-[1.2px]">
          <a href="#">Condiciones de la Licencia de Acceso</a>
        </li>
        <li className="my-1 text-xs font-normal tracking-[1.2px]">
          <a href="#">Condiciones de la Licencia de Acceso</a>
        </li>
        <li className="my-1 text-xs font-normal tracking-[1.2px]">
          <a href="#">Condiciones de la Licencia de Acceso</a>
        </li>
        <li className="my-1 text-xs font-normal tracking-[1.2px]">
          <a href="#">Condiciones de la Licencia de Acceso</a>
        </li>
        <li className="my-1 text-xs font-normal tracking-[1.2px]">
          <a href="#">Condiciones de la Licencia de Acceso</a>
        </li>
        <li className="my-1 text-xs font-normal tracking-[1.2px]">
          <a href="#">Condiciones de la Licencia de Acceso</a>
        </li>
        
      </ul>
    </DivWrapper>
  </footer>
);

export default footer;
