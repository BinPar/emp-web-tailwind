import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const ItemMainNav: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <li
    className={twMerge(
      'hover:text-primary xl:text-1xs border-b-4 border-b-white hover:border-yellowmenu group transition-all duration-300',
      className,
    )}
  >
    {children}
  </li>
);

export default ItemMainNav;
