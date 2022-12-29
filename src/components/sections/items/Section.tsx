import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';


const Section: React.FC<WithClassName<WithChildren>> = ({className, children}) =>(
       <section className={twMerge('py-10', className)}>{children}</section>
)

export default Section;
