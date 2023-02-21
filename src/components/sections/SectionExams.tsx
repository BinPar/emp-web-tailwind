import React from 'react';

import Section from './Section';
import ItemList from './ItemsList';
import SubHeader from './items/SubHeader';
import data from '../../utils/dataInfoTest/examsInfo';

const SectionExams: React.FC = () => (
  <Section>
    <SubHeader>PREPARACIÓN DE EXÁMENES</SubHeader>
    <ItemList
      data={data}
      itemClassName="md:min-w-[calc(50%_-_20px)] lg:min-w-min"
      className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    />
  </Section>
);

export default SectionExams;
