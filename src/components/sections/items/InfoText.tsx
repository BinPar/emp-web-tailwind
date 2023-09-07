import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const InfoText: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <p
    className={twMerge(
      'font-light !leading-[22px] tracking-[1.12px] text-base mb-3 text-gray-500',
      className,
    )}
  >
    {children}
  </p>
);

export default InfoText;
