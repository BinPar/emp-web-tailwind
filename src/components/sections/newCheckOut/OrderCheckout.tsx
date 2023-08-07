import NewCart from '../../icons/NewCart';
import NewLock from '../../icons/NewLock';
import Pana from '../../icons/Pana';
import Triangle from '../../icons/Triangle';

import { WithClassName } from '../../../model/react';
import { twMerge } from 'tailwind-merge';
import TotalPriceBox from '../newProductPage/TotalPriceBox';
import ProductOption from '../newProductPage/ProductOption';
interface OrderCheckoutProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const OrderCheckout: React.FC<WithClassName<OrderCheckoutProps>> = ({
  method,
  value,
  className,
}) => (
  <div
    className={twMerge(
      'lg:border lg:border-gray-200 rounded-xl bg-white lg:px-5 py-6 lg:drop-shadow-lg lg:sticky top-[210px]',
      className,
    )}
  >
    <Triangle className="absolute w-6 top-7 -left-[22px] hidden lg:block" />
    <h4 className='text-xl text-gray-500 font-semibold tracking-[1.2px] mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      Tu Pedido
    </h4>
    <div>
      <TotalPriceBox discount="ahorro de: 180,45€" price="1.819" afterDiscount="1.638,55" className='block xl:flex' extraClass='!w-full xl:!w-fit mt-2 xl:mt-0'/>
      <div className="rounded-lg bg-gray-100 p-4 mb-4">
        <div className="flex justify-between items-center">
          <p className="text-xs tracking-[.5px] font-bold text-gray-500 -mt-1">IVA(4%):</p>
          <div className="w-fit text-right">
            <div className="flex gap-1 ml-3 justify-end text-right">
              <p className="text-gray-500 text-lg font-bold">1.10</p>
              <span className="text-1xs text-gray-500 font-black">€</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs tracking-[.5px] font-bold text-gray-500 -mt-1">IVA(21%):</p>
          <div className="w-fit text-right">
            <div className="flex gap-1 ml-3 justify-end text-right">
              <p className="text-gray-500 text-lg font-bold">338</p>
              <span className="text-1xs text-gray-500 font-black">€</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs tracking-[.5px] font-bold text-gray-500 -mt-1">Subtotal:</p>
          <div className="w-fit text-right">
            <div className="flex gap-1 ml-3 justify-end text-right">
              <p className="text-gray-500 text-lg font-bold">1.573</p>
              <span className="text-1xs text-gray-500 font-black">€</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[3px]">
          <p className="text-xs tracking-[.5px] font-bold text-gray-500 -mt-1">Gastos de envío:</p>
          <div className="w-fit text-right">
              <p className="text-greencart text-sm tracking-[.8px] font-bold">GRATIS</p>
              
          </div>
        </div>
        
      </div>
    </div>
    <div className="mb-5 hidden lg:block">
      <button
        type="button"
        onClick={(): void => {
          value === '' ? method('error') : method('cart');
        }}
        className="min-h-[40px] py-1 w-full bg-greencart rounded-lg text-center text-white text-1xs font-bold uppercase tracking-[1.2px] mb-3 last-of-type:mb-0 flex justify-center items-center hover:bg-darkGreenCart transition-all duration-300"
      >
pagar ahora

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
export default OrderCheckout;
