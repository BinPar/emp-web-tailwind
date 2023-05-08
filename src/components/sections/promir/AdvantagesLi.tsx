import type { WithChildren } from '../../../model/react';
import Check from '../../icons/Check';

interface AdvantagesLiProps {
  color: string;
  isNew?: boolean;
}

const AdvantagesLi: React.FC<WithChildren<AdvantagesLiProps>> = ({ children, color, isNew }) => (
  <li className={`text-2sm font-light flex text-[${color}] items-center mb-10px ${isNew && 'min-h-[66px]'}`}>
    <div className='flex items-start'>
        
    <Check className="text-secondarygray min-w-[28px] w-7" />
    <p className={`brightness-75 ${isNew && 'font-semibold'}`}>{children}</p>
    </div>
    {isNew && (
      <div className="bg-[#f2dd69] text-xs font-medium py-1 px-2 rotate-90 text-secondarygray">
        <span className={`text-[${color}] brightness-75 font-semibold`}>NUEVO</span>
      </div>
    )}
  </li>
);
export default AdvantagesLi;
