const months = [
  'sep',
  'oct',
  'nov',
  'dic',
  'ene',
  'feb',
  'mar',
  'abr',
  'may',
  'jun',
  'jul',
  'ago',
  'sep',
  'oct',
  'nov',
  'dic',
  'ene',
];

const MonthsTag: React.FC = () => {
  return (
    <ul className='flex gap-10px'>
      {months.map((month, index) => (
        <li>
        <button
          key={index}
          type="button"
          className="text-2xs font-light tracking-[1px] text-gray-400 transition-all duration-150 hover:text-secondarygray hover:bg-[#99d0dd80] bg-gray-100 w-10 h-10 uppercase"
        >
          {month}
        </button>
        </li>
      ))}
    </ul>
  );
};

export default MonthsTag;
