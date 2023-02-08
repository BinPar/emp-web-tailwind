import React, { useState } from 'react';
import Image from 'next/image';
import MvNav from '../../icons/MvNav';
import SearchMv from '../../icons/SearchMv';
import MobileSearch from '../items/MobileSearch';
import CloseCircled from '../../icons/CloseCircled';
import NavigationOpen from '../items/NavigationOpen';
import Close from '../../icons/Close';
import NavContent from '../items/NavContent';
import CountrySelector from '../items/CountrySelector';
import NavListLinks from '../items/NavListLinks';

const HeaderMobile: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <>
      <div className="bg-primary">
        <div className="flex tracking-widest w-[calc(100%_-_50px)] justify-between items-center min-h-[60.5px] m-auto">
          <button
            type="button"
            className="w-8 text-white"
            onClick={(): void => setOpenNav(!openNav)}
          >
            <MvNav />
          </button>
          <div className="max-w-[221px] max-h-[56.5px] flex">
            <Image
              width={608}
              height={158}
              alt="Claim Editorial Médica Panamericana"
              src="/assets/empWhite.svg"
            />
          </div>
          <button
            type="button"
            className={`w-8 text-white${!openSearch ? ' block' : ' hidden'}`}
            onClick={(): void => setOpenSearch(!openSearch)}
          >
            <SearchMv />
          </button>
          <button
            type="button"
            className={`w-8 text-white${!openSearch ? ' hidden' : ' block'}`}
            onClick={(): void => setOpenSearch(!openSearch)}
          >
            <CloseCircled />
          </button>
        </div>
      </div>
      <MobileSearch className={`${openSearch ? 'block' : 'hidden'}`} />
      <NavigationOpen className={`${openNav ? 'left-0' : '-left-[100%]'}`}>
        <NavContent>
          <a
            className="bg-primary m-auto w-[70%] max-w-[300px] text-white flex items-end px-4 pb-3 justify-center h-20 uppercase text-1xs font-semibold transition-all duration-300 hover:bg-[#196692]"
            href="/es/preferencias"
          >
            <span>Selecciona tu perfil</span>
          </a>
          <CountrySelector />
          <NavListLinks />
        </NavContent>
        <button
          type="button"
          className=" bg-primary text-white max-h-[60px] w-16"
          onClick={(): void => setOpenNav(!openNav)}
        >
          <Close />
        </button>
      </NavigationOpen>
    </>
  );
};

export default HeaderMobile;
