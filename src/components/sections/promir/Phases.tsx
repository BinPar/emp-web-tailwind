interface PhasesProps {
  phaseActive: string;
}
const Phases: React.FC<PhasesProps> = ({ phaseActive }) => (
  <div className="flex mt-1">
    <span
      className={`block h-3 w-[236px] mr-4 rounded-full bg-gray-200 ${
        phaseActive === 'warm' && ' bg-[#f8d473]'
      }`}
    />
    <span
      className={`block h-3 w-[123.5px] mr-4 rounded-full bg-gray-200 ${
        phaseActive === 'construction' && ' bg-[#00a0ba]'
      }`}
    />
    <span
      className={`block h-3 w-[40.5px] mr-4 rounded-full bg-gray-200 ${
        phaseActive === 'consolidation' && ' bg-[#8fc683]'
      }`}
    />
    <span
      className={`block h-3 w-3 rounded-full bg-gray-200 ${
        phaseActive === 'competition' && ' bg-[#a976a7]'
      }`}
    />
  </div>
);
export default Phases;
