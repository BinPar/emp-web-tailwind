import { twMerge } from 'tailwind-merge';
import type { WithClassName, WithChildren } from '../../../model/react';

interface ButtonPromirProps {
  link?: boolean;
  href?: string;
}

const ButtonPromir: React.FC<WithClassName<WithChildren<ButtonPromirProps>>> = ({
  children,
  className,
  link,
  href,
}) =>
  link ? (
    <a
      href={href}
      className={twMerge(
        'min-h-[40px] border-2 border-primary px-4 hover:bg-primary text-primary uppercase font-medium text-1xs tracking-[1px]',
        className,
      )}
    >
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={twMerge(
        'min-h-[40px] border-2 border-primary px-4 hover:bg-primary hover:text-white text-primary uppercase font-medium text-1xs tracking-[1px]',
        className,
      )}
    >
      {children}
    </button>
  );

export default ButtonPromir;
