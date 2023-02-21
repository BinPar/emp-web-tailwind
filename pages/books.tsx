import React, { useState } from 'react';

import Head from 'next/head';
import Footer from '../src/components/sections/Footer';

import Header from '../src/components/sections/header/Header';
import SubHeader from '../src/components/sections/items/SubHeader';
import ItemList from '../src/components/sections/ItemsList';
import Section from '../src/components/sections/Section';

import data from '../src/utils/dataInfoTest/booksInfo';
import List from '../src/components/icons/List';
import Items from '../src/components/icons/Items';
import ItemsListView from '../src/components/sections/items/ItemsListView';
import ArrowDown from '../src/components/icons/ArrowDown';
import Check from '../src/components/icons/Check';
import FilterWrap from '../src/components/sections/filters/FilterWrap';


const Books: React.FC = () => {
  const [switchItems, setSwitchItems] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <Header />
      <main>
        <div className="hidden lg:gap-5 lg:flex text-gray-400">
          <button type="button" onClick={(): void => setSwitchItems(!switchItems)}>
            <List className={`w-5${switchItems ? ' text-primary' : ''}`} />
          </button>
          <button type="button" onClick={(): void => setSwitchItems(!switchItems)}>
            <Items className={`w-5${!switchItems ? ' text-primary' : ''}`} />
          </button>
        </div>

        <FilterWrap>  
          <button
            type="button"
            className={`m-auto hover:text-primary text-1xs flex items-center gap-2 border border-transparent hover:border-gray-200 py-3 px-2${openFilter ? ' text-primary' : ' text-gray-500'}`}
            onClick={(): void => setOpenFilter(!openFilter)}
          >
            Tipo
            <ArrowDown strokeWidth={4} className={`w-4 transition-all duration-200${openFilter ? ' rotate-180' : ''}`}/>
          </button>
          <div className={`border-2 bg-white border-gray-200 absolute top-12 py-5 pl-2 pr-6 mt-3${openFilter ? ' inline-block' : ' hidden'}`}>
            <form className='inline-block'>
              <label
                htmlFor="papel"
                className="flex text-1xs text-gray-400 font-thin tracking-[1px] relative"
              >
                <Check className={`text-secondary w-5 absolute -left-1${checked ? ' block' : ' hidden'}`} />
                <input
                  type="checkbox"
                  onClick={(): void => setChecked(!checked)}
                  id="papel"
                  value="papel"
                  name="papel"
                  className="opacity-0 mr-2"
                />
                Papel
              </label>
              <label
                htmlFor="digital"
                className="flex text-1xs text-gray-400 font-thin tracking-[1px] relative"
              >
                <Check className={`text-secondary w-5 absolute -left-1${!checked ? ' block' : ' hidden'}`} />
                <input
                  type="checkbox"
                  onClick={(): void => setChecked(!checked)}
                  id="digital"
                  value="digital"
                  name="digital"
                  className="opacity-0 mr-2"
                />
                digital
              </label>
            </form>
          </div>
        </FilterWrap>
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
