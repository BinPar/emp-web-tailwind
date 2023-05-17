import React, { useState } from 'react';

import Head from 'next/head';
import MainLayout from '../src/components/sections/MainLayout';

import PromirIndex from '../src/components/sections/promir/MainSections/PromirIndex';
import PromirInternalNav from '../src/components/sections/promir/PromirInternalNav';
import PromirWhatIs from '../src/components/sections/promir/MainSections/PromirWhatIs';
import PromirMethodology from '../src/components/sections/promir/MainSections/PromirMethodology';
import PromirTutorial from '../src/components/sections/promir/MainSections/PromirTutorial';

const Promir: React.FC = () => {
  const [currentNav, SetCurrentNav] = useState('');
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>

      <MainLayout>
        <PromirInternalNav method={SetCurrentNav} value={currentNav} />
        {(currentNav === '' || currentNav === 'home') && <PromirIndex />}
        {(currentNav === 'whatIs') && <PromirWhatIs />}
        {(currentNav === 'methodology') && <PromirMethodology />}
        {(currentNav === 'tutoring') && <PromirTutorial />}
      </MainLayout>
    </>
  );
};

export default Promir;
