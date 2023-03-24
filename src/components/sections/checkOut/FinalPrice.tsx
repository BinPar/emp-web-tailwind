interface FinalPriceProps {
  price: number;
  suffix: string;
}
const FinalPrice: React.FC<FinalPriceProps> = ({ price, suffix }) => (
  <li className="bg-gray-100 py-5 px-4 text-gray-400 mt-5 flex justify-between">
    <p className="uppercase tracking-[1px]">total</p>
    <h5 className='text-2xl font-bold flex gap-1'>{price} <span className='text-sm pt-[4px]'>{suffix}</span></h5>
  </li>
);

export default FinalPrice;
