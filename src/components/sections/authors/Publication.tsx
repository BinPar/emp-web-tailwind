import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';

const Publication: React.FC<WithClassName<WithChildren>> = ({ className, children }) => (
  <article
    className={twMerge(
      'flex lg:flex-col text-center',
      className,
    )}
  >
    {children}
  </article>
);

export default Publication;
