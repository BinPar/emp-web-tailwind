import CalibrationPhase from './ClaibrationPhase';
import Months from './Months';
import Phases from './Phases';

interface PhaseBlockProps {
  phaseActive: string;
  title: string;
  text: string;
}

const PhaseBlock: React.FC<PhaseBlockProps> = ({ phaseActive, title, text }) => (
  <li
    className={`mb-5 lg:mb-8 py-8 px-10 text-center list-none md:text-left border-4 w-full lg:w-[calc((100%_/_2)_-_14px)]${
      (phaseActive === 'warm' && ' border-[#f8d473]') ||
      (phaseActive === 'construction' && ' border-[#00a0ba]') ||
      (phaseActive === 'consolidation' && ' border-[#8fc683]') ||
      (phaseActive === 'competition' && ' border-[#a976a7]') ||
      (phaseActive === 'calibration' && ' border-[#f0869d]')
    }`}
  >
    <div className="max-w-[409px] m-auto mb-5">
      <Months className="hidden lg:flex" />
      {phaseActive === 'calibration' ? (
        <CalibrationPhase />
      ) : (
        <Phases
          phaseActive={phaseActive}
          className="justify-center lg:justify-start py-5 lg:py-0"
        />
      )}
    </div>
    <div className="text-center">
      <h3 className="text-left inline-block text-gray-500 font-light text-2sm tracking-[1px] uppercase pb-3 mb-5 border-b border-gray-300">
        {title}
      </h3>
      <p className="font-light text-sm text-gray-400 tracking-[1px]">{text}</p>
    </div>
  </li>
);
export default PhaseBlock;
