import ItemFull from './items/ItemFull';
import ItemsShort from './items/ItemsShort';

import SubHeader from './items/SubHeader';
import Section from './Section';

const Recommended: React.FC = () => (
  <Section className="bg-gray-50">
    <SubHeader>RECOMENDADOS PANAMERICANA</SubHeader>
    <div className="flex lg:flex-row flex-col">
      <ItemFull />
      <ItemsShort />
    </div>
  </Section>
);

export default Recommended;
