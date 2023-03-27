import React, { useState, useMemo } from 'react';

import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import { CartRealData } from '../../../utils/dataInfoTest/modelItemCart';
import CartListTitles from './CartListTitles';
import EmptyCartButton from './EmptyCartButton';
import ItemCart from './ItemCart';

interface CarteListProps {
  itemClassName?: string;
  data: CartRealData[];
}

const CartList: React.FC<WithClassName<CarteListProps>> = ({ className, itemClassName, data }) => {
  const [itemCart, setItemCart] = useState<React.ReactNode>();
  useMemo(() => {
    setItemCart(
      data.map(({ src, title, isbn, type, oldPrice, discount, priceSuffix }, i) => (
        <ItemCart
          // eslint-disable-next-line react/no-array-index-key
          key={`${i}`}
          src={src}
          title={title}
          isbn={isbn}
          type={type}
          oldPrice={oldPrice}
          discount={discount}
          priceSuffix={priceSuffix}
          className={itemClassName}
        />
      )),
    );
  }, [data]);

  return (
    <div className="lg:w-[calc(100%_-_250px)] xl:w-[calc(100%_-_310px)] lg:pr-12 mt-8">
      <CartListTitles />
      <ul className={twMerge('w-full', className)}>{itemCart}</ul>
      <EmptyCartButton/>
    </div>
  );
};

export default CartList;
