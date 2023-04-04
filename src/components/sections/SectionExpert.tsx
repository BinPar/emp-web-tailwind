import React from 'react';
import expertsData from '../../utils/dataInfoTest/expertsInfo';
import mastersData from '../../utils/dataInfoTest/mastersInfo';
import DivWrapper from './items/DivWrapper';
import SubHeader from './items/SubHeader';
import ItemList from './ItemsList';


const SectionExpert: React.FC = () => (
  <section className="py-10">
    <DivWrapper className='flex md:gap-10 flex-col md:flex-row gap-8'>
      <article className="md:w-1/2 w-full">
        <SubHeader>EXPERTOS</SubHeader>
        <ItemList
          itemClassName="md:min-w-[calc(50%_-_20px)] lg:min-w-min"
          className="grid-cols-1 xl:grid-cols-2"
          data={expertsData}
        />
      </article>
      <article className="md:w-1/2 w-full">
        <SubHeader>MÁSTERES</SubHeader>
        <ItemList
          itemClassName="md:min-w-[calc(50%_-_20px)] lg:min-w-min"
          className="grid-cols-1 xl:grid-cols-2"
          data={mastersData}
        />
      </article>
    </DivWrapper>
  </section>
);

export default SectionExpert;
