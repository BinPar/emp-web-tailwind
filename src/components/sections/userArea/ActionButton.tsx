import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
interface ActionButtonProps {
  text: string;
}
const ActionButton: React.FC<WithClassName<ActionButtonProps>> = ({ text, className }) => (
  <button
    type="button"
    className={twMerge('text-secondarygray tracking-[1px] uppercase text-xs hover:brightness-75', className)}
  >
    {text}
  </button>
);
export default ActionButton;
