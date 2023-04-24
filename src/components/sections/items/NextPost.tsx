import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const NextPost: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <div className="flex gap-1">
    <p className={twMerge('text-greencart font-semibold text-sm min-w-[133px]', className)}>{children}</p>
  </div>
);

export default NextPost;
