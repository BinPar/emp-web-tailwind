import ProductBuy from './items/ProductBuy';
import ProductMessage from './items/ProductMessage';
import ProductPrice from './items/ProductPrice';
import ProductSelection from './items/ProductSelection';
import ProductType from './items/ProductType';

const SectionSelection: React.FC = () => (
  <section className="max-w-[250px] absolute right-0 border-l-2 border-[#f9f9f9]">
    <ProductSelection />
    <ProductType />
    <ProductMessage />
    <ProductPrice />
    <ProductBuy />
  </section>
);
export default SectionSelection;
