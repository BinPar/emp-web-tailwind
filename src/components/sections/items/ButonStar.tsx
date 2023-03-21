import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';

import FullStar from '../../icons/FullStar';
import EmptyStar from '../../icons/StarEmpty';

interface ButtonStarProps {
  value: number;
}
const ButtonStar: React.FC<WithClassName<ButtonStarProps>> = ({ className, value }) => (
  <button
    type="button"
    value={value}
    className={twMerge('w-7 text-secondary group ml-2', className)}
  >
    <EmptyStar className="group-hover:hidden block" />
    <FullStar className="group-hover:block hidden" />
  </button>
);

export default ButtonStar;
