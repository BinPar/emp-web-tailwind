import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

const Index: React.FC = () => {
  const { t } = useTranslation('index');
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <h1>Ejemplo de página de EMP en TW</h1>
    </>
  );
};

export default Index;
