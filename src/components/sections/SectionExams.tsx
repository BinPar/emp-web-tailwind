import React from 'react';

import ItemList from './ItemsList';
import SubHeader from './items/SubHeader';
import data from '../../utils/dataInfoTest/examsInfo';
import DivWrapper from './items/DivWrapper';

const SectionExams: React.FC = () => (
  <section className="py-10">
    <DivWrapper>
      <SubHeader>PREPARACIÓN DE EXÁMENES</SubHeader>
      <ItemList
        data={data}
        itemClassName="md:min-w-[calc(50%_-_20px)] lg:min-w-min"
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      />
    </DivWrapper>
  </section>
);

export default SectionExams;
