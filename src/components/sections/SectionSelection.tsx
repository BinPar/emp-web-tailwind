import FullStar from '../icons/FullStar';
import EmptyStar from '../icons/StarEmpty';
import ButtonStar from './items/ButonStar';
import ProductBuy from './items/ProductBuy';
import ProductMessage from './items/ProductMessage';
import ProductPrice from './items/ProductPrice';
import ProductSelection from './items/ProductSelection';
import ProductType from './items/ProductType';
import ProductValoration from './items/ProductValoration';

const SectionSelection: React.FC = () => (
  <section className="max-w-[250px] xl:max-w-[310px] absolute right-0 border-l-2 border-[#f9f9f9]">
    <ProductSelection />
    <ProductType />
    <ProductMessage />
    <ProductPrice />
    <ProductBuy />
    <ProductValoration />
  </section>
);
export default SectionSelection;
