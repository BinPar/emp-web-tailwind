import React from 'react';
import Image from 'next/image';

import ArrowDown from '../../icons/ArrowDown';
import Phone from '../../icons/Phone';
import User from '../../icons/User';



const HeaderTop: React.FC = () => (

    <div className="bg-lightgray absolute w-full">
    <div className="flex flex-row items-center justify-end text-secondarygray text-2xs uppercase h-[35px] tracking-widest w-[calc(_100%_-_150px)] m-auto">
      <div>
        <a href="/es/somos">Editorial</a>
        <a className="ml-2.5 pl-2.5 border-l border-secondarygray" href="/es/autores">
          Autores
        </a>
        <a
          href="https://aula.campuspanamericana.com/"
          className="ml-2.5 pl-2.5 border-l border-primary"
        >
          Campus
        </a>
      </div>
      <div className="text-primary uppercase tracking-widest ml-8 flex items-center">
        <button type="button" className="uppercase tracking-widest flex items-center">

        <User className='mr-2.5 w-4 h-4'/>
          Iniciar sesión
        </button>
        <a
          className="h-4 ml-2.5 pl-2.5 border-l-2 border-primary"
          rel="nofollow"
          href="/es/registrarme"
        >
          Registrarse
        </a>
        <a
          className="pl-2.5 pr-2.5 border-r-2 border-primary flex"
          rel="nofollow"
          href="/es/contacto"
        > 
          <Phone className='w-4 h-4 mr-2.5'/>
          Contacto
        </a>
        <button type='button' className="flex pl-2.5 items-center">
          <Image src="/img/spain.png" width={15} height={15} alt="es" className="aspect-square w-4 rounded-xl" />

          <ArrowDown className='ml-1.5 w-3.5'/>
        </button>
      </div>
    </div>
  </div>

);
  
  export default HeaderTop;