import React, { useState } from 'react';

import Head from 'next/head';
import Footer from '../src/components/sections/Footer';

import Header from '../src/components/sections/header/Header';
import SubHeader from '../src/components/sections/items/SubHeader';
import ItemList from '../src/components/sections/ItemsList';
import Section from '../src/components/sections/Section';

import data from '../src/utils/dataInfoTest/booksInfo';
import ItemsListView from '../src/components/sections/items/ItemsListView';
import TypeFilter from '../src/components/sections/filters/TypeFilter';
import AuthorFilter from '../src/components/sections/filters/AuthorFilter';
import SpecialtyFilter from '../src/components/sections/filters/SpecialityFilter';
import PriceRangeFilter from '../src/components/sections/filters/PriceRangeFilter';
import OthersFilter from '../src/components/sections/filters/OthersFilter';
import OrderBy from '../src/components/sections/filters/OrderBy';
import VisualGroup from '../src/components/sections/filters/VisualGroup';




const Books: React.FC = () => {
  const [switchItems, setSwitchItems] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <Header />
      <main>
        <VisualGroup method={setSwitchItems} state={switchItems}/>
        
        <TypeFilter />
        <AuthorFilter />
        <SpecialtyFilter />
        <PriceRangeFilter />
        <OthersFilter/>
        <OrderBy/>
        <Section className="py-0">
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
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Books;
