import React from 'react';

import Section from './Section';
import ItemList from './ItemsList';
import SubHeader from './items/SubHeader';

import { authorHomeBooks, currentPriceHomeBooks, fullTextHomeBooks, initialHomeBooks, oldPriceHomeBooks, srcHomeBooks, titleHomeBooks, type2HomeBooks, typeHomeBooks } from '../../utils/dataInfoTest/homeBooksInfo';

const SectionBooks: React.FC = () => (
  <Section>
    <SubHeader>LIBROS</SubHeader>
    <ItemList
      srcList={srcHomeBooks}
      itemClassName="md:min-w-[calc(25%_-_20px)]"
      className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      titleList={titleHomeBooks}
      authorList={authorHomeBooks}
      typeList={typeHomeBooks}
      type2List={type2HomeBooks}
      initialList={initialHomeBooks}
      fullTextList={fullTextHomeBooks}
      oldPriceList={oldPriceHomeBooks}
      currentPriceList={currentPriceHomeBooks}
    />
  </Section>
);

export default SectionBooks;
