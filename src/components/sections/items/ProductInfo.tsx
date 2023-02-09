import React from 'react';
import Image from 'next/image';

import Ficha from './Ficha';
import ProductAutor from './ProductAutor';
import PillLink from './PillLink';

const ProductInfo: React.FC = () => {
  return (
    <div>
      <div className="mt-12 lg:mt-0 w-full xl:w-[calc(100%-350px)] lg:mr-[300px] lg:px-12 flex">
        <div className="hidden md:flex flex-col items-center min-w-[300px] mr-10">
          <div className="w-[200px] min-w-[200px] lg:w-[350px] lg:min-w-[350px]">
            <Image alt="item" src="/img/expert1.jpg" width="1038" height="1046" />
          </div>
          <PillLink />
        </div>
        <div>
          <ProductAutor />
          <h1 className="text-4xl text-gray-400 font-extralight tracking-[1px] mb-7 text-center md:text-left">
            Experto en Ecografía Musculoesquelética
          </h1>
          <div className="block md:hidden w-[200px] min-w-[200px] lg:w-[350px] lg:min-w-[350px] m-auto mb-7 ">
            <Image alt="item" src="/img/expert1.jpg" width="1038" height="1046" />
          </div>
          <Ficha />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
