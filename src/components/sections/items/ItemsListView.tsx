/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useEffect } from 'react';

import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import { RealData } from '../../../utils/dataInfoTest/modelTemp';

import ItemGenericListView from './ItemGenericListView';

interface ItemsListViewProps {
  itemClassName?: string;
  data: RealData[];
}

const ItemsListView: React.FC<WithClassName<ItemsListViewProps>> = ({
  className,
  itemClassName,
  data,
}) => {
  const [itemLi, setItemLi] = useState<React.ReactNode>();

  useEffect(() => {
    setItemLi(
      data
        .map(({
          src,
          title,
          author,
          info,
          type,
          type2,
          initial,
          fullText,
          oldPrice,
          currentPrice,}, i) => (
          <ItemGenericListView
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            className={itemClassName}
            src={src}
            title={title}
            info={info}
            author={author}
            type={type}
            type2={type2}
            initial={initial}
            fullText={fullText}
            oldPrice={oldPrice}
            currentPrice={currentPrice}
          />
        )),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions

    <ul className={twMerge('grid xl:gap-16 gap-10 w-full', className)}>{itemLi}</ul>
  );
};

export default ItemsListView;
