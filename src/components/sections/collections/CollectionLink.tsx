import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

interface CollectionLinkProps {
  href: string;
}
const CollectionLink: React.FC<WithClassName<WithChildren<CollectionLinkProps>>> = ({
  className,
  children,
  href,
}) => (
  <li
    className={twMerge(
      'py-2 w-full sm:w-1/2 rounded hover:bg-gray-100 transition-all duration-300 text-center',
      className,
    )}
  >
    <a className="text-gray-500  uppercase text-1xs tracking-[1px]" href={href}>
      {children}
    </a>
  </li>
);

export default CollectionLink;
