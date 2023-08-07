import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import { Dispatch, SetStateAction, useState } from 'react';

interface SwitchProps {
  title: string;
  method?: Dispatch<SetStateAction<boolean>>;
  value?: boolean;
}
const SwitchButton: React.FC<WithClassName<SwitchProps>> = ({ title, className, method, value }) => {
  const [active, SetActive] = useState(false);
  return (
    <div className="gap-2 items-center group">
      <div
        aria-current={active}
        className="group-hover:brightness-[.7] transition-all duration-300 flex items-center gap-4 relative peer"
      >
        <input
          type="checkbox"
          id="switch"
          className="appearance-none peer absolute w-full h-full left-0"
          onClick={(): void => {SetActive(!active);if(method) {method(!value)}}}
        />
        <span className="block w-3 h-3 transition-all absolute left-1 duration-300 rounded-full peer-checked:left-6 peer-checked:bg-primary bg-gray-400" />
        <span className="flex items-center transition-all duration-300 h-5 w-10 min-w-[40px] flex-shrink-0 border-[1.5px] rounded-full p-1 peer-checked:border-primary" />
        <label
          htmlFor="switch"
          className={twMerge(
            'peer-checked:text-primary cursor-pointer text-gray-400 text-left font-bold text-xs tracking-[1px]',
            className,
          )}
        >
          {title}
        </label>
      </div>
    </div>
  );
};

export default SwitchButton;
