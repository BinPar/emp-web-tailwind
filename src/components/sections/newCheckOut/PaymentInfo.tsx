import { useState } from 'react';
import CheckItem from './CheckItem';

interface PaymentInfoProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  mode?: string;
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({ method, value, mode }) => {
  const [payment, SetPayment] = useState('');
  return (
    <div className="mb-2 xs2:mb-[28px]">
      <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center mb-5 after:content-[''] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1">
        Método de pago
      </h4>

      <form className="flex flex-col lg2:flex-row gap-3 lg2:gap-[3%]">
        <CheckItem
          state={payment}
          method={SetPayment}
          src="/img/masterC.jpg"
          src2="/img/visa.jpg"
          value="card"
          data1="tarjeta crédito/debito"
        />
        {mode !== 'collection' && (
          <>
            <CheckItem
              state={payment}
              method={SetPayment}
              src="/img/paypal.jpg"
              value="paypal"
              data1="Paypal"
            />
            <CheckItem
              state={payment}
              method={SetPayment}
              src="/img/banc.jpg"
              value="banc"
              data1="Domiciliación bancaria"
            />
          </>
        )}
      </form>
      {payment === 'card' && (
        <>
          <div className='mb-5 after:content-[""] after:h-[1.5px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
            <div className="flex justify-between items-center">
              <h4 className="text-sm xs2:text-base text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px]">
                Mis Tarjetas
              </h4>
              <button
                type="button"
                onClick={(): void => method('newCard')}
                className="text-2.5xs xs2:text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
              >
                añadir
              </button>
            </div>
          </div>
          <form className="flex flex-col flex-wrap lg2:flex-row gap-3 lg2:gap-[3%] mb-6">
            <CheckItem
              state={payment}
              method={SetPayment}
              haveDelete
              value="option1"
              data1="Mastercard  02/2024"
              data2="**** **** **** 4565"
            />
            <CheckItem
              state={payment}
              method={SetPayment}
              value="option2"
              haveDelete
              data1="Mastercard  03/2026"
              data2="**** **** **** 4334"
            />
          </form>
        </>
      )}
    </div>
  );
};
export default PaymentInfo;
