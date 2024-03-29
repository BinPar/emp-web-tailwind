import { useState } from 'react';
import CheckItem from './CheckItem';
import SwitchButton from '../filters/SwitchButton';

interface AddressInfoProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  mode?: string;
}

const AddressInfo: React.FC<AddressInfoProps> = ({ method, value, mode }) => {
  const [active, SetActive] = useState('');
  const [active2, SetActive2] = useState('');
  const [billingAddress, SetBillingAddress] = useState(false);

  return (
    <>
      {mode !== 'collection' && (
        <div className="mb-7 xs2:mb-12">
          <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
            <div className="flex justify-between items-center">
              <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
                Dirección de envío
              </h4>
              <button
                type="button"
                onClick={(): void => method('newAddress')}
                className="text-2.5xs xs2:text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
              >
                añadir
              </button>
            </div>
          </div>
          <form className="flex flex-col flex-wrap lg2:flex-row gap-3 lg2:gap-[3%]">
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
      )}
      {(billingAddress || mode==='collection') && (
        <div className="mb-2 xs2:mb-[28px]">
          <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
            <div className="flex justify-between items-center">
              <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
                Dirección de facturación
              </h4>
              <button
                type="button"
                onClick={(): void => method('newBillingAddress')}
                className="text-2.5xs xs2:text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
              >
                añadir
              </button>
            </div>
          </div>
          <form className="flex flex-col flex-wrap lg2:flex-row gap-3 lg2:gap-[3%]">
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
