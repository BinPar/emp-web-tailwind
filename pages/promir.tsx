import React from 'react';

import Head from 'next/head';
import MainLayout from '../src/components/sections/MainLayout';
import PerkSection from '../src/components/sections/promir/PerkSection';
import MethodologySection from '../src/components/sections/promir/MethodologySection';
import PhasesSection from '../src/components/sections/promir/PhasesSection';
import CoursesSection from '../src/components/sections/promir/CoursesSection';
import TeamSection from '../src/components/sections/promir/TeamSection';

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
      <CoursesSection />
      <TeamSection/>
    </MainLayout>
  </>
);

export default Promir;
