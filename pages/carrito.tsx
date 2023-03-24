import Head from 'next/head';
import OrderResume from '../src/components/sections/checkOut/OrderResume';
import Footer from '../src/components/sections/Footer';
import Header from '../src/components/sections/header/Header';
import ProductSelection from '../src/components/sections/items/ProductSelection';
import ProductWarranty from '../src/components/sections/items/ProductWarranty';

const Books: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <Header />
    <main>
      <section>
        <article className='mb-8 lg:mb-0 w-[calc(100%_+_50px)] -left-6 lg:left-auto mt-11 lg:mt-0 lg:max-w-[250px] xl:max-w-[310px] relative lg:absolute right-0 border-l-2 border-lightgray bg-white'>
        <ProductSelection title='Tu pedido'/>
        <OrderResume/> 
        <ProductWarranty />
        </article>
      </section>
    </main>
    <Footer />
  </>
);

export default Books;
