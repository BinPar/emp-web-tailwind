import { twMerge } from 'tailwind-merge'
import type { WithChildren, WithClassName } from '../../../model/react'
const PromirP: React.FC<WithChildren<WithClassName>> = ({children, className}) => (
<p className={twMerge('text-2sm font-light text-gray-400', className)}>
{children}
</p>
)
export default PromirP