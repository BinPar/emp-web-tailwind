import Image from 'next/image';
import MyProfileLi from './MyProfileLi';
import Docs from '../../icons/Docs';
import Crono from '../../icons/Crono';

interface ItemSubscriptionProps {
  src: string;
  title: string;
  plan: string;
}

const ItemSubscription: React.FC<ItemSubscriptionProps> = ({ src, title, plan }) => (
  <div className="border-b border-gray-300 pb-3 mb-3 flex gap-5">
    <Image width={104} height={104} alt="subscription" src={src} />
    <div className="w-full flex flex-wrap justify-around items-center">
      <MyProfileLi label="Suscripción a" value={title} className='max-w-[230px]'>
        <Docs className="w-5 text-gray-300 mb-1" />
      </MyProfileLi>
      <MyProfileLi label="Plan adquirido" value={plan}>
        <Crono className="w-5 text-gray-300 mb-1" />
      </MyProfileLi>
      <button
        type="button"
        className="border-2 border-primary hover:bg-primary hover:text-white transition-all duration-150 text-primary text-1xs uppercase tracking-[1px] h-10 px-4 block"
      >
        Gestionar
      </button>
    </div>
  </div>
);
export default ItemSubscription;
