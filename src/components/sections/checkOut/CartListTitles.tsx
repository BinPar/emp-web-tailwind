const cartListTitles: React.FC = () => (
  <div className="pb-6 mb-6 border-b border-secondary hidden md:flex">
    <p className="w-[346px] uppercase text-gray-400 text-1xs tracking-[1px] font-light">producto</p>
    <p className="w-60 uppercase text-gray-400 text-1xs tracking-[1px] font-light text-center">
      precio
    </p>
    <p className="w-60 uppercase text-gray-400 text-1xs tracking-[1px] font-light text-center">
      cantidad
    </p>
    <p className="w-60 uppercase text-gray-400 text-1xs tracking-[1px] font-light text-center">
      total
    </p>
  </div>
);
export default cartListTitles;
