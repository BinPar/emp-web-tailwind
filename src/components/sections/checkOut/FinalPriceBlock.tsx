interface FinalPriceBlockProps {
  currentPrice: number;
  quantity: number;
  priceSuffix: string;
}
const FinalPriceBlock: React.FC<FinalPriceBlockProps> = ({currentPrice, quantity, priceSuffix}) => (
  <div className="w-60 hidden md:flex items-center justify-center text-1xs tracking-[1px] text-gray-400 font-light">
    <h5 className="flex justify-center gap-1">
      {Math.round((currentPrice * quantity + Number.EPSILON) * 100) / 100}
      <span className="text-2xs pt-[2px]">{priceSuffix}</span>
    </h5>
  </div>
);
export default FinalPriceBlock;
