import type { WithChildren } from '../../../model/react';
import PromirP from './PromirP';

const BioLi: React.FC<WithChildren> = ({children}) => (
  <li className="mb-10px last:mb-0">
    <PromirP>{children}</PromirP>
  </li>
);
export default BioLi;
