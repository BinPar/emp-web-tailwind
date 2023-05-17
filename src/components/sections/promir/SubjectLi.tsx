import type { WithClassName } from '../../../model/react';
import { twMerge } from 'tailwind-merge';
import PromirP from './PromirP';

interface SubjectLiProps {
  title: string;
  name1: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
}
const SubjectLi: React.FC<WithClassName<SubjectLiProps>> = ({ title, className, name1, name2, name3, name4, name5 }) => (
  <li className={twMerge('mb-5', className)}>
    <h4 className="text-2sm font-bold text-gray-400">{title}</h4>
    <PromirP>{name1}</PromirP>
    {name2 && <PromirP>{name2}</PromirP>}
    {name3 && <PromirP>{name3}</PromirP>}
    {name4 && <PromirP>{name4}</PromirP>}
    {name5 && <PromirP>{name5}</PromirP>}
  </li>
);
export default SubjectLi;
