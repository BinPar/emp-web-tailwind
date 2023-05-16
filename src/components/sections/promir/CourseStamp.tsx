import Image from 'next/image';
interface CourseStampProps {
    text: string;
}
const CourseStamp: React.FC<CourseStampProps> = ({text}) => (
  <div className="w-44 -bottom-32 left-[calc(50%_-_90px)] absolute md:-bottom-4 md:-right-4">
    <div className="flex items-center relative">
      <Image width={180} height={180} alt="snap" src="/img/snap.svg" className="min-w-[180px]" />
      <p className="uppercase text-[12.8px] tracking-[1px] font-semibold text-gray-400 absolute text-center m-auto w-36 left-[calc(50%_-_72px)]">
        {text}
      </p>
    </div>
  </div>
);
export default CourseStamp;
