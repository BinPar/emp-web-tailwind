import ProductSelection from '../items/ProductSelection';
import ProductWarranty from '../items/ProductWarranty';
import OrderResume from './OrderResume';

const Order: React.FC = () => (
  <div className="mb-8 relative lg:mb-0 w-[calc(100%_+_50px)] -left-6 lg:left-auto mt-5 lg:mt-0 lg:max-w-[250px] xl:max-w-[310px] border-l-2 border-lightgray bg-white">
    <ProductSelection title="Tu pedido" />
    <OrderResume />
    <ProductWarranty />
  </div>
);

export default Order;
