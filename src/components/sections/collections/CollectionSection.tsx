import React, { useState, useEffect } from 'react';

import ItemColecciones from './ItemColecciones';

interface CollectionsListProps {
  src: string;
  title: string;
  quantity: number;
  type: string;
  href: string;
  currentPrice: string;
}
const src = [
  '/img/collection1.jpg',
  '/img/collection2.jpg',
  '/img/collection3.jpg',
  '/img/collection4.jpg',
  '/img/collection5.jpg',
  '/img/collection1.jpg',
  '/img/collection2.jpg',
  '/img/collection3.jpg',
  '/img/collection4.jpg',
  '/img/collection5.jpg',
  '/img/collection1.jpg',
  '/img/collection2.jpg',
  '/img/collection3.jpg',
  '/img/collection4.jpg',
  '/img/collection5.jpg',
  '/img/collection1.jpg',
  '/img/collection2.jpg',
  '/img/collection3.jpg',
  '/img/collection4.jpg',
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
  'Mi Eureka - Biblioteca de Cirugía',
  'Mi Eureka - Biblioteca de Endocrinología y Nutrición',
  'Mi Eureka - Biblioteca de Anatomía',
  'Mi Eureka - Biblioteca de Anestesiología y Reanimación',
  'Mi Eureka - Biblioteca de Cardiología',
  'Mi Eureka - Biblioteca de Cirugía',
  'Mi Eureka - Biblioteca de Endocrinología y Nutrición',
  'Mi Eureka - Biblioteca de Anatomía',
  'Mi Eureka - Biblioteca de Anestesiología y Reanimación',
  'Mi Eureka - Biblioteca de Cardiología',
  'Mi Eureka - Biblioteca de Cirugía',
];

const quantity = [
  26,
  37,
  33,
  44,
  54,
  26,
  37,
  33,
  44,
  54,
  26,
  37,
  33,
  44,
  54,
  26,
  37,
  33,
  44,
];

const type = [
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
  'colecciones',
];

const currentPrice = [
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
  '24,90',
];

const ItemNumber = React.Children.count(src);
// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const CollectionLi: React.FC<CollectionsListProps> = ({src, href, title, quantity, type, currentPrice,
}) => (
  <li className="flex items-start pb-5 flex-1 flex-col text-center">
        <ItemColecciones src={src} href={href} title={title} quantity={quantity} type={type} currentPrice={currentPrice}/>
  </li>
);

const ItemsCollections: React.FC = () => {
  const [liCollection, setLiCollection] = useState<React.ReactNode>();

  useEffect(() => {
    setLiCollection(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <CollectionLi
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            src={src[i]}
            href={href[i]}
            title={title[i]}
            quantity={quantity[i]}
            type={type[i]}
            currentPrice={currentPrice[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <article>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl2:grid-cols-5 xl:gap-16 gap-10">
        {liCollection}
      </ul>
    </article>
  );
};

export default ItemsCollections;
