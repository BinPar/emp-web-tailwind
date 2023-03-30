import { useState } from 'react';

import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import ArrowRight from '../../icons/ArrowRight';
import Check from '../../icons/Check';

interface ItemFilterProps {
  dropRight?: boolean;
  specialty?: boolean;
  tagType?: boolean;
  value: string;
  data: string;
}

// eslint-disable-next-line max-len
const ItemFilter: React.FC<WithClassName<ItemFilterProps>> = ({
  className,
  value,
  data,
  tagType,
  dropRight,
  specialty,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <label
      htmlFor={value}
      className={twMerge(
        `flex text-1xs text-gray-400 font-thin tracking-[1px] relative mb-2 last:mb-0 justify-between hover:text-primary${tagType && checked ? ' bg-primary !border-primary text-white' : ''} ${className || ''}`
      )}
    >
      <div className="flex w-full items-center">
        {!tagType && <Check className={`text-secondary w-5 absolute -left-1${checked ? ' block' : ' hidden'}`} />}
        <input
          aria-current={checked}
          type="checkbox"
          onClick={(): void => setChecked(!checked)}
          id={value}
          value={value}
          name={value}
          className={`opacity-0 mr-2${tagType ? ' absolute' : ''}`}
        />
        <span
          className={`w-full block p-1 pl-1 text-left ${
            specialty && checked ? 'bg-primarilight text-primary' : 'bg-transparent'
          }`}
        >
          {data}
        </span>
      </div>

      {dropRight && (
        <button type="button" className="w-5 text-primary rotate-90 lg:rotate-0">
          <ArrowRight />
        </button>
      )}
    </label>
  );
};

export default ItemFilter;
