import type { WithClassName } from '../../../model/react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import ArrowDown from '../../icons/ArrowDown';
import SelectOption from '../checkOut/SelectOption';

interface TimeSelectorProps {
    label?: string;
  }
const TimeSelector: React.FC<WithClassName<TimeSelectorProps>> = ({className, label}) => {
    const [checked, SetChecked] = useState(false);
    const [value, SetValue] = useState('Mañanas de 9:00 - 11:00');
    return(
        <div
        className={twMerge(
          'relative',
          className,
        )}
      >
        {label && (
          <span className="mb-3 block text-sm xs2:text-base text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px]">
            {label}
          </span>
        )}
        <button
          type="button"
          className="flex items-center justify-between h-10 px-3 border rounded-lg aria-current:rounded-[8px_8px_0px_0px] border-gray-300 font-light relative text-gray-400 last:mb-0 w-full peer group"
          aria-current={checked}
          onClick={(): void => {
            SetChecked(!checked);
          }}
        >
          <span>{value}</span>
          <ArrowDown className="group-aria-current:rotate-180 w-4 transition-all duration-150" />
        </button>
        <ul className="w-full rounded-[0px_0px_8px_8px] border border-y-0 border-gray-300 max-h-0 overflow-hidden py-0 peer-aria-current:border-b peer-aria-current:max-h-64 peer-aria-current:py-3 transition-all duration-300 absolute bg-white z-10">
          <SelectOption setValue={SetValue} option="Mañanas de 9:00 - 11:00" className='lowercase'/>
          <SelectOption setValue={SetValue} option="Mañanas de 11:00 - 14:00" className='lowercase'/>
          <SelectOption setValue={SetValue} option="Tardes de 14:00 - 16:30" className='lowercase'/>
          <SelectOption setValue={SetValue} option="Tardes de 16:30 - 20:30" className='lowercase'/>
        </ul>
      </div>
    ) 
}
export default TimeSelector