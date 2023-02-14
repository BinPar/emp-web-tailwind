import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';

const Publication: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <article
    className={twMerge(
      'flex lg:flex-col snap-start basis-[100%] md:basis-[49%] lg:basis-[24%]  xl:basis-[24%] ml-[2%] lg:ml-[1.33%] first:ml-0 shrink-0 grow float-left text-center',
      className,
    )}
  >
    {children}
  </article>
);

export default Publication;
