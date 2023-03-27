import Image from 'next/image';
import PriceBlock from './PriceBlock';

interface ProductBlockProps {
  src: string;
  title: string;
  isbn: string;
  type: string;
  oldPrice: number;
  priceSuffix: string;
  currentPrice: number;
  quantity: number;
  className: string;
}

const ProductBlock: React.FC<ProductBlockProps> = ({
  src,
  title,
  isbn,
  type,
  oldPrice,
  priceSuffix,
  currentPrice,
  quantity,
  className,
}) => (
  <div className="flex gap-2 items-center">
    <div className="text-center relative">
      <Image
        alt="image-product"
        src={src}
        width="552"
        height="552"
        className="w-[90px] min-w-[85px] h-[90px]"
      />
      <p className="absolute left-[30%] lg:hidden inline border border-primary text-primary py-[2px] px-2 text-3xs xl:text-2xs tracking-wider uppercase font-bold hover:bg-primary hover:text-white transition-all duration-200">
        {type}
      </p>
    </div>

    <div className="border-b pb-3 md:pb-0 border-gray-200 md:border-b-0 w-full md:w-64 text-1xs tracking-[1px] font-light mb-3 md:mb-0">
      <h4 className="mb-1 md:mb-2 text-gray-400 leading-4 lg:line-clamp-2 w-[90%]">{title}</h4>
      <p className="text-secondarygray mb-1 md:mb-2">{isbn}</p>
      <p className="hidden lg:inline border border-primary text-primary py-[2px] px-2 text-3xs xl:text-2xs tracking-wider uppercase font-bold hover:bg-primary hover:text-white transition-all duration-200">
        {type}
      </p>
      <PriceBlock
        oldPrice={oldPrice}
        priceSuffix={priceSuffix}
        currentPrice={currentPrice}
        quantity={quantity}
        className={className}
      />
    </div>
  </div>
);
export default ProductBlock;
