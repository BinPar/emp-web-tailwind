import Image from 'next/image';
import PromirP from './PromirP';

interface MethodologyItemProps {
  src: string;
  title: string;
  text: string;
}

const MethodologyItem: React.FC<MethodologyItemProps> = ({ src, title, text }) => (
  <li className='border border-gray-300 p-5 text-center w-full md:w-[calc((100%_/_2)_-_11px)] lg:w-[calc((100%_/_3)_-_11px)]'>
    <Image width={150} height={150} alt="methodology" src={`/img/${src}`} className='m-auto' />
    <h3 className="w-full text-center mb-5 uppercase text-gray-500 font-light text-2sm pb-3 border-b border-gray-300 tracking-[1px]">
      {title}
    </h3>
    <PromirP>{text}</PromirP>
  </li>
);
export default MethodologyItem;
