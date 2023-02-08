import React from 'react';
import Image from 'next/image';
import Search from '../../icons/Search';
import Cart from '../../icons/Cart';

const HeaderMiddle: React.FC = () => (
  <div className="flex items-end tracking-widest lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_150px)] m-auto">
    <a
      href="https://www.medicapanamericana.com/es"
      className="text-primary flex flex-col items-center w-56 min-w-[221px] lg2:min-w-[280px] mr-4 lg2:mr-8"
    >
      <Image
        width={608}
        height={155}
        alt="logo Editorial Médica Panamericana"
        src="/assets/anniversary.svg"
      />
    </a>
    <a
      href="https://www.medicapanamericana.com/es/preferencias"
      className="flex flex-col relative justify-end uppercase text-gray-700 font-semibold w-[150px] min-w-[150px] h-28 px-4 pb-3 bg-lightmidlegray text-xs mr-8"
    >
      <span className="text-center">selecciona tu perfil</span>
    </a>
    <form className="w-full flex">
      <input
        type="search"
        placeholder="Buscar..."
        id="search"
        className="w-full outline-none placeholder-gray-400 font-thin tracking-widest py-2 border-b border-gray-200"
        autoComplete="off"
      />
      <button type="button" className="text-gray-400">
        <Search className="w-8 min-w-8" />
      </button>
      <button type="button" className="text-greencart ml-8 flex items-center">
        <Cart className="w-8 min-w-8 mr-2" />
        <p className="text-greencart font-semibold">0</p>
      </button>
    </form>
  </div>
);

export default HeaderMiddle;
