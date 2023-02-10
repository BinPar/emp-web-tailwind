import { WithChildren } from '../../../model/react';

const WarrantieItem: React.FC<WithChildren> = ({ children }) => (
  <li className="mb-1">
    <p className="text-2xs text-gray-400 font-light">{children}</p>
  </li>
);

export default WarrantieItem;
