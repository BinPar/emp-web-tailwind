import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<WithClassName<WithChildren<NavLinkProps>>> = ({
  className,
  children,
  href,
}) => (
  <a href={href} className={twMerge('h-16 flex items-center', className)}>
    {children}
  </a>
);

export default NavLink;
