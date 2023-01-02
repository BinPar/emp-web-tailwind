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
  <li className="flex gap-4 items-start pb-5 lg:min-w-[356px]">
    <NormalLink href="#" className="block min-w-[100px] w-[100px] lg:w-[155px] lg:min-w-[145px] text-center">
      <Image alt="item" src={src} width="1038" height="1046" />
      <TypeLink href="#" className='lg:hidden inline'>{type}</TypeLink>
    </NormalLink>
    <div className='pt-1 w-full'>
      <NormalLink href="#" className='mb-2 block'>
        <BaseText>{title}</BaseText>
      </NormalLink>
      <NormalLink href="#" className='mb-2 block'>
        <TinyText className='group-hover:text-primary'>{author}</TinyText>
      </NormalLink>
      <div className="flex items-center gap-2 mb-4">
        <TypeLink href="#" className='hidden lg:inline'>{type}</TypeLink>
        {initial === '' ? null : <NewItemBadge className='hidden lg:block' initials={initial} fullText={fullText} />}
      </div>
      <InfoWrap>
        <Price className='mt-0 relative'>
          <OldPrice>{oldPrice}</OldPrice>
          <CurrentPrice>{currentPrice}</CurrentPrice>
          {initial === '' ? null : <NewItemBadge className='block lg:hidden absolute left-44' initials={initial} fullText={fullText} />}
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
    <ul className="flex flex-col md:flex-row lg:flex-col lg:pl-12 lg:ml-12 lg:pt-5 pt-8 mt-8 border-t lg:border-t-0 lg:border-l border-gray-200 gap-6">{itemsShort}</ul>
  );
};

export default ItemShort;
