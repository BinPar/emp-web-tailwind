import React from 'react';

import Head from 'next/head';
import BannerPromo from '../src/components/sections/header/BannerPromo';
import HeaderTop from '../src/components/sections/header/HeaderTop';
import HeaderMiddle from '../src/components/sections/header/HeaderMiddle';
import HeaderBottom from '../src/components/sections/header/HeaderBottom';
import Footer from '../src/components/sections/Footer';
import HeaderMobile from '../src/components/sections/header/HeaderMobile';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import ProductMainContent from '../src/components/sections/items/ProductMainContent';
import FloatingMenu from '../src/components/sections/items/FloatingMenu';

const Index: React.FC = () => (
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
      <DivWrapper className="flex md:gap-10 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] flex-col md:flex-row gap-8 relative">
        <FloatingMenu />
        <section className="mt-12 lg:mt-0 w-full lg:w-[calc(100%_-_250px)] xl:w-[calc(100%_-_310px)] lg:px-12 flex flex-col">
          <ProductMainContent />
        </section>
  
      </DivWrapper>
    </main>
    <Footer />
  </>
);

export default Index;
