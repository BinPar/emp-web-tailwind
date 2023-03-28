interface PriceBlockProps {
  oldPrice: number;
  priceSuffix: string;
  currentPrice: number;
  quantity: number;
  className?: string;
}

const PriceBlock: React.FC<PriceBlockProps> = ({
  oldPrice,
  priceSuffix,
  currentPrice,
  quantity,
  className,
}) => (
  <div className={`w-full md:w-60 flex items-center ${className || ''}`}>
    <div className="w-full flex gap-3 md:block text-1xs tracking-[1px] text-gray-400 font-light">
      <p className="flex justify-center gap-1 line-through">
        {oldPrice}
        <span className="text-2xs pt-[2px]">{priceSuffix}</span>
      </p>
      <h5 className="flex justify-center gap-1">
        {Math.round((currentPrice * quantity + Number.EPSILON) * 100) / 100}
        <span className="text-2xs pt-[2px]">{priceSuffix}</span>
      </h5>
    </div>
  </div>
);

export default PriceBlock;
