import TimeLineLegend from './TimeLineLegend';

const MobileTimeLine: React.FC = () => (
  <>
    <ul className="flex gap-10px lg:hidden">
      <li className="w-[63.3%]">
        <span className="block h-10px rounded-full bg-[#f8d473]" />
        <div className="flex justify-between mt-10px">
          <p className="uppercase text-2xs text-[#f8d473]">sep</p>
          <p className="uppercase text-2xs text-[#f8d473]">may</p>
        </div>
      </li>
      <li className="w-[34.5%]">
        <span className="block h-10px rounded-full bg-[#00a0ba]" />
        <div className="flex justify-between mt-10px">
          <p className="uppercase text-2xs text-[#00a0ba]">sep</p>
          <p className="uppercase text-2xs text-[#00a0ba]">may</p>
        </div>
      </li>
      <li className="w-[13%]">
        <span className="block h-10px rounded-full bg-[#8fc683]" />
        <div className="flex justify-between mt-10px">
          <p className="uppercase text-2xs text-[#8fc683]">sep</p>
          <p className="uppercase text-2xs text-[#8fc683]">may</p>
        </div>
      </li>
      <li className="w-[5%]">
        <span className="block h-10px rounded-full bg-[#a976a7]" />
        <div className="flex justify-between mt-10px">
          <p className="uppercase text-2xs text-[#a976a7]">sep</p>
          <p className="uppercase text-2xs text-[#a976a7]">may</p>
        </div>
      </li>
    </ul>
    <TimeLineLegend className='lg:hidden flex-wrap'/>
  </>
);
export default MobileTimeLine;
