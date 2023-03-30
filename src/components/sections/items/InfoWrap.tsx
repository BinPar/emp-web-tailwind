import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const InfoWrap: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <div className={twMerge('border-t border-t-yellowmenu pt-2 mt-2', className)}>{children}</div>
);

export default InfoWrap;
