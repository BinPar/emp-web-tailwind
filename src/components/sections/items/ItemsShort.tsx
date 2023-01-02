import Image from 'next/image';
import { useState, useEffect } from 'react';
import BaseText from './BaseText';
import CurrentPrice from './CurrentPrice';
import InfoWrap from './InfoWrap';
import NewItemBadge from './NewItemBadge';
import NormalLink from './NormalLink';
import OldPrice from './OldPrice';
import Price from './Price';
import TinyText from './TinyText';
import TypeLink from './TypeLink';

interface ShortItemProps {
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
    '/img/pastilla2.jpg', 
    '/img/pastilla3.jpg'
];
const title = [
    'Experto en Imagen Cardíaca', 
    'Experto en Resonancia Magnética Musculoesquelética'
];
const author = [
    'SEICAT - Sociedad Española de Imagen Cardiotorácica',
    'Fernando Ruiz Santiago, Jade García Espinosa,',
];
const type = [
    'expertos', 
    'expertos'
];
const initial = ['', 'NE'];
const fullText = ['', 'nueva edición'];
const oldPrice = ['1.590', '1.690'];
const currentPrice = ['1.351,50', '1.436,50'];

const ItemNumber = 2;
// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const ShortItem: React.FC<ShortItemProps> = ({src, title, author, type, initial, fullText, oldPrice, currentPrice}) => (
  <li className="flex gap-4 items-start pb-5 min-w-[356px]">
    <NormalLink href="#" className="block w-[155px] min-w-[155px]">
      <Image alt="item" src={src} width="1038" height="1046" />
    </NormalLink>
    <div className='pt-1'>
      <NormalLink href="#" className='mb-2 block'>
        <BaseText>{title}</BaseText>
      </NormalLink>
      <NormalLink href="#" className='mb-2 block'>
        <TinyText>{author}</TinyText>
      </NormalLink>
      <div className="flex items-center gap-2 mb-4">
        <TypeLink href="#">{type}</TypeLink>
        {initial === '' ? null : <NewItemBadge initials={initial} fullText={fullText} />}
      </div>
      <InfoWrap>
        <Price className='mt-0'>
          <OldPrice>{oldPrice}</OldPrice>
          <CurrentPrice>{currentPrice}</CurrentPrice>
        </Price>
      </InfoWrap>
    </div>
  </li>
);

const ItemShort: React.FC = () => {
  const [itemsShort, setItemsShort] = useState<React.ReactNode>();

  useEffect(() => {
    setItemsShort(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <ShortItem
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
    <ul className="flex flex-col pl-12 ml-12 pt-5 border-l border-gray-200 gap-10">{itemsShort}</ul>
  );
};

export default ItemShort;
