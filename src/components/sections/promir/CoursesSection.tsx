import { SetStateAction, useState } from 'react';
import DivWrapper from '../items/DivWrapper';
import ButtonProduct from './ButtonProduct';
import ButtonPromir from './ButtonPromir';
import ButtonsList from './ButtonsList';
import CourseSelection from './CourseSelection';
import PriceBox from './PriceBox';

const CoursesSection: React.FC = () => {
  const [selected, SetSelected] = useState('');
  return (
    <section>
      <DivWrapper>
        <CourseSelection />
        <ButtonsList selected={SetSelected} value={selected} />

        <div className="flex gap-5 items-end mb-5">
          <h3 className="w-full max-h-6 uppercase text-gray-500 font-light text-2sm pb-3 border-b border-gray-300 tracking-[1px]">
            {selected}
          </h3>

          <div className="flex items-center gap-5">
            <PriceBox price="1.500" />
            <ButtonPromir
              className="border-greencart hover:bg-greencart text-greencart min-h-[78.5px]"
              link
              href="#"
            >
              Matricúlate
            </ButtonPromir>
          </div>
        </div>
      </DivWrapper>
    </section>
  );
};
export default CoursesSection;
