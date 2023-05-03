import Image from 'next/image';
import PromirP from './PromirP';

interface MethodologyProps {
  title: string;
  src: string;
  text: string;
}
const Methodology: React.FC<MethodologyProps> = ({ title, src, text }) => (
  <li>
    <h3 className="text-secondarygray text-2sm tracking-[1px] uppercase pb-3 mb-5 border-b border-secondarygray min-h-[48px]">
      {title}
    </h3>
    <Image width={150} height={150} alt="test" src={src} className="m-auto" />
    <PromirP className='text-center'>{text}</PromirP>
  </li>
);
export default Methodology;
