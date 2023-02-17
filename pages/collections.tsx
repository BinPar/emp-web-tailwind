
import React from 'react';
import Head from 'next/head';
import Footer from '../src/components/sections/Footer';

import Header from '../src/components/sections/header/Header';
import CollectionsNav from '../src/components/sections/collections/CollectionsNav';
import SubHeader from '../src/components/sections/items/SubHeader';
import CollectionSection from '../src/components/sections/collections/CollectionSection';
import Section from '../src/components/sections/Section';

const Collections: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <Header />
    <main>
      <CollectionsNav />
      <Section id='professional' className='py-0' secondClassName='bg-lightgray py-8 px-4 mt-5 rounded'>
          <SubHeader className="border-b-gray-200 text-base">MI EUREKA - COLECCIONES PROFESIONALES</SubHeader>
          <CollectionSection />
      </Section>
      <Section id='student' className='py-0 mb-20' secondClassName=" bg-lightgray py-8 px-4 mt-5 rounded">
          <SubHeader className="border-b-gray-200 text-base">MI EUREKA - COLECCIONES PARA ESTUDIANTES</SubHeader>
          <CollectionSection />
      </Section>
    </main>
    <Footer />
  </>
);

export default Collections;
