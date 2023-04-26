import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';
interface MyProfileLiProps {
  label: string;
  value: string;
}
const MyProfileLi: React.FC<WithClassName<WithChildren<MyProfileLiProps>>> = ({
  label,
  value,
  children,
  className,
}) => (
  <li className="mb-2 flex items-end gap-3">
    {children}
    <div>
      <span className="text-xs text-gray-400 tracking-[1px] font-light mb-1">{label}</span>
      <p className={twMerge('text-gray-400 text-sm font-semibold', className)}>{value}</p>
    </div>
  </li>
);
export default MyProfileLi;
