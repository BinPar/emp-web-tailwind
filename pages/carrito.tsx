import Head from 'next/head';
import CartList from '../src/components/sections/checkOut/CartList';
import Order from '../src/components/sections/checkOut/Order';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/header/Header';
import { allCartMap } from '../src/utils/dataInfoTest/itemsCart';

const Cart: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <Header />
    <main>
      <section className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px] m-auto lg:flex pt-0 lg:pt-12">
        <CartList data={allCartMap.cart} />
        <Order />
      </section>
      {/* ADRIS AQUI METE MAÑANA EL MODALEPTYCART */}
    </main>
    <Footer />
  </>
);

export default Cart;
