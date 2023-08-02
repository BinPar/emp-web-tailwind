interface TotalPriceBoxProps {
  discount: string;
  price: string;
  afterDiscount: string;
}
const TotalPriceBox: React.FC<TotalPriceBoxProps> = ({ price, afterDiscount, discount }) => (
  <div className="rounded-lg bg-gray-100 p-4 flex justify-between mb-4">
    <p className="text-xs tracking-[.5px] font-bold text-gray-500 -mt-1">Total:</p>
    <div className="w-fit text-right">
      <p className="text-white bg-greencart rounded-sm font-bold text-2xs text-center tracking-[.8px] px-2 mb-1">
        {discount}
      </p>
      <div className="flex relative justify-end items-start">
        <div className="flex items-center gap-[2px] pt-1">
          <p className="text-gray-400 text-1xs tracking-widest line-through decoration-1">{price}</p>
          <span className="text-2xs no-underline text-gray-400">€</span>
        </div>
        <div className="flex gap-1 ml-3">
          <p className="text-gray-500 text-2xl font-bold">{afterDiscount}</p>
          <span className="text-1xs text-gray-500 font-black">€</span>
        </div>
      </div>
      <p className="text-gray-400 text-2xs tracking-[.8px] -mt-1">(IVA incluido)</p>
    </div>
  </div>
);
export default TotalPriceBox;
