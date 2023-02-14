import React from 'react';
import Image from 'next/image';

import Ficha from './Ficha';
import ProductAutor from './ProductAutor';
import PillLink from './PillLink';

const ProductInfo: React.FC = () => (

    <article>
      <div className="mt-12 lg:mt-0 w-full flex">
        <div className="hidden md:flex flex-col items-center min-w-[250px] xl2:min-w-[350px] mr-10">
          <div className="w-[200px] min-w-[200px] lg:w-[250px] lg:min-w-[250px] xl2:w-[350px] xl2:min-w-[350px]">
            <Image alt="item" src="/img/expert1.jpg" width="1038" height="1046" />
          </div>
          <PillLink />
        </div>
        <div className='lg:p-4'>
          <ProductAutor />
          <h1 className="text-4xl lg:text-2.5xl xl:text-4xl text-gray-400 font-extralight tracking-[1px] mb-7 text-center md:text-left">
            Experto en Ecografía Musculoesquelética
          </h1>
          <div className="block md:hidden w-[200px] min-w-[200px] lg:w-[250px] lg:min-w-[250px] m-auto mb-7 ">
            <Image alt="item" src="/img/expert1.jpg" width="1038" height="1046" />
          </div>
          <Ficha />
        </div>
      </div>
    </article>
  );


export default ProductInfo;
