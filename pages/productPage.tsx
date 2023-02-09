import React, { useState } from 'react';

import Head from 'next/head';

import BannerPromo from '../src/components/sections/header/BannerPromo';
import HeaderTop from '../src/components/sections/header/HeaderTop';
import HeaderMiddle from '../src/components/sections/header/HeaderMiddle';
import HeaderBottom from '../src/components/sections/header/HeaderBottom';

import Footer from '../src/components/sections/Footer';
import HeaderMobile from '../src/components/sections/header/HeaderMobile';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import ProductInfo from '../src/components/sections/items/ProductInfo';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <BannerPromo />
      <header className="relative" id="header">
        <div className="hidden lg:block">
          <HeaderTop />
          <HeaderMiddle />
          <HeaderBottom />
        </div>
        <div className="block lg:hidden">
          <HeaderMobile />
        </div>
      </header>

      <main>
        <DivWrapper className="flex md:gap-10 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] flex-col md:flex-row gap-8">
          <ProductInfo />
        </DivWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Index;
