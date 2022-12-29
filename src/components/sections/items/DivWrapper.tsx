import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';


const DivWrapper: React.FC<WithClassName<WithChildren>> = ({className, children}) =>(
       <div className={twMerge('m-auto max-w-[1440px]', className)}>{children}</div>
)

export default DivWrapper;
