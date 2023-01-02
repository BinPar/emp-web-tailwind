import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName, WithHref } from '../../../model/react';

const TypeLink: React.FC<WithChildren<WithClassName<WithHref>>
> = ({ className, children, href }) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  <a href={href} className={twMerge('border border-primary text-primary py-1 px-2 text-3xs xl:text-2xs tracking-wider uppercase font-bold hover:bg-primary hover:text-white transition-all duration-200', className)}>
    {children}
  </a>
);

export default TypeLink;
