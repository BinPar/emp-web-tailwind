import MonthsTagList from './MonthsTagList';
import TimeLineLegend from './TimeLineLegend';
import TimeLinePhases from './TimeLinePhases';
import YearLine from './YearLine';

const DesktopTimeLine: React.FC = () => (
  <div className="max-w-[840px] mt-10 m-auto hidden lg:block">
    <YearLine />
    <MonthsTagList />
    <TimeLinePhases />
    <TimeLineLegend />
  </div>
);
export default DesktopTimeLine;
