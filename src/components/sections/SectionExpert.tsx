import DivWrapper from './items/DivWrapper';
import ItemNormal from './items/ItemsNormal';
import Section from './items/Section';
import SubHeader from './items/SubHeader';

const Expert: React.FC = () => (
  <Section>
    <DivWrapper className="flex gap-10 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)]">
      <div className="w-1/2">
        <SubHeader>EXPERTOS</SubHeader>
        <div className="flex lg:flex-row flex-col">
            <ItemNormal/>
        </div>
      </div>
      <div className="w-1/2">
        <SubHeader>MÁSTERES</SubHeader>
        <div className="flex lg:flex-row flex-col">
        <ItemNormal/>
        </div>
      </div>
    </DivWrapper>
  </Section>
);

export default Expert;
