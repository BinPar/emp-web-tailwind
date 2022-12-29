import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';


const Titles: React.FC<WithClassName<WithChildren>> = ({className, children}) =>(
       <p className={twMerge('text-primary text-2sm font-normal', className)}>{children}</p>
)

export default Titles;
