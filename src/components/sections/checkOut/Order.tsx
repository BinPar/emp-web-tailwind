import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import ProductSelection from '../items/ProductSelection';
import ProductWarranty from '../items/ProductWarranty';
import OrderResume from './OrderResume';

const Order: React.FC<WithClassName> = ({className}) => (
  <div className='lg:flex lg:fixed lg:justify-end lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px]'>
  <div className={twMerge('mb-8 relative lg:mb-0 w-[calc(100%_+_50px)] -left-6 lg:left-auto mt-5 lg:mt-0 lg:max-w-[250px] xl:max-w-[310px] bg-white', className)}>
    <ProductSelection title="Tu pedido" />
    <OrderResume />
    <ProductWarranty />
  </div>
  </div>
);

export default Order;
