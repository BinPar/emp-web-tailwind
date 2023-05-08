import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';

import ArrowDown from '../../icons/ArrowDown';
import PromirOption from './PromirOption';

interface PromirSelectProps {
  label: string;
  option1: string;
  option2?: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option6?: string;
}
const PromirSelect: React.FC<WithClassName<PromirSelectProps>> = ({
  className,
  label,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
}) => {
  const [checked, SetChecked] = useState(false);
  const [value, SetValue] = useState('');
  return (
    <div className={twMerge('relative group  max-w-[743px] m-auto', className)}>
      {value !== '' && (
        <p className="bg-white px-1 text-xs text-gray-400 absolute z-10 left-3 -top-2 text-left">
          {label}
        </p>
      )}
      <button
        type="button"
        className="flex items-center justify-between h-10 px-3 border-2 group-hover:border-secondarygray border-promirGray font-light relative text-gray-400 last:mb-0 w-full peer group"
        aria-current={checked}
        onClick={(): void => {
          SetChecked(!checked);
        }}
      >
        {value !== '' ? (
          <p className='text-2sm font-medium tracking-[.5px] text-secondarygray text-center w-full'>{value}</p>
        ) : (
          <p className="text-2sm font-medium tracking-[.5px] text-secondarygray text-center w-full">
            {label}
          </p>
        )}
        <ArrowDown
          strokeWidth={3.5}
          className="group-aria-current:rotate-180 w-4 transition-all duration-150 text-secondarygray"
        />
      </button>
      <ul className="w-full mt-2 peer-aria-current:border-2 border-secondarygray max-h-0 overflow-hidden py-0 peer-aria-current:max-h-64 peer-aria-current:py-3 transition-all duration-300 absolute bg-white z-10">
        {option1 && <PromirOption setValue={SetValue} setChecked={SetChecked} checked={checked} option={option1} />}
        {option2 && <PromirOption setValue={SetValue} setChecked={SetChecked} checked={checked} option={option2} />}
        {option3 && <PromirOption setValue={SetValue} setChecked={SetChecked} checked={checked} option={option3} />}
        {option4 && <PromirOption setValue={SetValue} setChecked={SetChecked} checked={checked} option={option4} />}
        {option5 && <PromirOption setValue={SetValue} setChecked={SetChecked} checked={checked} option={option5} />}
        {option6 && <PromirOption setValue={SetValue} setChecked={SetChecked} checked={checked} option={option6} />}
      </ul>
    </div>
  );
};
export default PromirSelect;
