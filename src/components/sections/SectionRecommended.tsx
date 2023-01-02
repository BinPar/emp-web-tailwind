import DivWrapper from './items/DivWrapper';
import ItemFull from './items/ItemFull';
import ItemsShort from './items/ItemsShort';
import Section from './items/Section';
import SubHeader from './items/SubHeader';

const Recommended: React.FC = () => (
  <Section className="bg-gray-50">
    <DivWrapper>
      <SubHeader>RECOMENDADOS PANAMERICANA</SubHeader>
      <div className="flex">
        <ItemFull />
        <ItemsShort />
      </div>
    </DivWrapper>
  </Section>
);

export default Recommended;
