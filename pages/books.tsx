import React, { useState } from 'react';
import Head from 'next/head';
import SubHeader from '../src/components/sections/items/SubHeader';
import ItemList from '../src/components/sections/ItemsList';

import data from '../src/utils/dataInfoTest/booksInfo';
import ItemsListView from '../src/components/sections/items/ItemsListView';
import Filters from '../src/components/sections/filters/Filters';
import MainLayout from '../src/components/sections/MainLayout';
import DivWrapper from '../src/components/sections/items/DivWrapper';

const BooksPage: React.FC = () => {
  const [switchItems, setSwitchItems] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <MainLayout>
        <Filters method={setSwitchItems} state={switchItems} />
        <section>
          <DivWrapper>
            <SubHeader className="border-b-gray-200 text-base mt-5">LIBROS</SubHeader>
            {!switchItems ? (
              <ItemList
                className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl2:grid-cols-5"
                data={data}
              />
            ) : (
              <ItemsListView
                data={data}
                itemClassName=" lg:border-b lg:border-secondary lg:pb-7"
                className=" grid-cols-1 gap-7 lg:gap-10"
              />
            )}
          </DivWrapper>
        </section>
      </MainLayout>
    </>
  );
};

export default BooksPage;
