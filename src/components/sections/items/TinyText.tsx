import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';


const TinyText: React.FC<WithClassName<WithChildren>> = ({className, children}) =>(
       <p className={twMerge('text-gray-400 text-1xs tracking-widest font-light', className)}>{children}</p>
)

export default TinyText;
