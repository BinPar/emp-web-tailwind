import DivWrapper from './items/DivWrapper';
import ItemFull from './items/ItemFull';
import ItemsShort from './items/ItemsShort';

import SubHeader from './items/SubHeader';


const SectionRecommended: React.FC = () => (
  <section className="py-10 bg-gray-50 mt-10">
    <DivWrapper>
      <SubHeader>RECOMENDADOS PANAMERICANA</SubHeader>
      <div className="flex lg:flex-row flex-col">
        <ItemFull />
        <ItemsShort />
      </div>
    </DivWrapper>
  </section>
);

export default SectionRecommended;
