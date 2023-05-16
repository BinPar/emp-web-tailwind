import CourseInfo from './CourseInfo';
import CourseAdvantages from './CourseAdvantages';
import CourseStamp from './CourseStamp';

interface courseProps {
  background: string;
  secondaryBg: string;
  color: string;
}

const Course: React.FC<courseProps> = ({ background, secondaryBg, color }) => (
  <div className={`p-8 flex flex-col lg:flex-row mt-12 relative ${background}`}>
    <CourseInfo />
    <CourseAdvantages secondaryBg={secondaryBg} color={color} />
    <CourseStamp text='posibilidad de pago en cuotas sin intereses'/>
  </div>
);
export default Course;
