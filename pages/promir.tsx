import React from 'react';

import Head from 'next/head';
import MainLayout from '../src/components/sections/MainLayout';
import PerkSection from '../src/components/sections/promir/PerkSection';
import MethodologySection from '../src/components/sections/promir/MethodologySection';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import PhasesList from '../src/components/sections/promir/PhasesList';
import HeaderPromir from '../src/components/sections/promir/HeaderPromir';
import PromirP from '../src/components/sections/promir/PromirP';
import ButtonPromir from '../src/components/sections/promir/ButtonPromir';

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
      <section className="py-10">
        <DivWrapper className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/4 text-center lg:text-left">
            <HeaderPromir className='text-left'>Fases de estudio </HeaderPromir>
            <PromirP className="mb-7">
              La metodología de PROMIR se estructura en cuatro fases y se aplica en todos los cursos
              que PROMIR ofrece, adaptando el calendario a la convocatoria que te presentas y a la
              fecha en la que te matricules.
            </PromirP>
            <ButtonPromir link href="#">
              saber mas
            </ButtonPromir>
          </div>
          <PhasesList />
        </DivWrapper>
      </section>
    </MainLayout>
  </>
);

export default Promir;
