import { WithClassName } from '../../../model/react';
import { twMerge } from 'tailwind-merge';
interface TotalPriceBoxProps {
  discount?: string;
  price?: string;
  finalPrice: string;
  extraClass?: string;
  isCollection?: boolean;
  isConfirmation?: boolean;
  period?: string;
}
const TotalPriceBox: React.FC<WithClassName<TotalPriceBoxProps>> = ({
  price,
  finalPrice,
  discount,
  className,
  extraClass,
  isCollection,
  isConfirmation,
  period,
}) => (
  <div className={twMerge('rounded-lg bg-gray-100 p-4 mb-4', className)}>
    {isConfirmation && (
      <p className="text-gray-400 text-base xl:text-lg font-bold mb-3 leading-5">
        30 días gratis, despues:
      </p>
    )}
    <div className={`flex justify-between w-full ${!isCollection && ' lg:!block xl:!flex'}`}>
      <p className="text-xs tracking-[.5px] font-bold text-gray-500 -mt-1">Total:</p>
      <div className={`w-fit text-right ${!!extraClass && extraClass}`}>
        {!isCollection && (
          <p className="text-white bg-greencart rounded-sm font-bold text-2xs text-center tracking-[.8px] px-2 mb-1">
            {discount}
          </p>
        )}
        <div className="flex relative justify-end items-start">
          {!isCollection && (
            <div className="flex items-center gap-[2px] pt-1">
              <p className="text-gray-400 text-1xs tracking-widest line-through decoration-1">
                {price}
              </p>
              <span className="text-2xs no-underline text-gray-400">€</span>
            </div>
          )}

          <div className="flex gap-1 ml-3">
            <p
              aria-current={isCollection}
              className="text-gray-500 text-2xl font-bold aria-current:leading-5"
            >
              {finalPrice}
            </p>
            <span
              aria-current={!isCollection}
              className="text-1xs text-gray-500 font-black aria-current:leading-7 leading-4"
            >
              €
            </span>
            {isCollection && (
              <span className="ml-[2px] uppercase text-gray-500 leading-5 text-lg font-bold">
                {period}
              </span>
            )}
          </div>
        </div>
        <p
          aria-current={isCollection}
          className="text-gray-400 text-2xs tracking-[.8px] -mt-[2px] aria-current:mt-[2px]"
        >
          (IVA incluido)
        </p>
      </div>
    </div>
  </div>
);
export default TotalPriceBox;
