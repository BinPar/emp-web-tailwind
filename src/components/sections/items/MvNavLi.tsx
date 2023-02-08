import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';

const MvNavLi: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <li className={twMerge('text-gray-400 text-2.5xs uppercase tracking-[1px] py-3', className)}>
    <a href="#" className="hover:text-primary">
      {children}
    </a>
  </li>
);

export default MvNavLi;
