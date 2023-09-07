import { useEffect, useState } from 'react';
import CollectionIncluded from './CollectionIncluded';
import React from 'react';

interface CollectionIncludedListProps {
  src: string;
  title: string;
  author: string;
  href: string;
  hrefAuthor: string;
}
const src = [
  '/img/included1.jpg',
  '/img/included2.jpg',
  '/img/included3.jpg',
  '/img/included4.jpg',
  '/img/included5.jpg',
  '/img/included6.jpg',
  '/img/included7.jpg',
  '/img/included8.jpg',
  '/img/included1.jpg',
  '/img/included2.jpg',
  '/img/included3.jpg',
  '/img/included4.jpg',
  '/img/included5.jpg',
  '/img/included6.jpg',
  '/img/included7.jpg',
  '/img/included8.jpg',
  '/img/included1.jpg',
  '/img/included2.jpg',
  '/img/included3.jpg',
  '/img/included4.jpg',
  '/img/included5.jpg',
  '/img/included6.jpg',
  '/img/included7.jpg',
  '/img/included8.jpg',
];
const href = [
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
  '/productPage',
];
const hrefAuthor = [
  '/authorPage',
  '/authorPage',
  '/authorPage',
  '/authorPage',
  '/authorPage',
  '/authorPage',
  '/authorPage',
  '/authorPage',
];
const title = [
  'Mi Eureka - Biblioteca de Anatomía',
  'Mi Eureka - Biblioteca de Anestesiología y Reanimación',
  'Mi Eureka - Biblioteca de Cardiología',
  'Mi Eureka - Biblioteca de Cirugía',
  'Mi Eureka - Biblioteca de Endocrinología y Nutrición',
  'Mi Eureka - Biblioteca de Anatomía',
  'Mi Eureka - Biblioteca de Anestesiología y Reanimación',
  'Mi Eureka - Biblioteca de Cardiología',
  'Mi Eureka - Biblioteca de Anatomía',
  'Mi Eureka - Biblioteca de Anestesiología y Reanimación',
  'Mi Eureka - Biblioteca de Cardiología',
  'Mi Eureka - Biblioteca de Cirugía',
  'Mi Eureka - Biblioteca de Endocrinología y Nutrición',
  'Mi Eureka - Biblioteca de Anatomía',
  'Mi Eureka - Biblioteca de Anestesiología y Reanimación',
  'Mi Eureka - Biblioteca de Cardiología',
  'Mi Eureka - Biblioteca de Anatomía',
  'Mi Eureka - Biblioteca de Anestesiología y Reanimación',
  'Mi Eureka - Biblioteca de Cardiología',
  'Mi Eureka - Biblioteca de Cirugía',
  'Mi Eureka - Biblioteca de Endocrinología y Nutrición',
  'Mi Eureka - Biblioteca de Anatomía',
  'Mi Eureka - Biblioteca de Anestesiología y Reanimación',
  'Mi Eureka - Biblioteca de Cardiología',
];
export const author = [
  'Enrique Pérez de la Blanca Cobos, José Antonio Domínguez Arroyo, Luis Rodríguez-Tabernero Martí',
  'Joanna Kotcher Fuller',
  'Mijna Hadders-Algra, Kirsten R. Heineman',
  'MDiego Redolar Ripoll',
  'Gabriel Rubio Valladolid, Guillermo Lahera Forteza, Roberto Rodríguez Jiménez,',
  'Eugenio Daniel Martínez Hurtado, María Luisa Mariscal Flores, Antonio García Rueda',
  'María Isabel Colado Megía, Magí Farré Albaladejo',
  'Manuel José Vázquez Lima, José Ramón Casal Codesido',
  'Enrique Pérez de la Blanca Cobos, José Antonio Domínguez Arroyo, Luis Rodríguez-Tabernero Martí',
  'Joanna Kotcher Fuller',
  'Mijna Hadders-Algra, Kirsten R. Heineman',
  'MDiego Redolar Ripoll',
  'Gabriel Rubio Valladolid, Guillermo Lahera Forteza, Roberto Rodríguez Jiménez,',
  'Eugenio Daniel Martínez Hurtado, María Luisa Mariscal Flores, Antonio García Rueda',
  'María Isabel Colado Megía, Magí Farré Albaladejo',
  'Manuel José Vázquez Lima, José Ramón Casal Codesido',
  'Enrique Pérez de la Blanca Cobos, José Antonio Domínguez Arroyo, Luis Rodríguez-Tabernero Martí',
  'Joanna Kotcher Fuller',
  'Mijna Hadders-Algra, Kirsten R. Heineman',
  'MDiego Redolar Ripoll',
  'Gabriel Rubio Valladolid, Guillermo Lahera Forteza, Roberto Rodríguez Jiménez,',
  'Eugenio Daniel Martínez Hurtado, María Luisa Mariscal Flores, Antonio García Rueda',
  'María Isabel Colado Megía, Magí Farré Albaladejo',
  'Manuel José Vázquez Lima, José Ramón Casal Codesido',
];



const CollectionIncludedList: React.FC = () => {
  const [itemLi, setItemLi] = useState<React.ReactNode>();
  const [itemNumber, setItemNumber] = useState(8)
  console.log(itemNumber)

  useEffect(() => {
    setItemLi(
      Array(itemNumber)
        .fill(0)
        .map((_, i) => (
          <CollectionIncluded
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            src={src[i]}
            title={title[i]}
            author={author[i]}
            href={href[i]}
            hrefAuthor={hrefAuthor[i]}
          />
        )),
    );
  }, [itemNumber]);

  return (
    <>
      <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-5 lg:gap-y-10 gap-x-2 mt-12 mb-10">{itemLi}</ul>
      <button onClick={(): void => setItemNumber(24)} type="button" className="uppercase text-sm text-primary tracking-[1px] border border-primary px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 rounded-md block m-auto mb-10">
        ver todas las obras incluidas
      </button>
    </>
  );
};

export default CollectionIncludedList;
