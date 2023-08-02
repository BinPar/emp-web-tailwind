import React from 'react';
import Image from 'next/image';

import ModuleSelection from '../ModuleSelection';
import PillLink from '../items/PillLink';
import ProductAutor from '../items/ProductAutor';
import Ficha from '../items/Ficha';
import InfoAcordeon from '../items/InfoAcordeon';
import ProductSheet from './ProductSheet';
import Book from '../../icons/Book';
import DownLoad from '../../icons/DownLoad';

const ProductInfo: React.FC = () => {
  const isNew = true;
  return (
    <article className="lg:pl-12">
      <div className="mt-12 lg:mt-0 w-full flex">
        <div className="hidden md:flex flex-col items-center min-w-[250px] xl2:min-w-[350px] mr-10">
          <div className="w-[200px] min-w-[200px] lg:w-[250px] lg:min-w-[250px] xl2:w-[350px] xl2:min-w-[350px] mb-5">
            <Image alt="item" src="/img/cover.jpg" width="1038" height="1046" />
          </div>
          <button
            type="button"
            className="bg-primary text-white w-full rounded-full py-1 max-w-[150px] xl2:max-w-[250px] hover:bg-primaryvariant transition-all duration-300 flex items-center justify-center first-of-type:mb-3"
          >
            <Book className='w-5 h-5 text-white mr-2'/>
            Capítulo de muestra
          </button>
          <button
            type="button"
            className="bg-primary text-white w-full rounded-full py-1 max-w-[150px] xl2:max-w-[250px] hover:bg-primaryvariant transition-all duration-300 flex items-center justify-center first-of-type:mb-3"
          >
            <DownLoad className='w-5 h-5 text-white mr-2'/>
            Hoja Informativa
          </button>
        </div>
        <div className="lg:p-4">
          <ProductAutor />
          <h1 className="text-4xl lg:text-2.5xl xl:text-4xl text-gray-400 font-extralight tracking-[1px] text-center md:text-left">
            Electrocardiografía
          </h1>
          <h2 className="text-xl font-light text-gray-400 tracking-[.5px] mb-7 mt-1">
            Interpretación práctica del ECG
          </h2>
          <div className="block md:hidden w-[200px] min-w-[200px] lg:w-[250px] lg:min-w-[250px] m-auto mb-7 ">
            <Image alt="item" src="/img/cover.jpg" width="1038" height="1046" />
          </div>
          {isNew && (
            <p className="bg-yellowmenu text-primary font-extrabold tracking-[1px] text-2xs mb-3 py-1 px-3 rounded-full w-fit">
              NOVEDAD
            </p>
          )}

          <ProductSheet />
        </div>
      </div>
      <ModuleSelection className="lg:hidden block" />
      <InfoAcordeon />
    </article>
  );
};

export default ProductInfo;
