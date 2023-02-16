import { useState, useEffect } from 'react';
import Image from 'next/image';

import Close from '../../icons/Close';

interface CountryProps {
  value: string;
  title: string;
}
const value = [
  'mx',
  'es',
  'co',
  'ar',
  'af',
  'al',
  'de',
  'ad',
  'ao',
  'ai',
  'ag',
  'an',
  'aq',
  'sa',
  'dz',
  'am',
  'aw',
  'au',
  'at',
  'az',
  'bs',
  'bh',
];

const title = [
  'México',
  'España',
  'Colombia',
  'Argentina',
  'Afganistán',
  'Albania',
  'Alemania',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua/Barbuda',
  'Antillas hol.',
  'Antártida',
  'Arabia Saudí',
  'Argelia',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Bahamas',
  'Barbados',
  'Belice',
];
const ItemNumber = 22;

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const CountryItem: React.FC<CountryProps> = ({ value, title }) => (
  <li className="mt-5 text-center text-gray-400 hover:text-primary text-sm">
    <button type="button" value={value}>
      {title}
    </button>
  </li>
);

const CountrySelector: React.FC = () => {
  const [openCountry, setOpenCountry] = useState<boolean>(false);
  const [itemsCountry, setItemsCountry] = useState<React.ReactNode>();
  useEffect(() => {
    setItemsCountry(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <CountryItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            value={value[i]}
            title={title[i]}
          />
        )),
    );
  }, []);

  return (
    <>
      <div className="mt-3 pl-3 border-b border-gray-200 h-16 flex">
        <button
          type="button"
          className="flex pl-2.5 items-center text-1xs text-primary font-semibold"
          onClick={(): void => setOpenCountry(!openCountry)}
        >
          <div className="border-2 border-primary p-1 w-8 h-8 rounded-full mr-3">
            <Image
              src="/img/spain.png"
              width={30}
              height={30}
              alt="es"
              className="aspect-square w-4 rounded-xl"
            />
          </div>
          ES_ISO
        </button>
      </div>
      <div
        className={`h-[100vh] border-2 border-white fixed w-full top-0 bg-white${
          openCountry ? ' block' : ' hidden'
        }`}
      >
        <div className="bg-primary p-4 flex justify-between">
          <p className="font-extralight tracking-[2px] text-white">ELIGE TU PAÍS</p>
          <button
            className="text-white w-6"
            type="button"
            onClick={(): void => setOpenCountry(!openCountry)}
          >
            <Close />
          </button>
        </div>
        <ul className="max-h-[calc(100vh_-_78px)] overflow-auto">{itemsCountry}</ul>
      </div>
    </>
  );
};

export default CountrySelector;
