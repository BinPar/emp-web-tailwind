import { twMerge } from 'tailwind-merge';
import { WithClassName, WithFullText, WithInitials } from '../../../model/react';

const NewItemBadge: React.FC<WithClassName<WithInitials<WithFullText>>> = ({
  className,
  initials,
  fullText,
}) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  <div className={twMerge('border-l border-primary py-1 relative group overflow-hidden max-h-[32px]', className)}>
      <span className='bg-yellowmenu px-2 py-1 rounded-r-3xl text-primary font-black tracking-wider text-xs uppercase md:absolute top-[4.6px] h-[23px] transition-all duration-100'>{initials}</span>
      <span className='bg-yellowmenu px-2 py-1 rounded-r-3xl text-primary font-black tracking-wider text-xs uppercase -left-full group-hover:left-0 -top-[1.2px] relative transition-all duration-300 z-10 whitespace-nowrap hidden md:inline'>{fullText}</span>
  </div>
);

export default NewItemBadge;
