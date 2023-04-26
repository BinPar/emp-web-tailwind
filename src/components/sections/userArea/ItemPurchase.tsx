import Box from '../../icons/Box';
import CalendarLittle from '../../icons/CalendarLitle';
import CartLight from '../../icons/CartLight';
import MyProfileLi from './MyProfileLi';

interface ItemPurchaseProps {
  id: string;
  state: string;
  date: string;
  amount: string;
  total: string;
}

const ItemPurchase: React.FC<ItemPurchaseProps> = ({ id, state, date, amount, total }) => (
  <div className="border border-gray-300 p-4 w-1/4 min-w-[215px] ml-3 first:ml-0">
    <div className="flex gap-4 items-center pb-3 mb-4 border-b border-gray-300">
      <span className="text-xs text-gray-400 font-light mb-1">Pedido</span>
      <p className="text-gray-400 font-semibold">{id}</p>
    </div>
    <div className="text-greencart flex gap-4 items-center mb-2">
      <Box className="w-5" />
      <p className="uppercase text-xs tracking-[1px] font-medium">{state}</p>
    </div>
    <ul>
      <MyProfileLi label="Fecha de compra" value={date}>
        <CalendarLittle className='w-5 text-gray-300 mb-1'/>
      </MyProfileLi>
      <MyProfileLi label="Cantidad" value={amount}>
        <CartLight className='w-5 text-gray-300 mb-1'/>
      </MyProfileLi>
      <MyProfileLi label="Total" value={total}/>
    </ul>
  </div>
);
export default ItemPurchase;
