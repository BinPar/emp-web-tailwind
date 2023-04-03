import { Dispatch, SetStateAction } from 'react';
import SubHeader from '../items/SubHeader';
import CardSelection from './CardSelection';
import PaymentOptions from './PaymentOptions';

const PaymentMethods: React.FC = () => (
  <div>
    <SubHeader className="mt-5 flex justify-between">MÉTODOS DE PAGO</SubHeader>
    <PaymentOptions />
    <CardSelection />
    <div className='text-center'>
      <a
        href="/checkOut"
        type="button"
        className="bg-greencart text-white text-1xs uppercase tracking-[1px] max-h-10 m-auto mt-3 py-3 px-6 aria-current:hidden"
      >
        Confirmar compra
      </a>
    </div>
  </div>
);
export default PaymentMethods;
