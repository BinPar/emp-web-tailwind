import { useState } from 'react';

import { WithChildren } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';

interface FilterButtonProps {
  title: string;
  classWrap?: string;
}

// eslint-disable-next-line max-len
const FilterButton: React.FC<WithChildren<FilterButtonProps>> = ({
  children,
  title,
  classWrap,
}) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <>
      <button
        type="button"
        className={`m-auto hover:text-primary text-1xs flex items-center gap-2 border border-transparent hover:border-gray-200 py-3 px-2${
          openFilter ? ' text-primary' : ' text-gray-500'
        }`}
        onClick={(): void => setOpenFilter(!openFilter)}
      >
        {title}
        <ArrowDown
          strokeWidth={4}
          className={`w-4 transition-all duration-200${openFilter ? ' rotate-180' : ''}`}
        />
      </button>
      <div
        className={`border-2 bg-white border-gray-200 absolute top-12 pt-5 pb-7 px-6 mt-3${
          openFilter ? ' inline-block' : ' hidden'
        } ${classWrap || ''}`}
      >
        {children}
      </div>
    </>
  );
};

export default FilterButton;
