import React from 'react';

import Head from 'next/head';
import MainLayout from '../src/components/sections/MainLayout';
import PerkSection from '../src/components/sections/promir/PerkSection';
import MethodologySection from '../src/components/sections/promir/MethodologySection';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import HeaderPromir from '../src/components/sections/promir/HeaderPromir';
import PhasesSection from '../src/components/sections/promir/PhasesSection';
import CourseSelection from '../src/components/sections/promir/CourseSelection';

const Promir: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>

    <MainLayout>
      <PerkSection />
      <MethodologySection />
      <PhasesSection />
      <CourseSelection/>  
       
    </MainLayout>
  </>
);

export default Promir;
