import React from 'react';

import Head from 'next/head';

import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/header/Header';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import AuthorData from '../src/components/sections/authors/AthorData';

const name = 'ÍÑIGO IRIARTE POSSE'
const src = '/img/autor1.jpeg'


const AuthorPage: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <Header />
    <main>
      <DivWrapper className="flex md:gap-10 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] flex-col md:flex-row gap-8 relative">
        <AuthorData src={src} name={name} />
      </DivWrapper>
    </main>
    <Footer />
  </>
);

export default AuthorPage;
