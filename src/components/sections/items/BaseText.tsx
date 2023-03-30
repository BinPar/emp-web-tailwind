import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';


const BaseText: React.FC<WithClassName<WithChildren>> = ({className, children}) =>(
       <p className={twMerge('text-primary text-1xs lg:text-2sm font-normal', className)}>{children}</p>
)

export default BaseText;
