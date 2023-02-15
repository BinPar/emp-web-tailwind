import React from 'react';

import Head from 'next/head';
import Footer from '../src/components/sections/Footer';
import DivWrapper from '../src/components/sections/items/DivWrapper';

import Header from '../src/components/sections/header/Header';
import CollectionsNav from '../src/components/sections/collections/CollectionsNav';
import SubHeader from '../src/components/sections/items/SubHeader';
import CollectionSection from '../src/components/sections/collections/CollectionSection';

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
      <section id='professional'>
        <DivWrapper className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] bg-lightgray py-8 px-4 mt-5 rounded">
          <SubHeader className="border-b-gray-200">MI EUREKA - COLECCIONES PROFESIONALES</SubHeader>
          <CollectionSection />
        </DivWrapper>
      </section>
      <section id='student'>
        <DivWrapper className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] bg-lightgray py-8 px-4 mt-5 rounded">
          <SubHeader className="border-b-gray-200">MI EUREKA - COLECCIONES PARA ESTUDIANTES</SubHeader>
          <CollectionSection />
        </DivWrapper>
      </section>
    </main>
    <Footer />
  </>
);

export default Collections;
