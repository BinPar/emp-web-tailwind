import React from 'react';
import Head from 'next/head';
import MainLayout from '../src/components/sections/MainLayout';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import Perk from '../src/components/sections/promir/Perk';
import PerkSection from '../src/components/sections/promir/PerkSection';

const Promir: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>

    <MainLayout>
      <PerkSection />
    </MainLayout>
  </>
);

export default Promir;
