import React from 'react';

import Head from 'next/head';
import Footer from '../src/components/sections/Footer';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import ProductMainContent from '../src/components/sections/items/ProductMainContent';
import FloatingMenu from '../src/components/sections/items/FloatingMenu';
import StickyBuy from '../src/components/sections/items/StickyBuy';
import Header from '../src/components/sections/header/Header';

const ProductPage: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <Header />
    <main>
      <DivWrapper className="flex md:gap-10 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] flex-col md:flex-row gap-8 relative">
        <FloatingMenu />
        <section className="mt-12 lg:mt-0 w-full lg:w-[calc(100%_-_250px)] xl:w-[calc(100%_-_310px)] lg:px-12 flex flex-col">
          <ProductMainContent />
        </section>
      </DivWrapper>
      <StickyBuy type="Expertos" oldPrice="1.790" price="1.611,01" link="#" />
    </main>
    <Footer />
  </>
);

export default ProductPage;
