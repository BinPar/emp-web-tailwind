import { SetStateAction } from 'react';
import Trash from '../../icons/Trash';
import CheckoutItemList from './CheckoutItemList';
import OrderCheckout from './OrderCheckout';

interface NewCheckOutInfoProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  code: boolean;
}
const NewCheckOutInfo: React.FC<NewCheckOutInfoProps> = ({method, value, code }) => (
  <>
    <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      <div className="flex justify-between items-center">
        <h4 className="hidden sm:flex text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
          Resumen de compra
          <span className="text-gray-400 text-xs tracking-[.8px] ml-3">(2 Prod.)</span>
        </h4>
        <h4 className="flex sm:hidden text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
          Resumen
          <span className="text-gray-400 text-xs tracking-[.8px] ml-3">(2 Prod.)</span>
        </h4>
        <button
          type="button"
          className="text-2.5xs xs2:text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
        >
          <span className='hidden sm:block'>vaciar el carrito</span>
          <span className='sm:hidden'>vaciar</span>
          <Trash className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
    <CheckoutItemList/>
    <OrderCheckout code={code} className="lg:hidden block" method={method} value={value}/>
  </>
);
export default NewCheckOutInfo;
