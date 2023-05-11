import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';

interface InputPromirProps {
  type: string;
  id: string;
  label?: string;
  placeHolder?: string;
  labelClass?: string;
}
const InputPromir: React.FC<WithClassName<InputPromirProps>> = ({
  className,
  type,
  label,
  id,
  placeHolder,
  labelClass,
}) => (
  <div className={twMerge('bg-white relative text-gray-400', className)}>
    <input
      type={type}
      id={id}
      className="border border-gray-300 h-8 w-full appearance-none outline-none px-3 block py-2 text-primary bg-transparent dark:text-gray-400 focus:outline-none focus:ring-0 peer"
      placeholder={placeHolder ? placeHolder : ' '}
    />
    <label
      htmlFor={id}
      className={`left-3 leading-normal tracking-[1px] px-1 bg-white absolute text-primary duration-300 transform text-xs -translate-y-5 top-3 origin-[0] peer-focus:text-xs peer-focus:text-white peer-focus:bg-transparent peer-placeholder-shown:-translate-y-1 peer-autofill:-translate-y-5 peer-focus:-translate-y-7 ${
        labelClass ? labelClass : ''
      }`}
    >
      {label}
    </label>
  </div>
);
export default InputPromir;
