import ButtonStar from './ButonStar';

const ProductValoration: React.FC = () => (
  <div className="m-auto w-11/12 mt-5">
    <div>
      <ButtonStar value={1} className="ml-0" />
      <ButtonStar value={2} />
      <ButtonStar value={3} />
      <ButtonStar value={4} />
      <ButtonStar value={5} />
    </div>
    <p className="mt-1 text-xs font-bold tracking-[.5px] text-gray-400">
      ¡Sé el primero en valorar esta obra!
    </p>
  </div>
);
export default ProductValoration;
