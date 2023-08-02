import React, { useState } from 'react';

import Head from 'next/head';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import FloatingMenu from '../src/components/sections/items/FloatingMenu';
import StickyBuy from '../src/components/sections/items/StickyBuy';
import MainLayout from '../src/components/sections/MainLayout';
import NewOrder from '../src/components/sections/newProductPage/NewOrder';
import NewProductInfo from '../src/components/sections/newProductPage/NewProductInfo';

const newProductPage: React.FC = () => {
  const [selected, setSelected] = useState('');
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <MainLayout>
        <DivWrapper className="flex md:gap-10 flex-col md:flex-row gap-8 relative">
          <FloatingMenu />
          <section className="mt-12 lg:mt-10 w-full grid grid-cols-[1fr,_310px] gap-10">
            <div className="">
            <NewProductInfo />
            </div>
            <div className='relative'>
              <NewOrder method={setSelected} value={selected} />
            </div>
          </section>
        </DivWrapper>
        <StickyBuy type="Expertos" oldPrice="1.790" price="1.611,01" link="#" />
      </MainLayout>
    </>
  );
};

export default newProductPage;
