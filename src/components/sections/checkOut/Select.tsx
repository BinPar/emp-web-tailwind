import { SetStateAction, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';
import SelectOption from './SelectOption';

const Select: React.FC<WithClassName> = ({ className }) => {
  const [checked, setChecked] = useState(false);
  const [value, SetValue] = useState('DNI');
  return (
    <div className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)] relative">
      <span className="bg-white px-1 text-xs text-gray-400 absolute -top-2 z-10 left-3">
        Tipo de documento *
      </span>
      <button
        type="button"
        className={twMerge(
          'flex items-center justify-between h-10 px-3 border border-gray-300 font-light relative text-gray-400 last:mb-0 w-full peer group',
          className,
        )}
        aria-current={checked}
        onClick={(): void => {
          setChecked(!checked);
        }}
      >
        <span>{value}</span>
        <ArrowDown className="group-aria-current:rotate-180 w-4" />
      </button>
      <ul className="w-full  border border-y-0 border-gray-300 max-h-0 overflow-hidden py-0 peer-aria-current:border-b peer-aria-current:max-h-64 peer-aria-current:py-3 transition-all duration-300 absolute bg-white z-10">
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
