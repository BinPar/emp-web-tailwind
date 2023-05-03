import PhaseItem from './PhaseItem';

const PhasesLink: React.FC = () => (
  <ul className='w-full lg:w-2/4 grid grid-cols-1 md:gap-x-10 md:grid-cols-2 lg:grid-cols-1'>
    <PhaseItem title="CALENTAMIENTO" phaseActive="warm" />
    <PhaseItem title="CONSTRUCCIÓN" phaseActive="construction" />
    <PhaseItem title="CONSOLIDACIÓN" phaseActive="consolidation" />
    <PhaseItem title="COMPETICIÓN" phaseActive="competition" />
  </ul>
);

export default PhasesLink;
