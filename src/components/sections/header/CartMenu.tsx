import { useMemo, useState } from 'react';

import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import type { CartRealData } from '../../../utils/dataInfoTest/modelItemCart';
import ItemCartMenu from './ItemCartMenu';

interface CartMenuProps {
  data: CartRealData[];

}
const CartMenu: React.FC<WithClassName<CartMenuProps>> = ({ data, className }) => {
  const [itemCart, setItemCart] = useState<React.ReactNode>();
  useMemo(() => {
    setItemCart(
      data.map(({ src, title, type, oldPrice, discount, priceSuffix }, i) => (
        <ItemCartMenu
          // eslint-disable-next-line react/no-array-index-key
          key={`${i}`}
          src={src}
          title={title}
          type={type}
          oldPrice={oldPrice}
          discount={discount}
          priceSuffix={priceSuffix}
        />
      )),
    );
  }, [data]);

  return (
    <div className={twMerge('rounded-sm absolute z-20 bg-white p-5 w-[510px] drop-shadow-[0_0_7px_rgba(0,0,0,.3)] top-16 lg:-right-5 xl:-right-10 xl3:-right-16 xl4:-right-52 transition-all duration-300 opacity-0 invisible', className)}>
      <span className="hidden lg:inline w-0 h-0 border-r-[15px] border-t-[18px] border-l-[15px] border-t-white rotate-180 border-l-transparent border-r-transparent lg:right-10 xl:right-14 xl3:right-20 xl4:right-56 absolute -top-4" />
      <ul className="max-h-72 overflow-auto pr-3">{itemCart}</ul>
      <a
        href="/carrito"
        className="rounded-sm bg-greencart transition-all duration-150 hover:brightness-95 block text-center text-white text-1xs uppercase tracking-[1px] max-h-10 m-auto mt-3 py-3 px-6"
      >
        ir a mi carrito
      </a>
    </div>
  );
};
export default CartMenu;
