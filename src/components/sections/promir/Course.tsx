import CourseInfo from './CourseInfo';
import CourseAdvantages from './CourseAdvantages';
import CourseStamp from './CourseStamp';
import ButtonPromir from './ButtonPromir';

interface courseProps {
  background: string;
  secondaryBg: string;
  color: string;
}

const Course: React.FC<courseProps> = ({ background, secondaryBg, color }) => (
  <div className={`p-8 mt-12 relative ${background}`}>
    <div className="flex flex-col lg:flex-row">
      <CourseInfo />
      <CourseAdvantages secondaryBg={secondaryBg} color={color} />
    </div>
    <ButtonPromir className="border-white text-white mt-10">MÁS INFORMACIÓN</ButtonPromir>
    <CourseStamp text="posibilidad de pago en cuotas sin intereses" />
  </div>
);
export default Course;
