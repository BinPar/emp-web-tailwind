const TimeLineLegend: React.FC = () => (
  <ul className="mt-10px flex gap-4">
    <li className="flex gap-10px items-center">
      <span className="w-10px h-10px bg-[#f8d473] rounded-full" />
      <span className="uppercase text-gray-400 text-2xs tracking-[1px]">calentamiento</span>
    </li>
    <li className="flex gap-10px items-center">
      <span className="w-10px h-10px bg-[#00a0ba] rounded-full" />
      <span className="uppercase text-gray-400 text-2xs tracking-[1px]">construcción</span>
    </li>
    <li className="flex gap-10px items-center">
      <span className="w-10px h-10px bg-[#8fc683] rounded-full" />
      <span className="uppercase text-gray-400 text-2xs tracking-[1px]">consolidación</span>
    </li>
    <li className="flex gap-10px items-center">
      <span className="w-10px h-10px bg-[#a976a7] rounded-full" />
      <span className="uppercase text-gray-400 text-2xs tracking-[1px]">competición</span>
    </li>
  </ul>
);
export default TimeLineLegend;
