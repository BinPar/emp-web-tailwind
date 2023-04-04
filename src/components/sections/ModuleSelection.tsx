import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../model/react';

import ProductBuy from './items/ProductBuy';
import ProductMessage from './items/ProductMessage';
import ProductNetWorks from './items/ProductNetWorks';
import ProductPrice from './items/ProductPrice';
import ProductSelection from './items/ProductSelection';
import ProductType from './items/ProductType';
import ProductValoration from './items/ProductValoration';
import ProductWarrantie from './items/ProductWarranty';

const ModuleSelection: React.FC<WithClassName> = ({ className }) => (
  <div className='lg:flex lg:fixed lg:justify-end lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px]'>
    <article
      className={twMerge(
        'mb-8 w-[calc(100%_+_50px)] relative -left-6 lg:left-auto mt-5 lg:mt-0 lg:max-w-[250px] xl:max-w-[310px] bg-white',
        className,
      )}
    >
      <ProductSelection title="Tu selección" />
      <ProductType />
      <ProductMessage />
      <ProductPrice />
      <ProductBuy />
      <ProductValoration />
      <ProductWarrantie />
      <ProductNetWorks />
    </article>
  </div>
);
export default ModuleSelection;
