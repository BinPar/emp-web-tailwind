import ProductBuy from './items/ProductBuy';
import ProductMessage from './items/ProductMessage';
import ProductNetWorks from './items/ProductNetWorks';
import ProductPrice from './items/ProductPrice';
import ProductSelection from './items/ProductSelection';
import ProductType from './items/ProductType';
import ProductValoration from './items/ProductValoration';
import ProductWarrantie from './items/ProductWarrantie';

const SectionSelection: React.FC = () => (
  <section className="max-w-[250px] xl:max-w-[310px] absolute right-0 border-l-2 border-[#f9f9f9] bg-white">
    <ProductSelection />
    <ProductType />
    <ProductMessage />
    <ProductPrice />
    <ProductBuy />
    <ProductValoration />
    <ProductWarrantie />
    <ProductNetWorks />
  </section>
);
export default SectionSelection;
