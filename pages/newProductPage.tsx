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
          <section className="mt-5 lg2:mt-12 w-full lg:grid lg:grid-cols-[1fr,_270px] xl:grid-cols-[1fr,_310px] lg:gap-5 xl:gap-10">
            <div className="">
            <NewProductInfo  method={setSelected} value={selected} />
            </div>
            <div className='relative'>
              <NewOrder method={setSelected} value={selected} className='hidden lg:block'/>
            </div>
          </section>
        </DivWrapper>
        <StickyBuy type="Expertos" oldPrice="55" price="52,25" link="#" />
      </MainLayout>
    </>
  );
};

export default newProductPage;
