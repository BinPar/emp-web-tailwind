import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';


const DivWrapper: React.FC<WithClassName<WithChildren>> = ({className, children}) =>(
       <div className={twMerge('m-auto w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px]', className)}>{children}</div>
)

export default DivWrapper;
