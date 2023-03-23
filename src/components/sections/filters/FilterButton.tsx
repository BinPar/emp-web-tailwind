import { SetStateAction } from 'react';
import { WithChildren } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';
import Plus from '../../icons/Plus';

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
      className={`m-auto hover:text-primary uppercase font-light min-h-[65px] lg:min-h-0 lg:font-normal w-full justify-between px-5 lg:w-auto lg:normal-case text-1xs flex items-center gap-2 border-b lg:border border-b-gray-200 lg:border-transparent lg:hover:border-gray-200 py-3 lg:px-2${
        state === title ? ' text-primary' : ' text-gray-500'
      }`}
      onClick={(): void => openMethod(state !== title ? title : '')}
    >
      {title}
      <ArrowDown
        strokeWidth={4}
        className={`hidden lg:block w-4 transition-all duration-200${
          state === title ? ' rotate-180' : ''
        }`}
      />
      <Plus className={`block lg:hidden transition-all duration-200 w-7${state === title ? ' text-primary rotate-45' : ' text-gray-500'}`} />
    </button>
    <div
      className={`border-b w-full lg:w-auto lg:border-2 bg-gray-50 lg:bg-white border-gray-200 lg:absolute top-12 py-5 px-6 lg:mt-3${
        state === title ? ' inline-block' : ' hidden'
      } ${classWrap || ''}`}
    >
      {children}
    </div>
  </>
);

export default FilterButton;
