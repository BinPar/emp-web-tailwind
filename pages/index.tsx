import React from 'react';
import Head from 'next/head';

import SectionBanner from '../src/components/sections/banner/SectionBanner';
import SectionRecommended from '../src/components/sections/SectionRecommended';
import SectionExpert from '../src/components/sections/SectionExpert';
import SectionCarousel from '../src/components/sections/items/SectionCarousel';
import SectionExams from '../src/components/sections/SectionExams';
import SectionBooks from '../src/components/sections/SectionBooks';
import MainLayout from '../src/components/sections/MainLayout';

const Index: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>

    <MainLayout>
      <SectionBanner />
      <SectionRecommended />
      <SectionExpert />
      <SectionExams />
      <SectionBooks />
      <SectionCarousel />
    </MainLayout>
  </>
);

export default Index;
