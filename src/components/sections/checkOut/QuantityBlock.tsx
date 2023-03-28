import { Dispatch, SetStateAction } from 'react';
import Minus from '../../icons/Minus';
import Plus from '../../icons/Plus';

interface QuantityBlockProps {
methodQuantity: Dispatch<SetStateAction<number>>;
  quantity: number;
}
const QuantityBlock: React.FC<QuantityBlockProps> = ({ methodQuantity, quantity }) => (
  <div className="flex relative left-[93px] md:left-0 gap-2 md:items-center md:justify-around w-full md:w-60 ">
    <button
      type="button"
      className="text-gray-300 w-7"
      onClick={(): void => methodQuantity(Math.max(quantity - 1, 1))}
    >
      <Minus />
    </button>
    <span className="font-light text-gray-400">{quantity}</span>
    <button
      type="button"
      className="text-gray-300 w-7"
      onClick={(): void => {
        methodQuantity(quantity + 1);
      }}
    >
      <Plus />
    </button>
  </div>
);

export default QuantityBlock;
