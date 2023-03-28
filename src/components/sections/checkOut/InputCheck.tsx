import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import Check from '../../icons/Check';
interface InputCheckProps {
  label: string;
  id: string;
}

const InputCheck: React.FC<WithClassName<InputCheckProps>> = ({ label, className, id }) => (
  <div className={twMerge('flex items-center gap-3 relative', className)}>
    <input type="checkbox" id={id} value="" className="hidden peer" />
    <div className="absolute w-6 border border-gray-300 text-white peer-checked:text-white peer-checked:bg-primary peer-checked:border-primary peer-hover:bg-gray-50 peer-hover:text-gray-50 peer-checked:peer-hover:bg-primary">
      <Check />
    </div>
    <label
      htmlFor={id}
      className="font-light text-gray-400 uppercase text-xs tracking-[1px] peer-checked:text-primary pl-9 relative z-10"
    >
      {label}
    </label>
  </div>
);
export default InputCheck;
