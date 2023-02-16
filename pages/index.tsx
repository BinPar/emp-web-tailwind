import React from 'react';
import Head from 'next/head';

import SectionBanner from '../src/components/sections/banner/SectionBanner';
import SectionRecommended from '../src/components/sections/SectionRecommended';
import SectionExpert from '../src/components/sections/SectionExpert';
import SectionExams from '../src/components/sections/SectionExams';
import Footer from '../src/components/sections/Footer';
import SectionCarousel from '../src/components/sections/items/SectionCarousel';
import Header from '../src/components/sections/header/Header';
import BookList from '../src/components/sections/BookList';
import SectionBooks from '../src/components/sections/SectionBooks';


const Index: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <Header />
    <main>
      <SectionBanner />
      <SectionRecommended />
      <SectionExpert />
      <SectionExams />
      <SectionBooks>
        <BookList />
      </SectionBooks>

      <SectionCarousel />
    </main>
    <Footer />
  </>
);

export default Index;
