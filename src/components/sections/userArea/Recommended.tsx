import CarouselList from '../CarouselList';
import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';
import data from '../../../utils/dataInfoTest/recommendedInfo';

const Recommended: React.FC = () => (
<section className="py-10 bg-white flex md:gap-10 flex-col md:flex-row gap-8">
    <DivWrapper>
      <div className="w-full">
        <SubHeader>PUBLICACIONES RECOMENDADAS PARA TI</SubHeader>
        <CarouselList data={data} />
      </div>
    </DivWrapper>
  </section>
);
export default Recommended