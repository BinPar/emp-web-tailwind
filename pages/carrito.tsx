import Head from 'next/head';
import { useState } from 'react';
import CartList from '../src/components/sections/checkOut/CartList';
import LoginForm from '../src/components/sections/checkOut/LoginForm';
import ModalEmptyCart from '../src/components/sections/checkOut/ModalEmptyCart';
import Order from '../src/components/sections/checkOut/Order';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/header/Header';
import { allCartMap } from '../src/utils/dataInfoTest/itemsCart';

const Cart: React.FC = () => {
  const [closeModal, SetCloseModal] = useState('close');
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <Header />
      <main>
        <section className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px] m-auto lg:flex pt-0 lg:pt-12">
          <CartList data={allCartMap.cart} method={SetCloseModal} value={closeModal} />
          <Order />
          <article className="lg:w-[calc(100%_-_250px)] xl:w-[calc(100%_-_310px)] lg:pr-12 pt-0 lg:pt-12 mb-20">
          <LoginForm />
        </article>
        </section>
     
        {closeModal === 'openEmptyCart' && (
          <ModalEmptyCart ask="¿Estas seguro de querer vaciar el carrito?" method={SetCloseModal} />
        )}
        {closeModal === 'openDeleteProduct' && (
          <ModalEmptyCart
            ask="¿Estás seguro de querer eliminar esta obra?"
            method={SetCloseModal}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
