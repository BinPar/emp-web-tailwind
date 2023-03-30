import { Dispatch, SetStateAction, useState } from 'react';
import type { WithClassName } from '../../../model/react';

import Trash from '../../icons/Trash';
import FinalPriceBlock from './FinalPriceBlock';
import PriceBlock from './PriceBlock';
import ProductBlock from './ProductBlock';
import QuantityBlock from './QuantityBlock';

interface ItemCartProp {
  src: string;
  title: string;
  isbn: string;
  type: string;
  oldPrice: number;
  discount: number;
  priceSuffix: string;
  method: Dispatch<SetStateAction<string>>;
  value: string;
}
const ItemCart: React.FC<WithClassName<ItemCartProp>> = ({
  src,
  title,
  isbn,
  type,
  oldPrice,
  discount,
  priceSuffix,
  method,
}) => {
  const discountCalc = (oldPrice * discount) / 100;
  const currentPrice = oldPrice - discountCalc;
  const [quantity, SetQuantity] = useState(1);
  return (
      <li className="flex pb-6 mb-6 border-b border-secondary pt-2 flex-col md:flex-row relative">
        <ProductBlock
          src={src}
          title={title}
          isbn={isbn}
          type={type}
          oldPrice={oldPrice}
          priceSuffix={priceSuffix}
          currentPrice={currentPrice}
          quantity={quantity}
          className="flex md:hidden"
        />
        <PriceBlock
          oldPrice={oldPrice}
          priceSuffix={priceSuffix}
          currentPrice={currentPrice}
          quantity={quantity}
          className="hidden md:flex"
        />
        <QuantityBlock methodQuantity={SetQuantity} quantity={quantity} />
        <FinalPriceBlock
          currentPrice={currentPrice}
          quantity={quantity}
          priceSuffix={priceSuffix}
        />
        <div className="items-center flex">
          <button
            type="button"
            onClick={(): void => method('openDeleteProduct')}
            className="flex items-center justify-end md:justify-center absolute md:relative top-0 right-0 text-primary md:text-gray-300 hover:text-primary hover:border-primary transition-all duration-200 w-10 h-10 rounded-full md:border border-gray-300"
          >
            <Trash className="w-5" />
          </button>
        </div>
      </li>
    

  );
};
export default ItemCart;
