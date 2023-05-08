interface PriceBoxProps {
  price: string;
}
const PriceBox: React.FC<PriceBoxProps> = ({ price }) => (
  <div className="w-full md:w-[257px]">
    <div className="bg-greencart flex items-center justify-center md:justify-between leading-3 pt-3 pb-1 px-5">
      <span className="text-2.5xs text-center uppercase tracking-[1px] font-medium text-white">
        total
        <br /> de
      </span>
      <p className="text-white text-center md:text-left text-4xl font-medium flex items-center">
        {price}
        <span className="text-lg font">€</span>
      </p>
    </div>
    <p className="bg-darkGreenCart font-medium tracking-[1px] text-white text-2xs py-1 px-5 uppercase">
      iva incluido
    </p>
  </div>
);

export default PriceBox;
