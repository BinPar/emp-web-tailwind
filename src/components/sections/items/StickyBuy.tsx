interface StickyBuyProps {
  type: string;
  oldPrice: string;
  price: string;
  link: string;
}
const StickyBuy: React.FC<StickyBuyProps> = ({ type, oldPrice, price, link }) => (
  <div className="sticky bottom-0 shadow-up px-5 w-full py-4 bg-white lg:hidden flex justify-between items-center">
    <div className="flex justify-between w-full">
      <div className="flex flex-col ml-0 mx-5">
        <p className="text-xs text-gray-400 tracking-[1px] line-through">{`${oldPrice}€`}</p>
        <p className="text-gray-500 text-xl font-bold">{`${price}€`}</p>
      </div>
      <div className="flex gap-3">
        <a
          href={link}
          className="leading-4 min-h-[20px] py-1 px-10 w-full bg-greencart rounded-lg text-center text-white text-xs font-bold uppercase tracking-[1.2px] mb-3 last-of-type:mb-0 flex justify-center items-center hover:bg-darkGreenCart transition-all duration-300"
        >
          añadir al carro
        </a>
        
      </div>
    </div>
  </div>
);
export default StickyBuy;
