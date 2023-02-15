import React, { useState, useEffect } from 'react';
import ImageGroup from '../items/ImageGroup';
import InfoGroup from '../items/InfoGroup';

interface CollectionItemProps {
  src: string;
  title: string;
  author: string;
  type: string;
  initial: string;
  fullText: string;
  oldPrice: string;
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

const author = [
  '26 Obras',
  '37 Obras',
  '33 Obras',
  '44 Obras',
  '54 Obras',
  '26 Obras',
  '37 Obras',
  '33 Obras',
  '44 Obras',
  '54 Obras',
  '26 Obras',
  '37 Obras',
  '33 Obras',
  '44 Obras',
  '54 Obras',
  '26 Obras',
  '37 Obras',
  '33 Obras',
  '44 Obras',
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

const initial = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

const fullText = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

const oldPrice = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

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
const CollectionItem: React.FC<CollectionItemProps> = ({src, title, author, type, initial, fullText, oldPrice, currentPrice,
}) => (
  <li className="flex items-start pb-5 flex-1 lg:flex-col lg:text-center md:min-w-[calc(50%_-_20px)] lg:min-w-min">
    <ImageGroup src={src} type={type} />
    <InfoGroup
      title={title}
      author={author}
      type={type}
      initial={initial}
      fullText={fullText}
      oldPrice={oldPrice}
      currentPrice={`${currentPrice} / MES`}
    />
  </li>
);

const ItemCollection: React.FC = () => {
  const [itemsCollection, setItemsCollection] = useState<React.ReactNode>();

  useEffect(() => {
    setItemsCollection(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <CollectionItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            src={src[i]}
            title={title[i]}
            author={author[i]}
            type={type[i]}
            initial={initial[i]}
            fullText={fullText[i]}
            oldPrice={oldPrice[i]}
            currentPrice={currentPrice[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <article>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl2:grid-cols-5 xl:gap-16 gap-10">
        {itemsCollection}
      </ul>
    </article>
  );
};

export default ItemCollection;
