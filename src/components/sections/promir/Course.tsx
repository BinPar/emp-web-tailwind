import CourseInfo from './CourseInfo';
import CourseAdvantages from './CourseAdvantages';

interface courseProps {
  background: string;
  secondaryBg: string;
  color: string;
}

const Course: React.FC<courseProps> = ({ background, secondaryBg, color }) => (
  <div className={`p-8 flex flex-col lg:flex-row mt-12 ${background}`}>
    <CourseInfo />
    <CourseAdvantages secondaryBg={secondaryBg} color={color} />
  </div>
);
export default Course;
