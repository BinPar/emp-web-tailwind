import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';

const OldPrice: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <div className='flex items-center gap-1 pt-1'>
    <p
      className={twMerge('text-gray-500 text-1xs tracking-widest font-light line-through decoration-1',className,)}>
      {children}
    </p>
    <span className="text-2xs no-underline text-gray-500">€</span>
  </div>
);

export default OldPrice;
