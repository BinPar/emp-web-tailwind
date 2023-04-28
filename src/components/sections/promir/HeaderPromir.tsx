import { twMerge } from 'tailwind-merge';
import type { WithChildren, WithClassName } from '../../../model/react';

const HeaderPromir: React.FC<WithClassName<WithChildren>> = ({ children, className }) => (
<h2 className={twMerge('text-promirHeader font-black uppercase tracking-[1px] border-b border-promirHeader pb-3 mb-5', className)}>
{children}
</h2>
)
export default HeaderPromir