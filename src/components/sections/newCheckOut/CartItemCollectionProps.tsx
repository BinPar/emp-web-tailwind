import Image from 'next/Image';

interface CartItemCollectionProps {
  src: string;
  title: string;
  description: string;
  type: string;
}

const CartItemCollection: React.FC<CartItemCollectionProps> = ({
  src,
  title,
  description,
  type,
}) => (
  <div className="flex flex-col md:flex-row text-center md:text-left gap-2 md:gap-8 items-center mb-11 bg-lightgray py-3 px-5 rounded-lg">
    <div className="w-[180px] min-w-[180px] h-[180px] md:w-[250px] md:min-w-[250px] md:h-[250px]">
      <Image alt={title} title={title} width={280} height={280} src={src} className="w-ful" />
    </div>
    <div>
      <h2 className="text-base md:text-lg text-primary font-semibold tracking-[1.2px] border-b border-yellowmenu pb-3 mb-5">
        {title}
      </h2>
      <p className="text-xs xs:text-sm text-gray-400 font-medium tracking-[.9px] leading-4 xs:leading-5 line-clamp-3 xs:line-clamp-4 mb-3">
        {description}
      </p>
      <p className="m-auto md:ml-0 mb-3 md:mb-0 bg-primary/30 text-2.5xs text-primary uppercase w-fit px-2 rounded-sm">
        {type}
      </p>
    </div>
  </div>
);
export default CartItemCollection;
