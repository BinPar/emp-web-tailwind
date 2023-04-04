import Head from 'next/head';
import { useState } from 'react';

import CartList from '../src/components/sections/checkOut/CartList';
import ClientInfo from '../src/components/sections/checkOut/ClientInfo';
import LoginForm from '../src/components/sections/checkOut/LoginForm';
import ModalEmptyCart from '../src/components/sections/checkOut/ModalEmptyCart';
import Order from '../src/components/sections/checkOut/Order';
import RegisterForm from '../src/components/sections/checkOut/RegisterForm';
import SwitchForms from '../src/components/sections/checkOut/SwitchForms';
import MainLayout from '../src/components/sections/MainLayout';
import { allCartMap } from '../src/utils/dataInfoTest/itemsCart';

const CartPage: React.FC = () => {
  const [closeModal, SetCloseModal] = useState('close');
  const [switchForm, SetSwitchForm] = useState(false);
  const [login, SetLogin] = useState(false);
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <MainLayout>
        <section className="lg:flex w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px] m-auto pt-0 lg:pt-12">
          <article className="lg:w-[calc(100%_-_250px)] xl:w-[calc(100%_-_310px)] lg:pr-12 lg:border-r-2 border-lightgray">
            <CartList
              login={login}
              data={allCartMap.cart}
              method={SetCloseModal}
              value={closeModal}
            />
            <Order className="block lg:hidden" />
            <div className='pt-0 lg:pt-12 mb-20'>
            {!login && <SwitchForms setSwitchForm={SetSwitchForm} switchForm={switchForm} />}
            {!login &&
              (!switchForm ? <LoginForm setLogin={SetLogin} login={login} /> : <RegisterForm />)}
            {login && <ClientInfo />}
            </div>
          </article>
          <Order className="lg:block hidden" />
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
      </MainLayout>
    </>
  );
};

export default CartPage;
