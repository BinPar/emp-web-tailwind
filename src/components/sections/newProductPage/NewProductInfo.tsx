import React from 'react';
import Image from 'next/image';

import ProductAutor from '../items/ProductAutor';
import InfoAcordeon from '../items/InfoAcordeon';
import ProductSheet from './ProductSheet';
import Book from '../../icons/Book';
import DownLoad from '../../icons/DownLoad';
import NewOrder from './NewOrder';
import CollectionDemoInfo from './CollectionDemoInfo';

interface ProductInfoProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  isCollection?: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ method, value, isCollection }) => {
  const isNew = !isCollection ? true : false;
  return (
    <article className="xl2:pl-12">
      <div className="mt-5 lg:mt-0 w-full flex">
        <div className="hidden lg2:flex flex-col items-center min-w-[250px] xl2:min-w-[350px] lg:mr-5 xl:mr-10">
          <div className="w-[200px] min-w-[200px] lg:w-[250px] lg:min-w-[250px] xl2:w-[350px] xl2:min-w-[350px] mb-5">
            <Image
              alt="item"
              src={!isCollection ? '/img/cover.jpg' : '/img/col.jpg'}
              width="1038"
              height="1046"
            />
          </div>
          {!isCollection && (
            <>
              <button
                type="button"
                className="bg-primary text-white w-full rounded-full py-1 min-w-full lg:max-w-[150px] xl2:max-w-[250px] hover:bg-primaryvariant transition-all duration-300 flex items-center justify-center first-of-type:mb-3"
              >
                <Book className="w-5 h-5 text-white mr-2" />
                Capítulo de muestra
              </button>
              <button
                type="button"
                className="bg-primary text-white w-full rounded-full py-1 min-w-full lg:max-w-[150px] xl2:max-w-[250px] hover:bg-primaryvariant transition-all duration-300 flex items-center justify-center first-of-type:mb-3"
              >
                <DownLoad className="w-5 h-5 text-white mr-2" />
                Hoja Informativa
              </button>
            </>
          )}
        </div>
        <div className="lg:p-4 max-w-full w-full">
          {!isCollection && <ProductAutor />}
          <h1
            className={`text-2.5xl xl:text-4xl text-gray-400 font-extralight tracking-[1px] text-center lg2:text-left ${
              isCollection && ' mb-7'
            }`}
          >
            {!isCollection
              ? 'Electrocardiografía'
              : 'Mi Eureka - Biblioteca de Anestesiología y Reanimación'}
          </h1>
          {!isCollection && (
            <h2 className="text-xl font-light text-gray-400 tracking-[.5px] mb-7 mt-1 text-center lg2:text-left">
              Interpretación práctica del ECG
            </h2>
          )}

          <div className="block lg2:hidden w-[200px] min-w-[200px] lg:w-[250px] lg:min-w-[250px] m-auto mb-7 ">
            <Image
              alt="item"
              src={!isCollection ? '/img/cover.jpg' : '/img/col.jpg'}
              width="1038"
              height="1046"
            />
          </div>
          {isNew && (
            <p className="bg-yellowmenu text-primary font-extrabold tracking-[1px] text-2xs mb-3 py-1 px-3 rounded-full w-fit">
              NOVEDAD
            </p>
          )}
          {!isCollection ? <ProductSheet /> : <ProductSheet isCollection />}
          {isCollection && <CollectionDemoInfo/>}
          {!isCollection && (
            <div className="flex flex-col w-fit m-auto sm:flex-row gap-4 lg2:hidden justify-center my-5">
              <button
                type="button"
                className="bg-primary text-white w-full rounded-full py-1 min-w-[250px] max-w-[250px] hover:bg-primaryvariant transition-all duration-300 flex items-center justify-center"
              >
                <Book className="w-5 h-5 text-white mr-2" />
                Capítulo de muestra
              </button>
              <button
                type="button"
                className="bg-primary text-white w-full rounded-full py-1 min-w-[250px] max-w-[250px] hover:bg-primaryvariant transition-all duration-300 flex items-center justify-center"
              >
                <DownLoad className="w-5 h-5 text-white mr-2" />
                Hoja Informativa
              </button>
            </div>
          )}
          {!isCollection && (
            <div className="hidden border-[1.5px] border-primary rounded-xl sm:grid grid-cols-[2fr,_1fr] text-center overflow-hidden mt-5">
              <p className="text-gray-500 tracking-[1.2px] leading-5 font-light py-2">
                También puedes obtener esta obra <br />
                como parte de nuestras colecciones
              </p>
              <button
                type="button"
                className="bg-primarylight border-l-[1.5px] border-l-primary text-primary text-sm font-bold tracking-[.8px] pt-[1px] uppercase relative leading-4 group"
              >
                <span className="group-hover:text-white transition-all duration-[320ms] relative z-10">
                  ver colecciones mieureka
                </span>
                <span className="bg-primary w-0 h-full absolute group-hover:w-full transition-all duration-300 top-0 left-0" />
              </button>
            </div>
          )}
        </div>
      </div>
      <NewOrder method={method} value={value} className="lg:hidden block" />
      <InfoAcordeon />
    </article>
  );
};

export default ProductInfo;
