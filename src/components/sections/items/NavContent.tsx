import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const NavContent: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <div className={twMerge('bg-white w-full h-full shadow-[4px_0_4px_rgba(0,0,0,0.1)]', className)}>
    {children}
  </div>
);

export default NavContent;
