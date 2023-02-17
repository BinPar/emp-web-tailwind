import React from 'react';

import Section from './Section';
import ItemList from './ItemsList';
import SubHeader from './items/SubHeader';

import { authorExams, currentPriceExams, fullTextExams, initialExams, oldPriceExams, srcExams, titleExams, typeExams } from '../../utils/dataInfoTest/examsInfo';


const SectionExams: React.FC = () => (
      <Section>
        <SubHeader>PREPARACIÓN DE EXÁMENES</SubHeader>
        <ItemList
          srcList={srcExams}
          itemClassName="md:min-w-[calc(50%_-_20px)] lg:min-w-min"
          className='grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          titleList={titleExams}
          authorList={authorExams}
          typeList={typeExams}
          initialList={initialExams}
          fullTextList={fullTextExams}
          oldPriceList={oldPriceExams}
          currentPriceList={currentPriceExams}
        />
      </Section>
);

export default SectionExams;
