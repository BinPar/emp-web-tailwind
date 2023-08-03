import NewCart from '../../icons/NewCart';
import NewLock from '../../icons/NewLock';
import Pana from '../../icons/Pana';
import Triangle from '../../icons/Triangle';
import ProductOption from './ProductOption';
import TotalPriceBox from './TotalPriceBox';

import { WithClassName } from '../../../model/react';
import { twMerge } from 'tailwind-merge';
interface NewOrderProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const NewOrder: React.FC<WithClassName<NewOrderProps>> = ({ method, value, className }) => (
  <div
    className={twMerge(
      'lg:border lg:border-gray-200 rounded-xl bg-white lg:px-5 py-6 lg:drop-shadow-lg lg:sticky top-[210px]',
      className,
    )}
  >
    <Triangle className="absolute w-6 top-7 -left-[22px] hidden lg:block" />
    <h4 className='text-xl text-gray-500 font-semibold tracking-[1.2px] mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      Tu Selección
    </h4>
    <div>
      <div className="flex gap-3 mb-4">
        <ProductOption
          method={method}
          value={value}
          type={'DUO'}
          price={'52,25'}
          data="papel + digital"
        />
        <ProductOption method={method} value={value} type={'Digital'} price={'45,59'} />
      </div>
      {value === 'error' && (
        <p className="text-red-300 text-2xs font-bold tracking-[1.2px] mb-3 -mt-1">
          * Debes elegir el tipo de producto
        </p>
      )}

      <TotalPriceBox discount="-5% Dto. 70 aniversario" price="55" afterDiscount="52,2" />
    </div>
    <div className="mb-5 hidden lg:block">
      <button
        type="button"
        onClick={(): void => {
          value === '' ? method('error') : method('cart');
        }}
        className="min-h-[40px] py-1 w-full bg-greencart rounded-lg text-center text-white text-1xs font-bold uppercase tracking-[1.2px] mb-3 last-of-type:mb-0 flex justify-center items-center hover:bg-darkGreenCart transition-all duration-300"
      >
        añadir al carrito
        <NewCart className="h-6 w-6 text-white ml-2" />
      </button>
      <button
        type="button"
        onClick={(): void => {
          value === '' && method('error');
        }}
        className="min-h-[40px] py-1 w-full border-2 border-greencart text-greencart rounded-lg text-center text-1xs font-bold uppercase tracking-[1.2px] mb-3 last-of-type:mb-0 hover:text-darkGreenCart hover:border-darkGreenCart transition-all duration-300"
      >
        comprar en un click
      </button>
    </div>
    <div className='before:content-[""] before:h-[2px] before:rounded-full before:w-full before:block before:bg-gray-200 before:mb-5'>
      <div className="flex gap-3 text-gray-400 text-2xs tracking-[.8px] text-center leading-3 mb-4">
        <div className="rounded-lg bg-gray-100 px-4 py-2 w-full flex items-center justify-center flex-col">
          <NewLock className="w-8 h-8 text-gray-500 mb-1" />
          <p>
            Pago seguro al
            <span className="font-bold">
              <br />
              100%
            </span>
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 px-4 py-2 w-full flex items-center justify-center flex-col">
          <Pana className="w-8 h-8 text-gray-500 mb-1" />
          <p>
            Garantía de
            <span className="font-bold">
              <br />
              Editorial Médica
              <br />
              Panamericana
            </span>
          </p>
        </div>
      </div>
      <ul className="text-gray-400 text-2xs tracking-[.8px] font-semibold leading-3">
        <li className='before:content-[""] before:h-1 before:w-1 before:block before:bg-gray-500 before:float-left before:mr-1 before:rounded-full before:mt-1 overflow-hidden mb-2'>
          Entrega Hasta 72h laborables en península. Hasta 7 días laborables en Canarias y Baleares
        </li>
        <li className='before:content-[""] before:h-1 before:w-1 before:block before:bg-gray-500 before:float-left before:mr-1 before:rounded-full before:mt-1 overflow-hidden'>
          Tarjeta de crédito/débito, paypal o domiciliación bancaria (ago único o en cuotas)
        </li>
      </ul>
    </div>
  </div>
);
export default NewOrder;
