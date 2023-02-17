import React from 'react';

import Head from 'next/head';
import Footer from '../src/components/sections/Footer';

import Header from '../src/components/sections/header/Header';
import SubHeader from '../src/components/sections/items/SubHeader';
import ItemList from '../src/components/sections/ItemsList';
import Section from '../src/components/sections/Section';

import {
  authorBooks,
  currentPriceBooks,
  fullTextBooks,
  initialBooks,
  oldPriceBooks,
  srcBooks,
  titleBooks,
  typeBooks,
  type2Books,
} from '../src/utils/dataInfoTest/booksInfo';



const Books: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <Header />
    <main>
      <Section className="py-0">
        <SubHeader className="border-b-gray-200 text-base mt-5">LIBROS</SubHeader>
        <ItemList
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl2:grid-cols-5"
          srcList={srcBooks}
          titleList={titleBooks}
          authorList={authorBooks}
          typeList={typeBooks}
          type2List={type2Books}
          initialList={initialBooks}
          fullTextList={fullTextBooks}
          oldPriceList={oldPriceBooks}
          currentPriceList={currentPriceBooks}
        />
      </Section>
    </main>
    <Footer />
  </>
);

export default Books;
