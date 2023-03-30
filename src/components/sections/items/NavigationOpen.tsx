import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const NavigationOpen: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <div
    className={twMerge(
      'w-full h-[100vh] top-0 bg-white/80 flex fixed z-20 transition-all duration-500',
      className,
    )}
  >
    {children}
  </div>
);

export default NavigationOpen;
