import { useState, useEffect } from 'react';

import ImageGroup from './ImageGroup';
import InfoGroup from './InfoGroup';


interface NormalItemProps {
  src: string;
  title: string;
  author: string;
  type: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
}
const src = ['/img/pastilla2.jpg', '/img/pastilla3.jpg'];
const title = [
  'Experto en Medicina Transgénero',
  'Experto Universitario en Psiquiatría y Salud Mental para Atención Primaria',
];
const author = [
  'SEEN - Sociedad Española de Endocrinología y Nutrición,',
  'Gabriel Rubio Valladolid, Roberto Rodríguez Jiménez,',
];
const type = ['expertos', 'expertos'];
const initial = ['', 'N'];
const fullText = ['', 'novedad'];
const oldPrice = ['1.690', '1.690'];
const currentPrice = ['1.436,50', '1.436,50'];

const ItemNumber = 2;
// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const NormalItem: React.FC<NormalItemProps> = ({src, title, author, type, initial, fullText, oldPrice, currentPrice,
}) => (
  <li className="flex items-start pb-5 flex-1 lg:flex-col lg:text-center">
    <ImageGroup src={src} type={type} />
    <InfoGroup
      title={title}
      author={author}
      type={type}
      initial={initial}
      fullText={fullText}
      oldPrice={oldPrice}
      currentPrice={currentPrice}
    />
  </li>
);

const ItemNormal: React.FC = () => {
  const [itemsNormal, setItemsNormal] = useState<React.ReactNode>();

  useEffect(() => {
    setItemsNormal(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <NormalItem
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
    <ul className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-16">{itemsNormal}</ul>
  );
};

export default ItemNormal;
