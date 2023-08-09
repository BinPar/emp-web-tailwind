import { Dispatch, SetStateAction, useState } from 'react';

import CurrentCodes from './CurrentCodes';
import CodesForm from './CodesForm';

interface CouponsInfoProps {
  codeMethod: Dispatch<SetStateAction<boolean>>;
  codeValue: boolean;
}

const CouponsInfo: React.FC<CouponsInfoProps> = ({ codeMethod, codeValue }) => {
  const [openCoupon, SetOpenCoupon] = useState(false);
  const [codeSelected, SetCodeSelected] = useState('');
  console.log('----------------------__>')
  console.log(openCoupon)
  console.log('----------------------__>')

  return (
    <div className="mb-7 -mt-3 xs2:mb-8">
      <button
        type="button"
        className="flex items-center gap-5"
        onClick={(): void => SetOpenCoupon(!openCoupon)}
      >
        <img alt="coupon" src="/img/coupon.svg" className="w-12 h-12" />
        <span className="text-base text-primary text-left font-bold tracking-[.9px]">
          {!openCoupon
            ? '¿Tienes un código descuento? Aplicar ahora'
            : 'Canjea aquí tu código promocional'}
        </span>
      </button>
      <div
        aria-current={openCoupon}
        className="h-0 gap-10 lg2:grid grid-cols-[1.5fr_1fr] aria-current:h-auto overflow-hidden"
      >
        <CurrentCodes method={SetCodeSelected} value={codeSelected} />
        <CodesForm
          method={codeMethod}
          value={codeValue}
          closeMethod={SetOpenCoupon}
          closeValue={openCoupon}
        />
      </div>
    </div>
  );
};
export default CouponsInfo;
