import FinalPrice from './FinalPrice';
import OrderItem from './OrderItem';

const OrderResume: React.FC = () => (
  <ul className="pt-5 bg-lightgray">
    <OrderItem title='subtotal' value={26.49} suffix='€'/>
    <OrderItem title='descuento' value={1.39} suffix='€'/>
    <OrderItem title='iva (4%)' value={1.06} suffix='€'/>
    <OrderItem title='envío' value={0} suffix='€'/>
    <FinalPrice price={27.55} suffix='€'/>
  </ul>
);
export default OrderResume;
