
import CourseInfo from './CourseInfo';
import CourseAdvantages from './CourseAdvantages';

interface courseProps {
  background: string;
  secondaryBg: string;
}

const Course: React.FC<courseProps> = ({ background, secondaryBg }) => (
  <div className={`p-8 flex flex-col lg:flex-row mt-12 bg-[${background}]`}>
    <CourseInfo />
    <CourseAdvantages secondaryBg={secondaryBg} color={background} />
  </div>
);
export default Course;
