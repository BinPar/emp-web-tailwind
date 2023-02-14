interface StickyBuyProps {
  type: string;
  oldPrice: string;
  price: string;
  link: string;
}
const StickyBuy: React.FC<StickyBuyProps> = ({ type, oldPrice, price, link }) => (
  <div className="sticky bottom-0 shadow-up px-5 w-full py-2 bg-white lg:hidden flex justify-between items-center">
    <p className="text-gray-400 font-light tracking-[1px]">{type}</p>
    <div className="border-l-2 border-gray-300 flex">
      <div className="flex flex-col justify-center text-right mx-5">
        <p className="text-xs text-gray-400 tracking-[1px] line-through">{`${oldPrice}€`}</p>
        <p className="text-2.5xs text-greencart tracking-[1px]">{`${price}€`}</p>
      </div>
      <a
        href={link}
        className="bg-greencart hover:bg-[#a1bf3b] transition-all duration-300 px-4 py-3 uppercase text-white inline-block text-sm tracking-[1px]"
      >
        comprar
      </a>
    </div>
  </div>
);
export default StickyBuy;
