import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';

const FilterWrap: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <div
    className={twMerge(
      'text-center flex justify-center',
      className
    )}
  >
    {children}
  </div>
);

export default FilterWrap;
