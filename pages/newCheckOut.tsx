import React, { useState } from 'react';

import Head from 'next/head';
import DivWrapper from '../src/components/sections/items/DivWrapper';
import FloatingMenu from '../src/components/sections/items/FloatingMenu';
import StickyBuy from '../src/components/sections/items/StickyBuy';
import MainLayout from '../src/components/sections/MainLayout';
import NewOrder from '../src/components/sections/newProductPage/NewOrder';
import NewProductInfo from '../src/components/sections/newProductPage/NewProductInfo';
import OrderCheckout from '../src/components/sections/newCheckOut/OrderCheckout';
import NewCheckOutInfo from '../src/components/sections/newCheckOut/NewCheckOutInfo';
import PersonalInfo from '../src/components/sections/newCheckOut/PersonalInfo';
import AddressInfo from '../src/components/sections/newCheckOut/AddressInfo';
import PaymentInfo from '../src/components/sections/newCheckOut/PaymentInfo';
import OtherInfo from '../src/components/sections/newCheckOut/OtherInfo';
import PersonalInfoPopUp from '../src/components/sections/newCheckOut/popUp/PersonalInfoPopUp';
import NewAddress from '../src/components/sections/newCheckOut/popUp/NewAddress';
import NewCard from '../src/components/sections/newCheckOut/popUp/NewCard';
import CouponsInfo from '../src/components/sections/newCheckOut/CouponsInfo';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

interface QueryParams extends ParsedUrlQuery {
  mode?: string;
}

const newCheckOut: React.FC<QueryParams> = () => {
  const [selected, setSelected] = useState('');
  const [areaSelected, SetAreaSelected] = useState('');
  const [codeApply, SetCodeApply] = useState(false);
  const router = useRouter();
  const { mode } = router.query as QueryParams;
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <MainLayout>
        <DivWrapper className="flex md:gap-10 flex-col md:flex-row gap-8 relative">
          <section className="mt-10 lg2:mt-12 w-full lg:grid lg:grid-cols-[1fr,_270px] xl:grid-cols-[1fr,_310px] lg:gap-5 xl:gap-10">
            <div>
              <NewCheckOutInfo code={codeApply} method={setSelected} value={selected} mode={mode}/>
              <CouponsInfo codeMethod={SetCodeApply} codeValue={codeApply} />
              <PersonalInfo method={SetAreaSelected} value={areaSelected} />
              <AddressInfo method={SetAreaSelected} value={areaSelected} mode={mode} />
              <PaymentInfo method={SetAreaSelected} value={areaSelected} mode={mode}/>
              {mode !== 'collection' && <OtherInfo />}
            </div>
            <div className="relative">
              {mode !== 'collection' ? <OrderCheckout
                code={codeApply}
                method={setSelected}
                value={selected}
                className="hidden lg:block -mt-3"
              /> : <OrderCheckout
              code={codeApply}
              method={setSelected}
              value={selected}
              className="hidden lg:block -mt-3"
              isCollection
            /> }
              
            </div>
          </section>
        </DivWrapper>
        <StickyBuy type="Expertos" oldPrice="55" price="52,25" link="#" title="pagar ahora" />
        <PersonalInfoPopUp method={SetAreaSelected} value={areaSelected} />
        <NewAddress method={SetAreaSelected} value={areaSelected} />
        <NewCard method={SetAreaSelected} value={areaSelected} />
      </MainLayout>
    </>
  );
};

export default newCheckOut;
