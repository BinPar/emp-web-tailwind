import { Dispatch, SetStateAction } from 'react';
import Coupon from './Coupon';
import GiftCard from './GiftCard';

interface CurrentCodesProps {
    method: Dispatch<SetStateAction<string>>;
    value: string;
}

const CurrentCodes: React.FC<CurrentCodesProps> = ({method, value}) => (
  <div>
    <div className='my-5'>
      <h4 className="mb-3 after:content-[''] after:h-[1.5px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1 text-sm xs2:text-base text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px]">
        Mis cupones
      </h4>
      <ul className="p-1 xs:grid grid-cols-[1fr_1fr] gap-4">
        <li className='mb-3 last:mb-0'>
          <Coupon
            title="codigo fidelidad"
            data="30% Dto."
            type="No acumulable"
            method={method}
            value={value}
          />
        </li>
        <li className='mb-3 last:mb-0'>
          <Coupon
            title="codigo 70 aniversario"
            data="10% Dto."
            type="No acumulable"
            method={method}
            value={value}
          />
        </li>
      </ul>
    </div>
    <div>
      <h4 className="mb-3 after:content-[''] after:h-[1.5px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1 text-sm xs2:text-base text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px]">
        Mis giftcards
      </h4>
      <ul className="p-1 xs:grid grid-cols-[1fr_1fr] gap-4">
        <li className='mb-3 last:mb-0'>
          <GiftCard
            title="Giftcard1"
            type="No acumulable"
            method={method}
            value={value}
            price="300"
            validity="20 / 02 / 1990"
            remain="0"
          />
        </li>
        <li className='mb-3 last:mb-0'>
          <GiftCard
            title="Giftcard2"
            type="No acumulable"
            method={method}
            value={value}
            price="300"
            validity="20 / 02 / 1990"
            remain="120"
          />
        </li>
      </ul>
    </div>
  </div>
);
export default CurrentCodes;
