import Close from '../../icons/Close';
import LongArrow from '../../icons/LongArrow';

import Trash from '../../icons/Trash';

import SideCartItemList from './SideCartItemList';
import TotalPriceBox from './TotalPriceBox';

interface SideCartProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const SideCart: React.FC<SideCartProps> = ({ method, value }) => (
  <div
    aria-current={value === 'cart'}
    className="cursor-pointer h-0 w-0 aria-current:w-screen aria-current:h-screen aria-current:transition-none transition-all duration-[0ms] delay-300 fixed top-0 overflow-hidden z-50 bg-black/10 backdrop-blur-[2px] group"
    onClick={(): void => method('')}
  >
    <div className="cursor-default w-full max-w-[420px] h-full bg-white border-l-2 border-gray-200 absolute -right-[420px] group-aria-current:right-0 px-6 pb-10 pt-20 transition-[right] duration-200 delay-100">
      <button
        type="button"
        className="absolute top-4 left-5 text-gray-500 border border-gray-200 rounded-full bg-whiteSmoke hover:shadow-sp1 hover:bg-white hover:border-transparent transition-all duration-300 group/btn"
        onClick={(): void => method('')}
      >
        <Close className="w-8 h-8 group-hover/btn:text-primary transition-all duration-300 scale-110 relative top-[.5px] left-[.5px]" />
      </button>
      <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
        <div className="flex justify-between">
          <h4 className="text-xl text-gray-500 font-semibold tracking-[1.2px]">Tu Carrito</h4>
          <button
            type="button"
            className="text-2.5xs xs2:text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
          >
            vaciar el carrito
            <Trash className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>

      <SideCartItemList />
      <div className="position absolute bottom-0 w-[calc(100%_-_48px)]">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <div className="flex justify-between items-center">
            <p className="text-xs tracking-[.5px] font-bold text-gray-500 -mt-1">
              Subtotal:
              <span className="ml-1 text-gray-400 text-2xs tracking-[.8px] -mt-1">
                (2 productos)
              </span>
            </p>
            <div className="w-fit text-right">
              <div className="text-right">
                <div className="flex gap-1 ml-3 justify-end">
                  <p className="text-gray-500 text-lg font-bold">
                    <span className="mr-1 text-gray-400 text-2xs tracking-[.8px] -mt-1">
                      (IVA incluido)
                    </span>
                    52,25
                  </p>
                  <span className="text-1xs text-gray-500 font-black">€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-[2px] mb-[4px]">
            <p className="text-xs tracking-[.5px] font-bold text-gray-500 -mt-1">
              Gastos de envío:
            </p>
            <p className="text-gray-400 text-2xs tracking-[.8px] font-bold -mt-1">
              Pendientes de calcular
            </p>
          </div>
        </div>
        <TotalPriceBox discount="-5% Dto. 70 aniversario" price="55" afterDiscount="52,2" />
        <div className="mb-5">
          <a href='/register'
            className="min-h-[40px] py-1 w-full bg-greencart rounded-lg text-center text-white text-1xs font-bold uppercase tracking-[1.2px] mb-3 last:mb-0 flex justify-center items-center hover:bg-darkGreenCart transition-all duration-300"
          >
            continuar con el pago
            <LongArrow className="h-6 w-6 text-white ml-2" />
          </a>
          <button
            type="button"
            className="min-h-[40px] py-1 w-full border-2 border-greencart text-greencart rounded-lg text-center text-1xs font-bold uppercase tracking-[1.2px] mb-3 last-of-type:mb-0 hover:text-darkGreenCart hover:border-darkGreenCart transition-all duration-300"
          >
            comprar en un click
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default SideCart;
