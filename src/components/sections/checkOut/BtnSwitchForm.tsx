import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import { Dispatch, SetStateAction } from 'react';

interface BtnSwitchFormProps {
  setSwitchForm: Dispatch<SetStateAction<boolean>>;
  switchForm: boolean;
  title: string;
}

const BtnSwitchForm: React.FC<WithClassName<BtnSwitchFormProps>> = ({ setSwitchForm, switchForm, title, className }) => (
  <button
    aria-current={switchForm}
    onClick={(): void => setSwitchForm(!switchForm)}
    type="button"
    className={twMerge(
        'pb-1 text-2lg tracking-[1px] border-b-2 transition-all duration-150 font-medium uppercase',
        className
      )}
  >
    {title}
  </button>
);
export default BtnSwitchForm;
