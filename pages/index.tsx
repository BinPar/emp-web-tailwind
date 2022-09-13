import React from 'react';
import Head from 'next/head';

const Index: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <h1 className="text-primary text-5xl">Ejemplo de página de EMP en TW</h1>
  </>
);

export default Index;
