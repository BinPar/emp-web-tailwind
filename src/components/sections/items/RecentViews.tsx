/* eslint-disable @typescript-eslint/no-shadow */
import CarouselList from '../CarouselList';
import DivWrapper from './DivWrapper';
import SubHeader from './SubHeader';
import data from '../../../utils/dataInfoTest/recentViews';

const RecentViews: React.FC = () => (
  <section className="py-10 bg-lightgray flex md:gap-10 flex-col md:flex-row gap-8">
    <DivWrapper>
      <div className="w-full">
        <SubHeader>TUS CONSULTAS RECIENTES</SubHeader>
        <CarouselList data={data} />
      </div>
    </DivWrapper>
  </section>
);

export default RecentViews;
