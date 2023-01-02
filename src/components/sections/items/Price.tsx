import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';

const Price: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <div className={twMerge('flex items-center gap-3 mt-2', className)}>{children}</div>
);

export default Price;
