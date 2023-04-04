import Image from 'next/image';
interface ItemCartMenuProps {
  src: string;
  title: string;
  type: string;
  oldPrice: number;
  discount: number;
  priceSuffix: string;
}
const ItemCartMenu: React.FC<ItemCartMenuProps> = ({
  src,
  title,
  type,
  oldPrice,
  discount,
  priceSuffix,
}) => {
  const discountCalc = (oldPrice * discount) / 100;
  const currentPrice = oldPrice - discountCalc;

  return (
    <li className="flex min-h-[144px] gap-2 items-center pb-5 mb-5 border-b border-secondary">
      <Image
        alt="image-product"
        src={src}
        width="552"
        height="552"
        className="w-[90px] min-w-[85px] h-[90px]"
      />
      <div className='flex items-center'>
        <div>
          <h4 className="mb-1 md:mb-2 text-gray-400 text-1xs line-clamp-3 leading-4 w-[90%]">{title}</h4>
          <p className="hidden lg:inline border border-primary text-primary py-[2px] px-2 text-3xs xl:text-2xs tracking-wider uppercase font-bold hover:bg-primary hover:text-white transition-all duration-200">
            {type}
          </p>
        </div>
        <div className='text-1xs tracking-[1px] text-gray-400 font-light'>
          <p className="flex justify-center gap-1 line-through">
            {oldPrice}
            <span className="text-2xs pt-[2px]">{priceSuffix}</span>
          </p>
          <h5 className="flex justify-center gap-1">
            {Math.round((currentPrice + Number.EPSILON) * 100) / 100}
            <span className="text-2xs pt-[2px]">{priceSuffix}</span>
          </h5>
        </div>
      </div>
    </li>
  );
};

export default ItemCartMenu;
