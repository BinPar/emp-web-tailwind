import React from 'react';

import Head from 'next/head';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import FloatingMenu from '../src/components/sections/items/FloatingMenu';
import StickyBuy from '../src/components/sections/items/StickyBuy';
import MainLayout from '../src/components/sections/MainLayout';
import ModuleSelection from '../src/components/sections/ModuleSelection';
import ProductInfo from '../src/components/sections/items/ProductInfo';

const ProductPage: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <MainLayout>
      <DivWrapper className="flex md:gap-10 flex-col md:flex-row gap-8 relative">
        <FloatingMenu />
        <section className="mt-12 lg:mt-0 w-full flex">
          <ProductInfo />
          <ModuleSelection className='hidden lg:block'/>
        </section>
      </DivWrapper>
      <StickyBuy type="Expertos" oldPrice="1.790" price="1.611,01" link="#" />
    </MainLayout>
  </>
);

export default ProductPage;
