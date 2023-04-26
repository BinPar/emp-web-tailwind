import Box from '../../icons/Box';
import CalendarLittle from '../../icons/CalendarLitle';
import CartLight from '../../icons/CartLight';
import ActionButton from './ActionButton';
import MyProfileLi from './MyProfileLi';

interface ItemPurchaseLongProps {
  id: string;
  state: string;
  date: string;
  amount: string;
  paymentMethod: string;
  total: string;
}

const ItemPurchaseLong: React.FC<ItemPurchaseLongProps> = ({
  id,
  state,
  date,
  amount,
  total,
  paymentMethod,
}) => (
  <div className="border border-gray-300 p-4 mt-8 first:mt-0">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-300">
      <div className="flex flex-wrap gap-2 xs:gap-4 items-center">
        <span className="text-xs text-gray-400 font-light mb-1">Pedido</span>
        <p className="text-gray-400 font-semibold">{id}</p>
      </div>
      <ActionButton text="ver detalle" />
    </div>
    <div className="flex lg:flex-row flex-col">
      <div className="text-greencart w-full lg:w-4/12 flex flex-col justify-center gap-1 items-center mb-2">
        <Box className="w-11" />
        <p className="uppercase text-xs tracking-[1px] font-medium">{state}</p>
      </div>
      <ul className="flex items-center gap-y-0 gap-7 flex-wrap">
        <MyProfileLi label="Fecha de compra" value={date}>
          <CalendarLittle className="w-5 text-gray-300 mb-1" />
        </MyProfileLi>
        <MyProfileLi label="Cantidad" value={amount}>
          <CartLight className="w-5 text-gray-300 mb-1" />
        </MyProfileLi>
        <MyProfileLi label="Metodo de pago" value={paymentMethod}>
          <Box className="w-5 text-gray-300" />
        </MyProfileLi>
        <MyProfileLi label="Total" value={total} />
      </ul>
    </div>
  </div>
);
export default ItemPurchaseLong;
