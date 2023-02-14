import React from 'react';

import Head from 'next/head';

import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/header/Header';
import AuthorData from '../src/components/sections/authors/AthorData';
import AuthorPublications from '../src/components/sections/authors/AuthorPublications';

const name = 'ÍÑIGO IRIARTE POSSE';
const src = '/img/autor1.jpeg';

const AuthorPage: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <Header />
    <main>
      <AuthorData src={src} name={name} />
      <AuthorPublications />
    </main>
    <Footer />
  </>
);

export default AuthorPage;
