import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';

const CurrentPrice: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <div className='flex gap-1'>
    <p
      className={twMerge('text-greencart text-xl font-semibold',className,)}>
      {children}
    </p>
    <span className="text-1xs text-greencart font-semibold">€</span>
  </div>
);

export default CurrentPrice;
