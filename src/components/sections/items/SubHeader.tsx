import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';

const SubHeader: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <h2
    className={twMerge(
      'pb-3 border-b border-b-yellowmenu mb-5 text-lg font-normal text-gray-400',
      className
    )}
  >
    {children}
  </h2>
);

export default SubHeader;
