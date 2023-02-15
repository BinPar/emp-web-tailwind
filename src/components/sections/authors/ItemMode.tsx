import ImageGroup from '../items/ImageGroup';
import InfoGroup from '../items/InfoGroup';

interface ItemModeProps{
src: string;
title: string;
author: string;
type: string;
type2?: string;
initial: string;
fullText: string;
oldPrice: string;
currentPrice: string;
}

// eslint-disable-next-line max-len
const ItemMode: React.FC<ItemModeProps> = ({src, title, author, type, type2, initial, fullText, oldPrice, currentPrice}) => (
  <>
    <ImageGroup src={src} type={type} type2={type2}/>
    <InfoGroup
      className="h-[auto] lg:h-[calc(100%_-_178px)] items-start lg:items-center text-left lg:text-center"
      title={title}
      author={author}
      type={type}
      type2={type2}
      initial={initial}
      fullText={fullText}
      oldPrice={oldPrice}
      currentPrice={currentPrice}
    />
  </>
);

export default ItemMode;
