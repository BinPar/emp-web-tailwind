import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import BannerPromo from '../src/components/sections/header/BannerPromo';
import HeaderTop from '../src/components/sections/header/HeaderTop';
import HeaderMiddle from '../src/components/sections/header/HeaderMiddle';
import HeaderBottom from '../src/components/sections/header/HeaderBottom';
import SectionBanner from '../src/components/sections/banner/SectionBanner';
import Section from '../src/components/sections/items/Section';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import SubHeader from '../src/components/sections/items/SubHeader';
import Titles from '../src/components/sections/items/Titles';
import Authors from '../src/components/sections/items/Authors';

const Index: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <BannerPromo />
    <header className="relative">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>

    <main>
      <SectionBanner />
      <Section className="bg-gray-50">
        <DivWrapper>
          <SubHeader>RECOMENDADOS PANAMERICANA</SubHeader>
          <div className="flex">
            <div className="w-[260px]">
              <Image alt="item" src="/img/pastilla.jpg" width="1038" height="1046" />
            </div>
            <div>
              <a href="#" className='mb-2 block'>
                <Titles>
                  Experto Universitario en Psiquiatría y Salud Mental para Atención Primaria
                </Titles>
              </a>
              <Authors>
                Gabriel Rubio Valladolid, Vicente Rodríguez Pèrez, Rocío Martín Valero, Raúl
                Cobreros Mielgo
              </Authors>
            </div>
          </div>
        </DivWrapper>
      </Section>
    </main>
  </>
);

export default Index;
