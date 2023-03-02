import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';

interface ItemFilterProps {
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
}

const ItemKey: React.FC<WithClassName<ItemFilterProps>> = ({ className, value, changeValue }) => (
  <button
    type="button"
    value={value}
    onClick={(): void => changeValue(value) }
    className={twMerge(
      'flex text-1xs text-gray-400 font-thin tracking-[1px] relative hover:text-primary text-sm',
      className,
    )}
  >
    {value}
  </button>
);

export default ItemKey;
