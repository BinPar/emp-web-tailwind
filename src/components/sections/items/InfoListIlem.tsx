import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const InfoListItem: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <li
    className={twMerge(
      'list-disc text-primary',
      className,
    )}
  >
    {children}
  </li>
);

export default InfoListItem;
