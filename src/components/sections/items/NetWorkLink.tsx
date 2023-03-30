import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';
interface NetWorkProps {
  link: string;
}
const NetWorkLink: React.FC<WithClassName<WithChildren<NetWorkProps>>> = ({
  className,
  children,
  link,
}) => (
  <a
    href={link}
    className={twMerge(
      'w-9 h-9 border-2 border-gray-400 hover:border-primary group rounded-full flex items-center justify-center',
      className,
    )}
  >
    {children}
  </a>
);

export default NetWorkLink;
