import TimeLinePhase from './TimeLinePhase';

const TimeLinePhases: React.FC = () => {
  return (
    <div className="mt-10px flex gap-10px">
     <TimeLinePhase size={9} type='warm'/>
     <TimeLinePhase size={5} type='construction'/>
     <TimeLinePhase size={2} type='consolidation'/>
     <TimeLinePhase size={1} type='competition'/>
    </div>
  );
};
export default TimeLinePhases;
