import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';
import SelectOption from '../checkOut/SelectOption';

interface FormSelectPromirProps {
  label?: string;
  option1: string;
  option2?: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option6?: string;
  option7?: string;
  option8?: string;
  option9?: string;
  option10?: string;
}

const FormSelectPromir: React.FC<WithClassName<FormSelectPromirProps>> = ({
  className,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10,
}) => {
  const [checked, SetChecked] = useState(false);
  const [value, SetValue] = useState(option1);
  return (
    <div className={twMerge('relative', className)}>
      <button
        type="button"
        className="flex items-center text-xs justify-between h-8 bg-white tracking-[1px] px-3 border border-gray-300 relative text-primary last:mb-0 w-full peer group"
        aria-current={checked}
        onClick={(): void => {
          SetChecked(!checked);
        }}
      >
        <span>{value}</span>
        <ArrowDown className="group-aria-current:rotate-180 w-4 transition-all duration-150" />
      </button>
      <ul className="w-full overflow-auto border border-y-0 border-gray-300 max-h-0 py-0 peer-aria-current:border-b peer-aria-current:max-h-64 peer-aria-current:py-3 transition-all duration-300 absolute bg-white z-10">
        <SelectOption setValue={SetValue} option={option1} />
        {option2 && <SelectOption setValue={SetValue} option={option2} />}
        {option3 && <SelectOption setValue={SetValue} option={option3} />}
        {option4 && <SelectOption setValue={SetValue} option={option4} />}
        {option5 && <SelectOption setValue={SetValue} option={option5} />}
        {option6 && <SelectOption setValue={SetValue} option={option6} />}
        {option7 && <SelectOption setValue={SetValue} option={option7} />}
        {option8 && <SelectOption setValue={SetValue} option={option8} />}
        {option9 && <SelectOption setValue={SetValue} option={option9} />}
        {option10 && <SelectOption setValue={SetValue} option={option10} />}
      </ul>
    </div>
  );
};
export default FormSelectPromir;
