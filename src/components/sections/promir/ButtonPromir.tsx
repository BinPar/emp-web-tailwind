import { twMerge } from 'tailwind-merge';
import type { WithClassName, WithChildren } from '../../../model/react';

interface ButtonPromirProps {
  link?: boolean;
  href?: string;
  typeButton?: string;
}

const ButtonPromir: React.FC<WithClassName<WithChildren<ButtonPromirProps>>> = ({
  children,
  className,
  link,
  href,
  typeButton,
}) =>
  link ? (
    <a
      href={href}
      className={twMerge(
        'min-h-[40px] inline-flex items-center border-2 border-primary px-4 hover:bg-primary hover:text-white text-primary uppercase font-medium text-1xs tracking-[1px]',
        className,
      )}
    >
      {children}
    </a>
  ) : (
    <button
      type={typeButton !== undefined && typeButton !== 'button' ? 'submit' : 'button'}
      className={twMerge(
        'min-h-[40px] border-2 border-primary px-4 hover:bg-primary hover:text-white text-primary uppercase font-medium text-1xs tracking-[1px]',
        className,
      )}
    >
      {children}
    </button>
  );

export default ButtonPromir;
