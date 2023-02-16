import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import ImageGroup from './ImageGroup';
import InfoGroup from './InfoGroup';

interface ItemGenericProps {
  src: string;
  type: string;
  type2?: string;
  title: string;
  author: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
}

// eslint-disable-next-line max-len
const ItemGeneric: React.FC<WithClassName<ItemGenericProps>> = ({
  className,
  src,
  type,
  type2,
  title,
  author,
  initial,
  fullText,
  oldPrice,
  currentPrice

}) => (
  <li className={twMerge('flex items-start pb-5 flex-1 lg:flex-col lg:text-center', className)}>
    <ImageGroup src={src} type={type} type2={type2} />
    <InfoGroup
      title={title}
      author={author}
      type={type}
      type2={type2}
      initial={initial}
      fullText={fullText}
      oldPrice={oldPrice}
      currentPrice={currentPrice}
    />
  </li>
);

export default ItemGeneric;
