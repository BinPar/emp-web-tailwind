import { Dispatch, SetStateAction, useState } from 'react';
import Check from '../../icons/Check';

interface GiftCardProps {
  title: string;
  price: string;
  type: string;
  validity: string;
  remain: string;
  method: Dispatch<SetStateAction<string>>;
  value: string;
}

const GiftCard: React.FC<GiftCardProps> = ({ title, price, validity, method, value, remain }) => (
  <button
    type="button"
    aria-current={value === title}
    onClick={(): void => (!!value && value === title ? method('') : method(title))}
    className="min-h-[59.5px] w-full text-left border-[1.5px] border-gray-300 aria-current:border-primary rounded-lg px-4 py-2 pb-1 relative transition-all duration-300 bg-whiteSmoke aria-current:bg-white aria-current:hover:shadow-none hover:bg-white hover:shadow-sp1 hover:border-transparent group"
  >
    <div className="grid grid-cols-[1fr_1fr] items-center">
      <div>
        <span className="text-2.5xs tracking-[.8px] uppercase font-semibold text-gray-400 group-aria-current:text-primary block mt-[1px]">
          GiftCard
        </span>
        <div className="font-bold text-sm tracking-[.5px] text-gray-500 group-aria-current:text-primary flex justify-start">
          {price}
          <span className="text-2xs ml-[2px]">€</span>
        </div>
      </div>

      <div className="text-gray-400 group-aria-current:text-primary">
        <p className="text-3xs tracking-[.8px]">Valido hasta:</p>
        <p className="text-2xs font-bold text-gray-500 group-aria-current:text-primary">{validity}</p>
        <div className="flex gap-1">
          <p className="text-3xs tracking-[.8px]">Restante:</p>

          <div className="font-bold -mt-1 text-sm tracking-[.5px] text-gray-500 group-aria-current:text-primary flex justify-start">
            <p className="text-2.5xs">{remain}</p>
            <span className="text-2xs ml-[2px]">€</span>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-0 group-aria-current:opacity-100 transition-opacity duration-300 rounded-full border-[1.7px] border-primary text-primary bg-white outline outline-[3px] outline-white w-4 h-4 absolute -top-[6px] -right-[6px]">
      <Check className="scale-150 mt-[1px]" />
    </div>
  </button>
);

export default GiftCard;
