import React from 'react';
import Head from 'next/head';
import CollectionsNav from '../src/components/sections/collections/CollectionsNav';
import SubHeader from '../src/components/sections/items/SubHeader';
import CollectionSection from '../src/components/sections/collections/CollectionSection';
import MainLayout from '../src/components/sections/MainLayout';
import DivWrapper from '../src/components/sections/items/DivWrapper';

const CollectionsPage: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <MainLayout>
      <DivWrapper>
        <CollectionsNav />
        <section id="professional" className=" bg-lightgray py-8 px-4 mt-5 rounded">
          <SubHeader className="border-b-gray-200 text-base">
            MI EUREKA - COLECCIONES PROFESIONALES
          </SubHeader>
          <CollectionSection />
        </section>
        <section id="student" className="mb-20 bg-lightgray py-8 px-4 mt-5 rounded">
          <SubHeader className="border-b-gray-200 text-base">
            MI EUREKA - COLECCIONES PARA ESTUDIANTES
          </SubHeader>
          <CollectionSection />
        </section>
      </DivWrapper>
    </MainLayout>
  </>
);

export default CollectionsPage;
