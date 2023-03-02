import { useState } from 'react';

import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import Check from '../../icons/Check';

interface ItemFilterProps {
  value: string;
  data: string;
}

// eslint-disable-next-line max-len
const ItemFilter: React.FC<WithClassName<ItemFilterProps>> = ({ className, value, data }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label
      htmlFor={value}
      className={twMerge('flex text-1xs text-gray-400 font-thin tracking-[1px] relative mb-2 last:mb-0', className)}
    >
      <Check className={`text-secondary w-5 absolute -left-1${checked ? ' block' : ' hidden'}`} />
      <input
        aria-current={checked}
        type="checkbox"
        onClick={(): void => setChecked(!checked)}
        id={value}
        value={value}
        name={value}
        className="opacity-0 mr-2"
      />
      {data}
    </label>
  );
};

export default ItemFilter;
