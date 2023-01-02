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
const src = [
    '/img/pastilla2.jpg', 
    '/img/pastilla3.jpg'
];
const title = [
    'Experto en Medicina Transgénero', 
    'Experto Universitario en Psiquiatría y Salud Mental para Atención Primaria'
];
const author = [
    'SEEN - Sociedad Española de Endocrinología y Nutrición,',
    'Gabriel Rubio Valladolid, Roberto Rodríguez Jiménez,',
];
const type = [
    'expertos', 
    'expertos'
];
const initial = ['', 'N'];
const fullText = ['', 'novedad'];
const oldPrice = ['1.690', '1.690'];
const currentPrice = ['1.436,50', '1.436,50'];

const ItemNumber = 2;
// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const NormalItem: React.FC<NormalItemProps> = ({src, title, author, type, initial, fullText, oldPrice, currentPrice}) => (
  <li className="flex gap-4 items-start pb-5 lg:min-w-[356px] lg:flex-col lg:text-center">
    <NormalLink href="#" className="block min-w-[100px] w-[100px] lg:w-[180px] lg:min-w-[180px] text-center m-auto">
      <Image alt="item" src={src} width="1038" height="1046" />
      <TypeLink href="#" className='lg:hidden inline'>{type}</TypeLink>
      <div className="flex items-center gap-2 justify-center">
        <TypeLink href="#" className='hidden lg:inline'>{type}</TypeLink>
        {initial === '' ? null : <NewItemBadge className='hidden lg:block' initials={initial} fullText={fullText} />}
      </div>
    </NormalLink>
    <div className='pt-1 w-full'>
      <NormalLink href="#" className='mb-2 block'>
        <BaseText>{title}</BaseText>
      </NormalLink>
      <NormalLink href="#" className='mb-2 block'>
        <TinyText className='group-hover:text-primary'>{author}</TinyText>
      </NormalLink>
    
      <InfoWrap>
        <Price className='mt-0 relative justify-center'>
          <OldPrice>{oldPrice}</OldPrice>
          <CurrentPrice>{currentPrice}</CurrentPrice>
          {initial === '' ? null : <NewItemBadge className='block lg:hidden absolute left-44' initials={initial} fullText={fullText} />}
        </Price>
      </InfoWrap>
    </div>
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
    <ul className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6">{itemsNormal}</ul>
  );
};

export default ItemNormal;
