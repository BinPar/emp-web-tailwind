import React from 'react';

import Section from './Section';
import ItemList from './ItemsList';
import SubHeader from './items/SubHeader';
import data from '../../utils/dataInfoTest/homeBooksInfo';

const SectionBooks: React.FC = () => (
  <Section>
    <SubHeader>LIBROS</SubHeader>
    <ItemList
      data={data}
      itemClassName="md:min-w-[calc(25%_-_20px)]"
      className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

    />
  </Section>
);

export default SectionBooks;
