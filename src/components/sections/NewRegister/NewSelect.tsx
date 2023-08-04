import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';
import SelectOption from '../checkOut/SelectOption';


interface SelectProps {
  label?: string;
}

const Select: React.FC<WithClassName<SelectProps>> = ({ className, label }) => {
  const [checked, SetChecked] = useState(false);
  const [value, SetValue] = useState('DNI');
  return (
    <div
      className={twMerge(
        'relative',
        className,
      )}
    >
      {label && (
        <span className="bg-white px-1 text-xs text-gray-400 absolute -top-2 z-10 left-3">
          Tipo de documento *
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
        <SelectOption setValue={SetValue} option="DNI" />
        <SelectOption setValue={SetValue} option="Pasaporte" />
        <SelectOption setValue={SetValue} option="NIE" />
        <SelectOption setValue={SetValue} option="NIF" />
        <SelectOption setValue={SetValue} option="OTROS" />
      </ul>
    </div>
  );
};
export default Select;
