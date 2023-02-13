import React from 'react';
import Head from 'next/head';

import BannerPromo from '../src/components/sections/header/BannerPromo';
import HeaderTop from '../src/components/sections/header/HeaderTop';
import HeaderMiddle from '../src/components/sections/header/HeaderMiddle';
import HeaderBottom from '../src/components/sections/header/HeaderBottom';
import SectionBanner from '../src/components/sections/banner/SectionBanner';
import SectionRecommended from '../src/components/sections/SectionRecommended';
import SectionExpert from '../src/components/sections/SectionExpert';
import SectionExams from '../src/components/sections/SectionExams';
import SectionBooks from '../src/components/sections/SectionBooks';
import Footer from '../src/components/sections/Footer';
import SectionCarousel from '../src/components/sections/items/SectionCarousel';
import HeaderMobile from '../src/components/sections/header/HeaderMobile';

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
        <SectionBanner />
        <SectionRecommended />
        <SectionExpert />
        <SectionExams />
        <SectionBooks />
        <SectionCarousel />
      </main>
      <Footer />
    </>
  );


export default Index;
