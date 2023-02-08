import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';

const MobileSearch: React.FC<WithClassName> = ({ className }) => (
  <div className={twMerge('bg-white p-2', className)}>
    <form className="w-full flex">
      <input
        type="search"
        placeholder="BUSCAR..."
        id="search"
        className="w-full outline-none placeholder-gray-400 font-thin tracking-widest pl-3 py-2 border border-gray-200"
        autoComplete="off"
      />
    </form>
  </div>
);

export default MobileSearch;
