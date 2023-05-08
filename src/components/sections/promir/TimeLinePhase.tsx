interface TimeLinePhasesProps {
  size: number;
  type: string;
}

const TimeLinePhase: React.FC<TimeLinePhasesProps> = ({ size, type }) => {
  let width;
  let color;
  switch (size) {
    case 1:
      width = 'max-w-[40px]';
      break;
    case 2:
      width = 'max-w-[90px]';
      break;
    case 3:
      width = 'max-w-[140px]';
      break;
    case 4:
      width = 'max-w-[190px]';
      break;
    case 5:
      width = 'max-w-[240px]';
      break;
    case 6:
      width = 'max-w-[290px]';
      break;
    case 7:
      width = 'max-w-[340px]';
      break;
    case 8:
      width = 'max-w-[390px]';
      break;
    case 9:
      width = 'max-w-[440px]';
  }
  switch (type) {
    case 'warm':
      color = 'bg-[#f8d473]';
      break;
    case 'construction':
      color = 'bg-[#00a0ba]';
      break;
    case 'consolidation':
      color = 'bg-[#8fc683]';
      break;
    case 'competition':
      color = 'bg-[#a976a7]';
  }
  return (
    <span
      className={`block h-2 xs:h-10px md:h-2 lg:h-10px w-full rounded-full bg-gray-200 ${width} ${color}`}
    />
  );
};
export default TimeLinePhase;
