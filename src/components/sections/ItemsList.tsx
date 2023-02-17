/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useEffect } from 'react';

import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../model/react';

import ItemGeneric from './items/ItemGeneric';

interface BookLiProps {
  src: string;
  title: string;
  author: string;
  type: string;
  type2?: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
  itemClassName?: string;
}
interface BookListProps {
  itemClassName?: string;
  srcList: string[];
  titleList: string[];
  authorList: string[];
  typeList: string[];
  type2List?: string[];
  initialList: string[];
  fullTextList: string[];
  oldPriceList: string[];
  currentPriceList: string[];
}

// eslint-disable-next-line @typescript-eslint/no-shadow, max-len
const BookLi: React.FC<BookLiProps> = ({
  src,
  title,
  author,
  type,
  type2,
  initial,
  fullText,
  oldPrice,
  currentPrice,
  itemClassName,
}) => (
  <ItemGeneric
    className={itemClassName}
    src={src}
    type={type}
    type2={type2}
    title={title}
    author={author}
    initial={initial}
    fullText={fullText}
    oldPrice={oldPrice}
    currentPrice={currentPrice}
  />
);

const ItemList: React.FC<WithClassName<BookListProps>> = ({
  className,
  itemClassName,
  srcList,
  titleList,
  authorList,
  typeList,
  type2List,
  initialList,
  fullTextList,
  oldPriceList,
  currentPriceList,
}) => {
  const [itemLi, setItemLi] = useState<React.ReactNode>();
  const itemNumber = React.Children.count(srcList);
  useEffect(() => {
    setItemLi(
      Array(itemNumber)
        .fill(0)
        .map((_, i) => (
          <BookLi
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            itemClassName={itemClassName}
            src={srcList[i]}
            title={titleList[i]}
            author={authorList[i]}
            type={typeList[i]}
            type2={(type2List || [])[i]}
            initial={initialList[i]}
            fullText={fullTextList[i]}
            oldPrice={oldPriceList[i]}
            currentPrice={currentPriceList[i]}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions

    <ul className={twMerge('grid xl:gap-16 gap-10 w-full', className)}>{itemLi}</ul>
  );
};

export default ItemList;
