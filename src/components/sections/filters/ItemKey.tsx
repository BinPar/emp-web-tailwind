import { Dispatch, SetStateAction, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import ArrowRight from '../../icons/ArrowRight';
import Check from '../../icons/Check';

interface ItemFilterProps {
  dropRight?: boolean;
  activeKey: string;
  key: string;
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
}

const ItemKey: React.FC<WithClassName<ItemFilterProps>> = ({
  className,
  activeKey,
  value,
  dropRight,
  changeValue,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex justify-between w-full items-center relative">
      <Check
        className={`text-secondary w-5 absolute -left-6${
          dropRight && checked ? ' block' : ' hidden'
        }`}
      />
      <button
        type="button"
        value={value}
        onClick={(): void => {
          changeValue(value);
          setChecked(!checked);
          
        }}
        className={twMerge(
          `flex text-1xs text-gray-400 font-thin tracking-[1px] relative hover:text-primary text-sm py-1 pl-1 w-full${
            dropRight && checked ? ' bg-primarylight !text-primary' : ' bg-transparent'
          }`,
          className,
        )}
      >
        {value}
      </button>
      {dropRight && (
        <button
          type="button"
          className={`w-5 text-primary lg:rotate-0${
            value === activeKey ? ' -rotate-90' : ' rotate-90'
          }`}
          onClick={(): void => {
            changeValue(value !== activeKey ? value : '');
          }}
        >
          <ArrowRight />
        </button>
      )}
    </div>
  );
};

export default ItemKey;
