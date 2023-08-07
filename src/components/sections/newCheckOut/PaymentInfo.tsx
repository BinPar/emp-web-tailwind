import { useState } from 'react';
import CheckItem from './CheckItem';

const PaymentInfo: React.FC = () => {
  const [payment, SetPayment] = useState('');
  return (
    <>
      <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
        <div className="flex justify-between items-center">
          <h4 className="flex text-xl text-gray-500 font-semibold tracking-[1.2px] items-center">
            Método de pago
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
          state={payment}
          method={SetPayment}
          src="/img/masterC.jpg"
          src2="/img/visa.jpg"
          value="card"
          data1="tarjeta crédito/debito"
        />
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
      </form>
      {payment === 'card' && (
        <form className='flex flex-col lg2:flex-row gap-5 lg2:gap-8 mb-8'>
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
      )}
    </>
  );
};
export default PaymentInfo;
