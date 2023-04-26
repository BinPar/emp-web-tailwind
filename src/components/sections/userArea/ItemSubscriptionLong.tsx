import Image from 'next/image';

import CalendarLittle from '../../icons/CalendarLitle';

import Close from '../../icons/Close';
import Crono from '../../icons/Crono';
import Docs from '../../icons/Docs';
import ActionButton from './ActionButton';
import MyProfileLi from './MyProfileLi';

interface ItemPurchaseLongProps {
  title: string;
  src: string;
  state: string;
  date: string;
  nextDate: string;
  plan: string;
}

const ItemSubscriptionLong: React.FC<ItemPurchaseLongProps> = ({
  title,
  src,
  state,
  date,
  plan,
  nextDate,
}) => (
  <div className="border border-gray-300 p-4 mt-8 first:mt-0">
    <div className="flex flex-wrap justify-between items-center mb-4 pb-3 border-b border-gray-300">
      <div className="flex flex-wrap gap-2 xs:gap-4 items-center">
        <span className="text-xs text-gray-400 font-light">Suscripción a Colección</span>
        <p className="text-gray-400 font-semibold">{title}</p>
      </div>
      <ActionButton text="gestionar suscripción" />
    </div>
    <div className="flex lg:flex-row flex-col lg:gap-12">
    <div className='flex justify-center'>
      <Image width={124} height={124} alt="subscription" src={src} />
    </div>
      <ul className="flex items-center gap-y-0 gap-7 flex-wrap">
        <MyProfileLi label="Fecha de Suscripción" value={date}>
          <CalendarLittle className="w-5 text-gray-300 mb-1" />
        </MyProfileLi>
        <MyProfileLi label="Próxima factura" value={nextDate}>
          <Crono className="w-5 text-gray-300 mb-1" />
        </MyProfileLi>
        <MyProfileLi label="Plan adquirido" value={plan}>
          <Docs className="w-5 text-gray-300 mb-1" />
        </MyProfileLi>
        <MyProfileLi label="Estado" value={state}>
          <div className="w-5 h-5 pt-[2px] pl-[1px] overflow-hidden border-[1.5px] border-gray-300 rounded-full flex items-center justify-center">
            <Close className="min-w-[24px]  text-gray-300" />
          </div>
        </MyProfileLi>
      </ul>
    </div>
  </div>
);
export default ItemSubscriptionLong;
