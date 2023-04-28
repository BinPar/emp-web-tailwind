import React from 'react';

import Head from 'next/head';
import MainLayout from '../src/components/sections/MainLayout';
import PerkSection from '../src/components/sections/promir/PerkSection';
import MethodologySection from '../src/components/sections/promir/MethodologySection';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import Months from '../src/components/sections/promir/Months';
import Phases from '../src/components/sections/promir/Phases';
import PhaseItem from '../src/components/sections/promir/PhaseItem';

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
      <section>
        <DivWrapper>
          <PhaseItem title="CALENTAMIENTO" phaseActive="warm" />
          <PhaseItem title="CONSTRUCCIÓN" phaseActive="construction" />
          <PhaseItem title="CONSOLIDACIÓN" phaseActive="warm" />
          <PhaseItem title="COMPETICIÓN" phaseActive="warm" />
        </DivWrapper>
      </section>
    </MainLayout>
  </>
);

export default Promir;
