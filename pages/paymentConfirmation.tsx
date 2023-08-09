import React, { useState } from 'react';
import Head from 'next/head';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import MainLayout from '../src/components/sections/MainLayout';
import Success from '../src/components/sections/newconfirmation/Success';
import Fail from '../src/components/sections/newconfirmation/Fail';

const PaymentConfirmation: React.FC = () => {
const confirmation = false;
    return(
      <>
        <Head>
          <title>Ejemplo de página de EMP en TW</title>
          <meta name="description" content="Ejemplo de página de EMP en TW" />
          <meta property="og:image" content="/assets/rocketLaptop.png" />
        </Head>
        <MainLayout>
          <DivWrapper className=" xs2:py-12 py-7 !max-w-[1140px]">
            {!confirmation  ? <Fail/> : <Success/>}
            
          </DivWrapper>
        </MainLayout>
      </>
    );
}

export default PaymentConfirmation;
