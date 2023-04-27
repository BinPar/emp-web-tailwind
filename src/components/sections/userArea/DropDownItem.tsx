import { Dispatch, SetStateAction, useState } from 'react';
import ArrowDown from '../../icons/ArrowDown';
import type { WithChildren } from '../../../model/react';

interface DropDownItemProps {
  title: string;
  id: string;
  currentValue: string;
  method: Dispatch<SetStateAction<string>>;
}
const DropDownItem: React.FC<WithChildren<DropDownItemProps>> = ({
  children,
  title,
  id,
  method,
  currentValue,
}) => {
  console.log(id, currentValue);
  return (
    <li>
      <button
        type="button"
        aria-current={currentValue === id}
        onClick={(): void => {
          currentValue !== id ? method(id) : method('');
        }}
        className="w-full p-5 bg-primarylight text-primary text-1xs tracking-[1px] uppercase flex justify-between items-center group peer"
      >
        {title}
        <ArrowDown className="w-5 text-primary group-aria-current:rotate-180 transition-all duration-150" />
      </button>
      <div className="peer-aria-current:!h-auto !h-0 overflow-hidden">{children}</div>
    </li>
  );
};
export default DropDownItem;
