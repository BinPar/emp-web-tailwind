import Trash from '../../icons/Trash';

const EmptyCartButton: React.FC = () => (
  <button type="button" className="uppercase tracking-[1px] text-sm text-primary flex items-center font-medium gap-2 m-auto lg:ml-0">
    <Trash className="w-6" />
    vaciar carrito
  </button>
);
export default EmptyCartButton;
