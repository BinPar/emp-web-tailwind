import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const NavListLinks: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <div className={twMerge('pl-3 border-b border-gray-200 h-16 flex items-center', className)}>
    {children}
  </div>
);

export default NavListLinks;
