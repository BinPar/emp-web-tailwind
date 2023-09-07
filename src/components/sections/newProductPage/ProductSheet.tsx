import { useEffect, useState } from 'react';
import Windows from '../../icons/Windows';

import Ios from '../../icons/Ios';
import Android from '../../icons/Android';
import Mac from '../../icons/Mac';
import Html from '../../icons/Html';
import Web from '../../icons/Web';

interface NormalItemProps {
  title: string;
  info: string;
}
interface CollectionItemProps {
  isCollection?: boolean;
}

const title = ['ISBN', 'ENCUADERNACION', 'PAGINAS', 'MEDIDAS', 'AÑO'];
const info = ['9788491101000', 'Rustica', '350', '17 x 24cm', '© 2023'];
const ItemNumber = 6;

const title2 = ['ISBN', 'PAGINAS', 'AÑO'];
const info2 = ['9788491101000', '350', '© 2023'];
const ItemNumber2 = 3;

const Info: React.FC<NormalItemProps> = ({ title, info }) => (
  <li>
    <p className="text-2.5xs tracking-widest uppercase text-secondarygray font-light">
      {title}
      <span className="normal-case font-bold text-1xs ml-2">{info}</span>
    </p>
  </li>
);
const Info2: React.FC<NormalItemProps> = ({ title, info }) => (
  <li>
    <p className="text-2.5xs tracking-widest uppercase text-secondarygray font-light">
      {title}
      <span className="normal-case font-bold text-1xs ml-2">{info}</span>
    </p>
  </li>
);

const ProductSheet: React.FC<CollectionItemProps> = ({ isCollection }) => {
  const [fichaInfo, setFichaInfo] = useState<React.ReactNode>();
  const [fichaInfo2, setFichaInfo2] = useState<React.ReactNode>();

  useEffect(() => {
    setFichaInfo(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <Info
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            title={title[i]}
            info={info[i]}
          />
        )),
    );
  }, []);

  useEffect(() => {
    setFichaInfo2(
      Array(ItemNumber2)
        .fill(0)
        .map((_, i) => (
          <Info2
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            title={title2[i]}
            info={info2[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
   <>
      {!isCollection ? (
         <div className="pb-2 sm:p-6 sm:bg-primarylight sm:rounded-xl flex gap-5 sm:gap-0 w-[calc(100%_+_25px)] xs2:w-full overflow-x-auto">
          <div className="rounded-lg sm:rounded-none min-w-[250px] sm:min-w-[auto] w-full bg-primarylight p-6 sm:py-0 sm:px-5 sm:first-of-type:border-r-[2px] first-of-type:border-gray-200">
            <h4 className="text-primary font-bold tracking-[.5px] mb-1">DUO</h4>
            <p className="text-secondarygray font-medium text-1xs leading-4 mb-5">
              El formato DÚO incluye la obra en papel y en digital, versión que aporta contenidos
              enriquecidos para el lector.
            </p>
            <ul>{fichaInfo}</ul>
          </div>
          <div className="rounded-lg sm:rounded-none min-w-[250px] sm:min-w-[auto] w-full bg-primarylight p-6 sm:py-0 sm:px-5 sm:first-of-type:border-l-[2px] first-of-type:border-gray-200">
            <h4 className="text-primary font-bold tracking-[.5px] mb-1">DIGITAL</h4>
            <p className="text-secondarygray font-medium text-1xs leading-4 mb-5">
              El formato digital de una publicación incluye contenidos interactivos y material
              multimedia para el enriquecimiento de su lectura.
            </p>
            <ul>{fichaInfo2}</ul>
            <p className="text-2.5xs tracking-widest uppercase text-secondarygray font-light mb-2 mt-[2px]">
              compatibilidad
            </p>
            <ul className="text-secondarygray flex gap-2">
              <li className="flex flex-col justify-center items-center">
                <Windows className="w-6 h-6 mb-1" />
                <span className="text-2xs ">Windows</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Mac className="w-6 h-6 mb-1" />
                <span className="text-2xs ">Mac</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Ios className="w-6 h-6 mb-1" />
                <span className="text-2xs ">iOS</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Android className="w-6 h-6 mb-1" />
                <span className="text-2xs ">Android</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="pb-2 sm:p-6 sm:bg-primarylight sm:rounded-xl flex gap-5 sm:gap-0 text-center lg:text-left w-full overflow-x-auto">
          <div className="rounded-lg sm:rounded-none sm:min-w-[auto] w-full bg-primarylight p-6 sm:py-0 sm:px-5">
            <h4 className="text-primary font-bold tracking-[.5px] mb-1">COLECCIÓN</h4>
            <p className="text-2.5xs tracking-widest uppercase text-secondarygray font-light">
              Número de obras
              <span className="normal-case font-bold text-1xs ml-2">24</span>
            </p>
            <p className="text-2.5xs tracking-widest uppercase text-secondarygray font-light mb-3 mt-1">
              compatibilidad
            </p>
            <ul className="text-secondarygray flex-wrap xs1:flex-nowrap m-auto max-w-[180px] xs1:max-w-none justify-between xs1:justify-center lg:justify-start flex gap-4">
              <li className="flex flex-col justify-center items-center">
                <Html className="w-7 h-7 mb-1" />
                <span className="text-2.5xs ">HTML5</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Windows className="w-7 h-7 mb-1" />
                <span className="text-2.5xs ">Windows</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Mac className="w-7 h-7 mb-1" />
                <span className="text-2.5xs ">Mac</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Ios className="w-7 h-7 mb-1" />
                <span className="text-2.5xs ">iOS</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Android className="w-7 h-7 mb-1" />
                <span className="text-2.5xs ">Android</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Web className="w-7 h-7 mb-1" />
                <span className="text-2.5xs ">Web</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductSheet;
