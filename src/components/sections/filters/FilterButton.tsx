
import { SetStateAction } from 'react';
import { WithChildren } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';

interface FilterButtonProps {
  title: string;
  classWrap?: string;
  openMethod: React.Dispatch<SetStateAction<string>>;
  state: string;
}
const FilterButton: React.FC<WithChildren<FilterButtonProps>> = ({
  children,
  title,
  classWrap,
  openMethod,
  state,
}) => (
  <>
    <button
      type="button"
      className={`m-auto hover:text-primary text-1xs flex items-center gap-2 border border-transparent hover:border-gray-200 py-3 px-2${
        state === title ? ' text-primary' : ' text-gray-500'
      }`}
      onClick={(): void => openMethod(state !== title ? title : '')}
    >
      {title}
      <ArrowDown
        strokeWidth={4}
        className={`w-4 transition-all duration-200${state === title  ? ' rotate-180' : ''}`}
      />
    </button>
    <div
      className={`border-2 bg-white border-gray-200 absolute top-12 py-5 px-6 mt-3${
        state === title ? ' inline-block' : ' hidden'
      } ${classWrap || ''}`}
    >
      {children}
    </div>
  </>
);

export default FilterButton;
