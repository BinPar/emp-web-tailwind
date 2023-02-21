import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import ImageGroupList from './ImageGroupList';
import InfoGroupList from './InfoGroupList';

interface ItemGenericListViewProps {
  src: string;
  title: string;
  info?: string;
  author: string;
  type: string;
  type2?: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
}

// eslint-disable-next-line max-len
const ItemGenericListView: React.FC<WithClassName<ItemGenericListViewProps>> = ({
  className,
  src,
  title,
  info,
  author,
  type,
  type2,
  initial,
  fullText,
  oldPrice,
  currentPrice,
}) => (
  <li className={twMerge('flex items-start pb-5 flex-1', className)}>
    <ImageGroupList src={src} type={type} type2={type2} />
    <InfoGroupList
      title={title}
      author={author}
      info={info}
      type={type}
      type2={type2}
      initial={initial}
      fullText={fullText}
      oldPrice={oldPrice}
      currentPrice={currentPrice}
    />
  </li>
);

export default ItemGenericListView;
