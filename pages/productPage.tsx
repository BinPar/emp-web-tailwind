import React, { useState } from 'react';
import Image from 'next/image';

import Head from 'next/head';

import BannerPromo from '../src/components/sections/header/BannerPromo';
import HeaderTop from '../src/components/sections/header/HeaderTop';
import HeaderMiddle from '../src/components/sections/header/HeaderMiddle';
import HeaderBottom from '../src/components/sections/header/HeaderBottom';

import Footer from '../src/components/sections/Footer';
import HeaderMobile from '../src/components/sections/header/HeaderMobile';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import ProductInfo from '../src/components/sections/items/ProductInfo';

import SectionSelection from '../src/components/sections/SectionSelection';
import ItemAcordeon from '../src/components/sections/items/ItemAcordeon';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <BannerPromo />
      <header className="relative" id="header">
        <div className="hidden lg:block">
          <HeaderTop />
          <HeaderMiddle />
          <HeaderBottom />
        </div>
        <div className="block lg:hidden">
          <HeaderMobile />
        </div>
      </header>

      <main>
        <DivWrapper className="flex md:gap-10 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] flex-col md:flex-row gap-8 relative">
          <div className='"mt-12 lg:mt-0 w-full xl:w-[calc(100%-310px)] lg:px-12 flex flex-col'>
            <ProductInfo />
            <ItemAcordeon title="INTRODUCCION">
              <p className="font-light tracking-[1.12px] text-2sm mb-2">
                Los ecógrafos han mejorado mucho en calidad y resolución y la técnica se ha
                expandido hacia otras especialidades. Es por esto que la ecografía
                musculoesquelética se ha desarrollado tremendamente en los últimos 7-8 años.
              </p>
              <p className="font-light tracking-[1.12px] text-2sm">
                Este proyecto busca integrar la experiencia de sus participantes con el nuevo
                desarrollo tecnológico y la posibilidad de cambiar la forma de enseñar ecografía,
                que al ser una técnica dinámica, pierde con los métodos tradicionales de aprendizaje
                en libros.
              </p>
            </ItemAcordeon>
            <ItemAcordeon title="UNIVERSIDAD">
              <div className="w-52 m-auto">
                <Image alt="ufv" src="/assets/ufv.png" width={1400} height={377} />
              </div>
            </ItemAcordeon>
            <ItemAcordeon title="DESCRIPCIÓN">
              <div className="w-72 float-right ml-5 mb-5">
                <Image alt="ufv" src="/assets/imagenProduct.jpeg" width={270} height={180} />
              </div>
              <p className="font-light tracking-[1.12px] text-2sm mb-4">
                El presente curso busca promover la enseñanza de la ecografía musculoesquelética,
                utilizando los recursos que permite una formación online para mostrar los últimos
                avances mediante el uso de recursos dinámicos, como son los vídeos y las imágenes
                tridimensionales.
              </p>
              <p className="font-light tracking-[1.12px] text-2sm mb-4">
                Cada vez con mayor frecuencia se utiliza la ecografía para realizar un correcto
                diagnóstico de las patologías musculoesqueléticas, por lo que hace necesario un
                mejor conocimiento de dicha técnica y su aplicación al entorno musculoesquelético.
              </p>
              <p className="font-light tracking-[1.12px] text-2sm mb-4">
                El contenido del curso muestra una actualización en el diagnóstico
                musculoesquelético, cubriendo las necesidades fundamentales del profesional que
                quiera aprender ecografía musculoesquelética a un nivel avanzado.
              </p>
              <p className="font-light tracking-[1.12px] text-2sm mb-4">
                Cada módulo se aborda desde una visión anatómica normal de la región anatómica, para
                poder adentrarse en un mejor conocimiento de las patologías musculoesqueléticas que
                la afectan.
              </p>
              <p className="font-light tracking-[1.12px] text-2sm mb-4">
                Los profesores son profesionales de máximo prestigio en ecografía a nivel nacional e
                internacional con años de experiencia tanto en ecografía como en docencia. Además,
                abarca enfoque multidisciplinar de la materia impartida.
              </p>
              <p className="font-light tracking-[1.12px] text-2sm mb-4">
                No existe competencia de un curso similar en habla hispana.
              </p>
              <p className="font-light tracking-[1.12px] text-2sm">
                <span className="font-bold">
                  Con la matrícula, de regalo el libro{' '}
                  <a href="#" className="text-primary text-2sm">
                    Ecografía Musculoesquelética (incluye versión digital)
                  </a>
                  profesores de los autores Íñigo Iriarte Posse, Carles Pedret Carballido, Ramon
                  Balius Matas y Luis Cerezal Pesquera.
                </span>
              </p>
            </ItemAcordeon>
          </div>
          <SectionSelection />
        </DivWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Index;
