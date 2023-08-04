import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import Check from '../../icons/Check';
interface NewInputcheckProps {
  label: string;
  id: string;
  labelClassName?: string;
}

const NewInputcheck: React.FC<WithClassName<NewInputcheckProps>> = ({
  label,
  className,
  id,
  labelClassName,
}) => (
  <div className={twMerge('flex items-center gap-3 relative', className)}>
    <input type="checkbox" id={id} value="" className="hidden peer" />
    <div className="absolute w-4 rounded-sm border border-gray-300 text-white peer-checked:text-white peer-checked:bg-primary peer-checked:border-primary peer-hover:bg-gray-50 peer-hover:text-gray-50 peer-checked:peer-hover:bg-primary">
      <Check className='scale-150'/>
    </div>
    <label
      htmlFor={id}
      className={`font-semibold text-gray-400 text-xs tracking-[1px] peer-checked:text-primary pl-6 relative ${
        labelClassName && labelClassName
      }`}
    >
      {label}
    </label>
  </div>
);
export default NewInputcheck;
