import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import Check from '../../icons/Check';
interface InputCheckPromirProps {
  label: string;
  id: string;
  labelClassName?: string;
}

const InputCheckPromir: React.FC<WithClassName<InputCheckPromirProps>> = ({
  label,
  className,
  id,
  labelClassName,
}) => (
  <div className={twMerge('flex items-center gap-3 relative', className)}>
    <input type="checkbox" id={id} value="" className="hidden peer" />
    <div className="absolute w-5 border border-gray-300 text-promirDark peer-checked:text-white peer-checked:bg-primary peer-checked:border-primary peer-hover:bg-gray-50 peer-hover:text-gray-50 peer-checked:peer-hover:bg-primary">
      <Check />
    </div>
    <label
      htmlFor={id}
      className={`font-light text-white uppercase text-[.5rem] tracking-[1px] pl-9 relative ${
        labelClassName && labelClassName
      }`}
    >
      {label}
    </label>
  </div>
);
export default InputCheckPromir;
