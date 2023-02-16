import React from 'react';

import Head from 'next/head';
import Footer from '../src/components/sections/Footer';
import DivWrapper from '../src/components/sections/items/DivWrapper';

import Header from '../src/components/sections/header/Header';
import SubHeader from '../src/components/sections/items/SubHeader';
import BookList from '../src/components/sections/BookList';


const Books: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <Header />
    <main>
      <section>
        <DivWrapper className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)]">
          <SubHeader className="border-b-gray-200 text-base mt-5">LIBROS</SubHeader>
            <BookList/>
            <BookList/>
            <BookList/>
        </DivWrapper>
      </section>
    </main>
    <Footer />
  </>
);

export default Books;
