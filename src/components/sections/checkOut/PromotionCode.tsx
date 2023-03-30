import { useState } from 'react';
import Close from '../../icons/Close';
import InputForms from './InputForms';

const PromotionCode: React.FC = () => {
  const [promotion, SetPromotion] = useState(false);
  const [openForm, SetOpenForm] = useState(false)
  return (
    <div className='lg:border-l border-gray-400 w-full flex flex-col lg:flex-row items-center lg:ml-5 mt-5'>
      <p className='uppercase text-1xs font-bold max-w-[105px] mx-5 text-gray-400 hidden lg:block'>Tus códigos disponibles</p>
      <button type='button' aria-current={openForm} onClick={(): void => SetOpenForm(!openForm)} className='h-10 bg-primary uppercase text-1xs font-bold text-white mb-5 px-6 block lg:hidden peer'>códigos disponibles</button>
      <div className="w-full border border-gray-300 text-gray-400 h-32 hover:border-primary hover:text-primary text-center justify-center relative lg:flex hidden peer-aria-current:flex">
        <button
          type="button"
          aria-current={promotion}
          onClick={(): void => SetPromotion(!promotion)}
          className="uppercase text-1xs font-bold w-full group aria-current:absolute aria-current:w-7 right-2 top-1"
        >
          <span className="block leading-4 max-w-[80px] m-auto group-aria-current:hidden">agregar código</span>
          <Close  className='w-8 hidden group-aria-current:block'/>
        </button>
        {promotion && (
          <div className='flex flex-col justify-center'>
            <p className="uppercase text-1xs font-bold mb-3">canjea tu código</p>
            <form className="flex items-center gap-3 justify-center">
              <InputForms type="text" id="codigo" label="codigo *" className="mb-0" />
              <button
                type="submit"
                className="bg-primary text-white text-1xs uppercase tracking-[1px] h-10 px-6 block"
              >
                canjear
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromotionCode;
