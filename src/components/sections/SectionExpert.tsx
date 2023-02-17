import React from 'react';

import { authorExpert, currentPriceExpert, fullTextExpert, initialExpert, oldPriceExpert, srcExpert, titleExpert, typeExpert } from '../../utils/dataInfoTest/expertsInfo';
import { authorMasters, currentPriceMasters, fullTextMasters, initialMasters, oldPriceMasters, srcMasters, titleMasters, typeMasters } from '../../utils/dataInfoTest/mastersInfo';

import SubHeader from './items/SubHeader';
import ItemList from './ItemsList';
import Section from './Section';



const SectionExpert: React.FC = () => (
  <Section secondClassName="flex md:gap-10 flex-col md:flex-row gap-8">
    <div className="md:w-1/2 w-full">
      <SubHeader>EXPERTOS</SubHeader>
      <ItemList
        srcList={srcExpert}
        itemClassName="md:min-w-[calc(50%_-_20px)] lg:min-w-min"
        className="grid-cols-1 xl:grid-cols-2"
        titleList={titleExpert}
        authorList={authorExpert}
        typeList={typeExpert}
        initialList={initialExpert}
        fullTextList={fullTextExpert}
        oldPriceList={oldPriceExpert}
        currentPriceList={currentPriceExpert}
      />
    </div>
    <div className="md:w-1/2 w-full">
      <SubHeader>MÁSTERES</SubHeader>
      <ItemList
        srcList={srcMasters}
        itemClassName="md:min-w-[calc(50%_-_20px)] lg:min-w-min"
        className="grid-cols-1 xl:grid-cols-2"
        titleList={titleMasters}
        authorList={authorMasters}
        typeList={typeMasters}
        initialList={initialMasters}
        fullTextList={fullTextMasters}
        oldPriceList={oldPriceMasters}
        currentPriceList={currentPriceMasters}
      />
    </div>
  </Section>
);

export default SectionExpert;
