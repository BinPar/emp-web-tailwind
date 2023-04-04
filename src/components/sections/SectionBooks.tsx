import React from 'react';

import ItemList from './ItemsList';
import SubHeader from './items/SubHeader';
import data from '../../utils/dataInfoTest/homeBooksInfo';
import DivWrapper from './items/DivWrapper';

const SectionBooks: React.FC = () => (
  <section className="py-10">
    <DivWrapper>
      <SubHeader>LIBROS</SubHeader>
      <ItemList
        data={data}
        itemClassName="md:min-w-[calc(25%_-_20px)]"
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      />
    </DivWrapper>
  </section>
);

export default SectionBooks;
