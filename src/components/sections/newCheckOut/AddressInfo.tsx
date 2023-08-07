import { useState } from 'react';
import CheckItem from './CheckItem';
import Trash from '../../icons/Trash';
import SwitchButton from '../filters/SwitchButton';

const AddressInfo: React.FC = () => {
  const [active, SetActive] = useState('');
  const [active2, SetActive2] = useState('');
  const [billingAddress, SetBillingAddress] = useState(false);

  return (
    <>
    <div className='mb-7 xs2:mb-12'>
      <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
        <div className="flex justify-between items-center">
          <h4 className="flex text-xl text-gray-500 font-semibold tracking-[1.2px] items-center">
            Dirección de envío
          </h4>
          <button
            type="button"
            className="text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
          >
            añadir
          </button>
        </div>
      </div>
      <form className="flex flex-col lg2:flex-row gap-5 lg2:gap-8 mb-8">
        <CheckItem
          state={active}
          method={SetActive}
          haveDelete
          value="option1"
          data1="C/ Callejo 30 1ºD"
          data2="28053 - Madrid, España"
        />
        <CheckItem
          state={active}
          method={SetActive}
          haveDelete
          value="option2"
          data1="C/ Párroco Don Emilio Franco 15 2ºC"
          data2="28007 - Madrid, España"
        />
      </form>
      <SwitchButton
        title="Especificar dirección de facturación diferente"
        value={billingAddress}
        method={SetBillingAddress}
        className="text-xs tracking-[.8px] font-normal text-gray-400"
      />
          </div>
      {billingAddress && (
        <div className='mt-5 xs2:mt-12'>
          <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
            <div className="flex justify-between items-center">
              <h4 className="flex text-xl text-gray-500 font-semibold tracking-[1.2px] items-center">
                Dirección de facturación
              </h4>
              <button
                type="button"
                className="text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
              >
                añadir
              </button>
            </div>
          </div>
          <form className="flex flex-col lg2:flex-row gap-5 lg2:gap-8 mb-12">
            <CheckItem
              state={active2}
              method={SetActive2}
              haveDelete
              value="option3"
              data1="C/ Callejo 30 1ºD"
              data2="28053 - Madrid, España"
            />
            <CheckItem
              state={active2}
              method={SetActive2}
              haveDelete
              value="option4"
              data1="C/ Párroco Don Emilio Franco 15 2ºC"
              data2="28007 - Madrid, España"
            />
          </form>
        </div>
      )}

    </>
  );
};
export default AddressInfo;
