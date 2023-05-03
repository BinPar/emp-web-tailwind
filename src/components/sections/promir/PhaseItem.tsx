import Months from './Months';
import Phases from './Phases';

interface PhaseItemProps {
  phaseActive: string;
  title: string;
}
const PhaseItem: React.FC<PhaseItemProps> = ({ phaseActive, title }) => (
  <li className="mb-8 text-center md:text-left">
    <h3 className="text-left text-gray-500 font-light text-2sm tracking-[1px] uppercase pb-3 mb-5 border-b border-gray-300">
      {title}
    </h3>
    <div className="inline-block">
      <Months />
      <Phases phaseActive={phaseActive} />
    </div>
  </li>
);
export default PhaseItem;
