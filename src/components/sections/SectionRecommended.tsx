import DivWrapper from './items/DivWrapper';
import ItemFull from './items/ItemFull';
import ItemsShort from './items/ItemsShort';
import Section from './items/Section';
import SubHeader from './items/SubHeader';

const Recommended: React.FC = () => (
  <Section className="bg-gray-50">
    <DivWrapper className='w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)]'>
      <SubHeader>RECOMENDADOS PANAMERICANA</SubHeader>
      <div className="flex lg:flex-row flex-col">
        <ItemFull />
        <ItemsShort />
      </div>
    </DivWrapper>
  </Section>
);

export default Recommended;
