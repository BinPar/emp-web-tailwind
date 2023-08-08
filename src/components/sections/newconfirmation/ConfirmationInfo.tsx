import Trash from '../../icons/Trash';
import CheckoutItemList from '../newCheckOut/CheckoutItemList';
import OrderCheckout from '../newCheckOut/OrderCheckout';
import ConfirmationItemList from './ConfirmationItemList';

interface ConfirmationInfoProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}
const ConfirmationInfo: React.FC<ConfirmationInfoProps> = ({ method, value }) => (
  <>
    <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      <h4 className="hidden sm:flex text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
        Confirmación de compra
        <span className="text-gray-400 text-xs tracking-[.8px] ml-3">(2 Prod.)</span>
      </h4>
      <h4 className="flex sm:hidden text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
        Confirmación
        <span className="text-gray-400 text-xs tracking-[.8px] ml-3">(2 Prod.)</span>
      </h4>
    </div>
    <ConfirmationItemList />
    <OrderCheckout className="lg:hidden block" method={method} value={value} />
  </>
);
export default ConfirmationInfo;
