import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';

interface InputFormsProps {
  type: string;
  id: string;
  label: string;
}
const InputForms: React.FC<WithClassName<InputFormsProps>> = ({ className, type, label, id }) => (
  <div className={twMerge('relative text-gray-400 mb-5 last:mb-0', className)}>
    <input
      type={type}
      id={id}
      className="border border-gray-300 h-10 w-full appearance-none outline-none px-3 block py-2 text-gray-300 bg-transparent dark:text-gray-400 focus:outline-none focus:ring-0 peer"
      placeholder=" "
    />
    <label
      htmlFor={id}
      className="left-3 tracking-[1px] px-1 bg-white absolute text-gray-400 duration-300 transform text-xs -translate-y-5 top-3 origin-[0] peer-placeholder-shown:text-base peer-focus:text-xs peer-placeholder-shown:-translate-y-1 peer-autofill:-translate-y-5 peer-focus:-translate-y-5"
    >
      {label}
    </label>
  </div>
);
export default InputForms;
