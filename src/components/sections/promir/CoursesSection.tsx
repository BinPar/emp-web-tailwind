import { useState } from 'react';
import DivWrapper from '../items/DivWrapper';
import ButtonPromir from './ButtonPromir';
import ButtonsList from './ButtonsList';
import CourseSelection from './CourseSelection';
import PriceBox from './PriceBox';
import DesktopTimeLine from './DesktopTimeLine';
import MobileTimeLine from './MobileTimeLine';
import PromirP from './PromirP';
import Course from './Course';

const CoursesSection: React.FC = () => {
  const [selected, SetSelected] = useState('');
  return (
    <section>
      <DivWrapper>
        <CourseSelection />
        <ButtonsList selected={SetSelected} value={selected} />

        <div className="flex gap-5 justify-between items-end mb-14 md:mb-5">
          <h3 className="hidden lg:block w-full max-h-6 uppercase text-gray-500 font-light text-2sm pb-3 border-b border-gray-300 tracking-[1px]">
            {selected}
          </h3>

          <div className="flex items-center flex-col md:flex-row gap-5 w-full lg:w-auto justify-between">
            <PriceBox price="1.500" />
            <ButtonPromir
              className="border-greencart hover:bg-greencart text-greencart min-h-[40px] md:min-h-[78.5px]"
              link
              href="#"
            >
              Matricúlate
            </ButtonPromir>
          </div>
        </div>
        <DesktopTimeLine />
        <MobileTimeLine />
        <Course background="bg-[#a1c25e]" color="#a1c25e" secondaryBg="bg-[#f6f8f0]" />
      </DivWrapper>
    </section>
  );
};
export default CoursesSection;
