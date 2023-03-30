import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const TypeP: React.FC<WithChildren<WithClassName>> = ({ className, children }) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  <p
    className={twMerge(
      'border border-primary text-primary py-1 px-2 text-3xs xl:text-2xs tracking-wider uppercase font-bold hover:bg-primary hover:text-white transition-all duration-200',
      className,
    )}
  >
    {children}
  </p>
);

export default TypeP;
