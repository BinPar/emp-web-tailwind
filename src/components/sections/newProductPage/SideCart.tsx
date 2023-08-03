import NewCart from '../../icons/NewCart';
import SideCartItemList from './SideCartItemList';
import TotalPriceBox from './TotalPriceBox';

interface SideCartProps {
    method: React.Dispatch<React.SetStateAction<string>>;
    value: string;
}

const SideCart: React.FC<SideCartProps> = ({method, value}) => (
  <div aria-current={value === 'cart'} className="w-screen h-screen fixed top-0 overflow-hidden z-50 bg-black/10 backdrop-blur-[2px] group" onClick={():void => method('')}>
    <div className="w-full max-w-[520px] h-full bg-white border-l-2 border-gray-200 absolute -right-[520px] group-aria-current:right-0 px-6 pb-10 pt-14 transition-all duration-300 delay-1000">
        <button type='button' className='text-2xl' onClick={():void => method('')}>
x
        </button>
      <h4 className='text-xl text-gray-500 font-semibold tracking-[1.2px] mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
        Tu Carrito
      </h4>
      <SideCartItemList/>
      <div className='position absolute bottom-0 w-[calc(100%_-_48px)]'>
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
            <p className="text-gray-400 text-2xs tracking-[.8px] font-bold -mt-1">Pendientes de calcular</p>
          </div>
        </div>
        <TotalPriceBox discount="-5% Dto. 70 aniversario" price="55" afterDiscount="52,2" />
        <div className="mb-5">
          <button
            type="button"
            className="min-h-[40px] py-1 w-full bg-greencart rounded-lg text-center text-white text-1xs font-bold uppercase tracking-[1.2px] mb-3 last-of-type:mb-0 flex justify-center items-center hover:bg-darkGreenCart transition-all duration-300"
          >
            añadir al carrito
            <NewCart className="h-6 w-6 text-white ml-2" />
          </button>
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
