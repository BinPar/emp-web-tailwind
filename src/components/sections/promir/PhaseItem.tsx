import Months from './Months';
import Phases from './Phases';

interface PhaseItemProps {
  phaseActive: string;
  title: string;
}
const PhaseItem: React.FC<PhaseItemProps> = ({ phaseActive, title }) => (
  <div className='mb-8'>
    <h3 className="text-gray-400 text-2sm tracking-[1px] uppercase pb-3 mb-5 border-b border-gray-300">
      {title}
    </h3>
    <Months />
    <Phases phaseActive={phaseActive} />
  </div>
);
export default PhaseItem;
