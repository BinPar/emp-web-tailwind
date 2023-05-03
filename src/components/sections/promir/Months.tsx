const Months: React.FC = () => {
  return (
    <div className="flex items-center">
      {[...Array(17)].map((_, index) => (
        <span key={index} className="block flex-shrink-0 w-2 h-2 xs:w-10px xs:h-10px md:w-2 md:h-2 lg:h-10px lg:w-10px m-[2.65px] xs:m-5px md:m-1 lg:m-5px first:ml-0 !mt-0 rounded-full bg-gray-200" />
      ))}
      <span className='m-5px mt-0 text-3.5xs xs:text-2xs md:text-3.5xs lg:text-2xs text-gray-300 uppercase tracking-[1px]'>examen</span>
    </div>
  );
};
export default Months;
