import { Dispatch, SetStateAction, useState } from 'react';
import Check from '../../icons/Check';
import Checked from '../../icons/Checked';

interface ProductOptionProps {
  type: string;
  data?: string;
  price: string;
  method: Dispatch<SetStateAction<string>>;
  value: string;
  period?: string;
}

const ProductOption: React.FC<ProductOptionProps> = ({
  type,
  data,
  price,
  method,
  value,
  period,
}) => (
  <button
    type="button"
    aria-current={value === type}
    onClick={(): void => (!!value && value === type ? method('') : method(type))}
    className="w-full border-[1.5px] border-gray-300 aria-current:border-greencart rounded-lg px-4 py-1 flex flex-col justify-center items-center relative transition-all duration-300 bg-whiteSmoke aria-current:bg-white aria-current:hover:shadow-none hover:bg-white hover:shadow-sp1 hover:border-transparent group"
  >
    <span className="text-xs tracking-[.5px] text-center text-gray-400">{type}</span>
    {!!data && <span className="text-2xs tracking-[.3px] text-gray-300 -mt-1">{data}</span>}
    <div className="font-bold text-sm tracking-[.5px] text-gray-500 flex justify-start">
      {price}
      <span className="text-2xs ml-[2px]">€</span>
      {!!period && (
        <>
          <span className="ml-[2px] text-2.5xs">/</span>
          <span className="ml-[2px] text-2.5xs">{period}</span>
        </>
      )}
    </div>
    <div className="opacity-0 group-aria-current:opacity-100 transition-opacity duration-300 rounded-full border-[1.7px] border-greencart text-greencart bg-white outline outline-[3px] outline-white w-4 h-4 absolute -top-[6px] -right-[6px]">
      <Check className="scale-150 mt-[1px]" />
    </div>
  </button>
);

export default ProductOption;
