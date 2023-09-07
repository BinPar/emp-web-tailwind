import React from 'react';

import Head from 'next/head';

import AuthorData from '../src/components/sections/authors/AthorData';
import AuthorPublications from '../src/components/sections/authors/AuthorPublications';
import MainLayout from '../src/components/sections/MainLayout';
import DivWrapper from '../src/components/sections/items/DivWrapper';

const name = 'ÍÑIGO IRIARTE POSSE';
const src = '/img/autor1.jpeg';

const AuthorPage: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <MainLayout>
      <DivWrapper>
        <AuthorData src={src} name={name} />
      </DivWrapper>
      <AuthorPublications />
    </MainLayout>
  </>
);

export default AuthorPage;
