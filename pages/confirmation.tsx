import React, { useState } from 'react';
import Head from 'next/head';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import StickyBuy from '../src/components/sections/items/StickyBuy';
import MainLayout from '../src/components/sections/MainLayout';
import OrderCheckout from '../src/components/sections/newCheckOut/OrderCheckout';
import ConfirmationInfo from '../src/components/sections/newconfirmation/ConfirmationInfo';
import LongArrow from '../src/components/icons/LongArrow';
import DataSummary from '../src/components/sections/newconfirmation/DataSummary';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

interface QueryParams extends ParsedUrlQuery {
  mode?: string;
}

const confirmation: React.FC = () => {
  const [selected, setSelected] = useState('');
  const router = useRouter();
  const { mode } = router.query as QueryParams;
  console.log(mode);
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <MainLayout>
        <DivWrapper className="flex md:gap-10 flex-col md:flex-row gap-8 relative">
          <section className="mt-8 w-full lg:grid lg:grid-cols-[1fr,_270px] xl:grid-cols-[1fr,_310px] lg:gap-5 xl:gap-10">
            <div>
              <a
                href="/newCheckOut"
                className="w-fit mb-8 text-gray-400 flex justify-start gap-2 top-6 left-6 xs2:top-24 xs2:left-24 border border-gray-200 rounded-full px-4 pb-[1px] bg-whiteSmoke hover:bg-white hover:shadow-sp1 hover:border-white transition-all duration-300"
              >
                <LongArrow className="w-6 rotate-180" />
                volver
              </a>
              {mode === 'collection' ? (
                <ConfirmationInfo method={setSelected} value={selected} mode={mode} />
              ) : (
                <ConfirmationInfo method={setSelected} value={selected} />
              )}
              {mode !== 'collection' ? <DataSummary /> : <DataSummary mode={mode} />}
            </div>
            <div className="relative">
              {mode !== 'collection' ? (
                <OrderCheckout
                  isConfirmation
                  code={true}
                  method={setSelected}
                  value={selected}
                  className="hidden lg:block mt-12"
                />
              ) : (
                <OrderCheckout
                  isConfirmation
                  code={true}
                  method={setSelected}
                  value={selected}
                  className="hidden lg:block mt-12"
                  isCollection
                />
              )}
            </div>
          </section>
        </DivWrapper>
        <StickyBuy type="Expertos" oldPrice="55" price="52,25" link="#" title="finalizar y pagar" />
      </MainLayout>
    </>
  );
};

export default confirmation;
