import Head from 'next/head';
import { useState } from 'react';
import ArrowRight from '../src/components/icons/ArrowRight';

import CartList from '../src/components/sections/checkOut/CartList';
import ConfirmOrder from '../src/components/sections/checkOut/ConfirmOrder';
import Order from '../src/components/sections/checkOut/Order';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/header/Header';
import { allCartMap } from '../src/utils/dataInfoTest/itemsCart';

const CheckOut: React.FC = () => {
  const [closeModal, SetCloseModal] = useState('close');
  const login = false;
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <Header />
      <main>
        <section className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px] m-auto pt-0 lg:pt-12">
          <a
            href="/carrito"
            className="max-w-[100px] text-gray-400 hover:text-primary flex items-center relative -left-3 text-sm font-light tracking-[1px] mb-8"
          >
            <ArrowRight className="rotate-180 w-7" />
            Regresar
          </a>
          <article className="lg:flex">
            <div className="lg:w-[calc(100%_-_250px)] xl:w-[calc(100%_-_310px)]">
              <p className="text-lg font-normal text-gray-300 tracking-[1px]">CONFIRMAR PEDIDO</p>
              <CartList
                confirmOrder
                login={login}
                data={allCartMap.cart}
                method={SetCloseModal}
                value={closeModal}
                wrapClassName="!w-full"
              />
            </div>
            <Order />
          </article>
          <ConfirmOrder />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CheckOut;
