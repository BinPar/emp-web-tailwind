import React, { useState, useMemo, Dispatch, SetStateAction } from 'react';

import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import type { CartRealData } from '../../../utils/dataInfoTest/modelItemCart';
import CartListTitles from './CartListTitles';
import EmptyCartButton from './EmptyCartButton';
import ItemCart from './ItemCart';
import PromotionCode from './PromotionCode';

interface CarteListProps {
  itemClassName?: string;
  data: CartRealData[];
  method: Dispatch<SetStateAction<string>>;
  value: string;
  login: boolean;
  confirmOrder?: boolean;
  wrapClassName?: string;
}

const CartList: React.FC<WithClassName<CarteListProps>> = ({
  className,
  itemClassName,
  data,
  method,
  value,
  login,
  confirmOrder,
  wrapClassName,
}) => {
  const [itemCart, setItemCart] = useState<React.ReactNode>();
  useMemo(() => {
    setItemCart(
      data.map(({ src, title, isbn, type, oldPrice, discount, priceSuffix, }, i) => (
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
          method={method}
          value={value}
          confirmOrder={confirmOrder && confirmOrder}
        />
      )),
    );
  }, [data]);

  return (
    <div className={`lg:w-[calc(100%_-_250px)] xl:w-[calc(100%_-_310px)] lg:pr-12 mt-8 ${wrapClassName && wrapClassName}`}>
      <CartListTitles />
      <ul className={twMerge('w-full', className)}>{itemCart}</ul>
      <div className="lg:flex ">
        {!confirmOrder && <EmptyCartButton method={method} />}
        {login && !confirmOrder && <PromotionCode />}
      </div>
    </div>
  );
};

export default CartList;
