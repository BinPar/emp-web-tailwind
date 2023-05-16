import type { WithClassName } from '../../../model/react';
import { twMerge } from 'tailwind-merge';
interface PhasesProps {
  phaseActive: string;
}
const Phases: React.FC<WithClassName<PhasesProps>> = ({ phaseActive, className }) => (
  <div className={twMerge('flex mt-1', className)}>
    <span
      className={`block h-2 xs:h-10px md:h-2 lg:h-10px w-[114px] xs:w-[179px] md:w-[137px] lg:w-[179px] mr-1 xs:mr-5px md:mr-1 lg:mr-5px rounded-full bg-gray-200 ${
        phaseActive === 'warm' && ' bg-[#f8d473]'
      }`}
    />
    <span
      className={`block h-2 xs:h-10px md:h-2 lg:h-10px w-[63px] xs:w-[93px] md:w-[71px] lg:w-[93px] mx-0 xs:mx-5px md:mx-1 lg:mx-5px rounded-full bg-gray-200 ${
        phaseActive === 'construction' && ' bg-[#00a0ba]'
      }`}
    />
    <span
      className={`block h-2 xs:h-10px md:h-2 lg:h-10px w-[23.5px] xs:w-8 md:w-6 lg:w-8 mx-1 xs:mx-5px md:mx-1 lg:mx-5px rounded-full bg-gray-200 ${
        phaseActive === 'consolidation' && ' bg-[#8fc683]'
      }`}
    />
    <span
      className={`block h-2 xs:h-10px md:h-2 lg:h-10px w-2 xs:w-10px md:w-2  lg:w-10px ml-0 xs:ml-5px md:ml-1 lg:ml-5px rounded-full bg-gray-200 ${
        phaseActive === 'competition' && ' bg-[#a976a7]'
      }`}
    />
  </div>
);
export default Phases;
