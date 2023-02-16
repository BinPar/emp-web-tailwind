import { WithChildren } from '../../model/react';
import DivWrapper from './items/DivWrapper';
import Section from './items/Section';
import SubHeader from './items/SubHeader';

const SectionBooks: React.FC<WithChildren> = ({ children }) => (
  <Section>
    <DivWrapper className="flex md:gap-10 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] flex-col md:flex-row gap-8">
      <SubHeader>LIBROS</SubHeader>
      <div className="flex lg:flex-row flex-col justify-center">{children}</div>
    </DivWrapper>
  </Section>
);

export default SectionBooks;
