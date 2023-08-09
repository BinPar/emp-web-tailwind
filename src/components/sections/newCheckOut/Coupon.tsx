import { Dispatch, SetStateAction, useState } from 'react';
import Check from '../../icons/Check';
import { type } from 'os';

interface CouponProps {
  title: string;
  data: string;
  type: string;
  method: Dispatch<SetStateAction<string>>;
  value: string;
}

const Coupon: React.FC<CouponProps> = ({ title, data, type, method, value }) => (
  <button
    type="button"
    aria-current={value === title}
    onClick={(): void => (!!value && value === title ? method('') : method(title))}
    className="min-h-[59.5px] w-full text-left border-[1.5px] border-gray-300 aria-current:border-primary rounded-lg px-4 py-2 relative transition-all duration-300 bg-whiteSmoke aria-current:bg-white aria-current:hover:shadow-none hover:bg-white hover:shadow-sp1 hover:border-transparent group mb-3 last:mb-0"
  >
    <span className="text-2.5xs tracking-[.8px] uppercase font-semibold text-gray-400 group-aria-current:text-primary block mt-[1px]">
      {title}
    </span>
    <div className="flex items-center justify-between">
      <p className="font-extrabold text-sm tracking-[.5px] group-aria-current:text-primary text-gray-500">{data}</p>
      <p className="text-3xs text-gray-400 tracking-[1px] uppercase">{type}</p>
    </div>
    <div className="opacity-0 group-aria-current:opacity-100 transition-opacity duration-300 rounded-full border-[1.7px] border-primary text-primary bg-white outline outline-[3px] outline-white w-4 h-4 absolute -top-[6px] -right-[6px]">
      <Check className="scale-150 mt-[1px]" />
    </div>
  </button>
);

export default Coupon;
