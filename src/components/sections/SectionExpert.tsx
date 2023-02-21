import React from 'react';
import expertsData from '../../utils/dataInfoTest/expertsInfo';
import mastersData from '../../utils/dataInfoTest/mastersInfo';




import SubHeader from './items/SubHeader';
import ItemList from './ItemsList';
import Section from './Section';



const SectionExpert: React.FC = () => (
  <Section secondClassName="flex md:gap-10 flex-col md:flex-row gap-8">
    <div className="md:w-1/2 w-full">
      <SubHeader>EXPERTOS</SubHeader>
      <ItemList
        itemClassName="md:min-w-[calc(50%_-_20px)] lg:min-w-min"
        className="grid-cols-1 xl:grid-cols-2"
        data={expertsData}
      />
    </div>
    <div className="md:w-1/2 w-full">
      <SubHeader>MÁSTERES</SubHeader>
      <ItemList
        itemClassName="md:min-w-[calc(50%_-_20px)] lg:min-w-min"
        className="grid-cols-1 xl:grid-cols-2"
        data={mastersData}
      />
    </div>
  </Section>
);

export default SectionExpert;
