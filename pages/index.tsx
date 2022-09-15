import React from 'react';
import Head from 'next/head';

const Index: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <div className="bg-primaryvariant h-[70px] text-white text-center tracking-wider flex flex-col justify-center">
      <p className="">Semana de la Fisioterapia, hasta 50% dto.</p>
      <div className="mt-2 text-xs font-light flex justify-center">
        <p>Promoción válida hasta el 15 de septiembre.</p>
        <a
          href="https://www.medicapanamericana.com/es/general/formacion/profesional-fisioterapeuta"
          className="uppercase pb-1 border-b border-white hover:bg-white"
        >
          Ver cursos.
        </a>
      </div>
    </div>
    <header>
      <div className="bg-lightgray">
        <div className="flex flex-row items-center justify-end text-secondarygray text-2xs uppercase h-[35px] tracking-widest w-[calc(_100%_-_100px)] m-auto">
          <div>
            <a href="/es/somos">Editorial</a>
            <a className="ml-2.5 pl-2.5 border-l border-secondarygray" href="/es/autores">
              Autores
            </a>
            <a
              href="https://aula.campuspanamericana.com/"
              className="ml-2.5 pl-2.5 border-l border-primary"
            >
              Campus
            </a>
          </div>
          <div className="text-primary uppercase tracking-widest ml-8 flex">
            <button type="button" className="uppercase tracking-widest">
              Iniciar sesión
            </button>
            <a
              className="ml-2.5 pl-2.5 border-l-2 border-primary"
              rel="nofollow"
              href="/es/registrarme"
            >
              Registrarse
            </a>
            <a
              className="ml-2.5 pl-2.5 pr-2.5 border-l-2 border-r-2 border-primary"
              rel="nofollow"
              href="/es/contacto"
            >
              Contacto
            </a>
            <div className="inline-block pl-2.5">
              <img src="/img/spain.png" alt="es" className="aspect-square w-4 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Index;
