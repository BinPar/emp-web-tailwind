import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName, WithHref } from '../../../model/react';

const NormalLink: React.FC<WithChildren<WithClassName<WithHref>>
> = ({ className, children, href }) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  <a href={href} className={twMerge('group', className)}>
    {children}
  </a>
);

export default NormalLink;
