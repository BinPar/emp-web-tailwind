import { Dispatch, SetStateAction } from 'react';
import Trash from '../../icons/Trash';

interface EmptyCartButtonProps {
    method: Dispatch<SetStateAction<string>>;
}

const EmptyCartButton: React.FC<EmptyCartButtonProps> = ({method}) => (
  <button type="button" onClick={(): void => method('openEmptyCart')} className="uppercase tracking-[1px] text-sm text-primary flex items-center font-medium gap-2 m-auto lg:ml-0 min-w-[170px]">
    <Trash className="w-6" />
    vaciar carrito
  </button>
);
export default EmptyCartButton;
