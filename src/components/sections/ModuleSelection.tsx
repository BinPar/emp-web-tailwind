import ProductBuy from './items/ProductBuy';
import ProductMessage from './items/ProductMessage';
import ProductNetWorks from './items/ProductNetWorks';
import ProductPrice from './items/ProductPrice';
import ProductSelection from './items/ProductSelection';
import ProductType from './items/ProductType';
import ProductValoration from './items/ProductValoration';
import ProductWarrantie from './items/ProductWarrantie';

const ModuleSelection: React.FC = () => (
  <article className="mb-8 lg:mb-0 w-[calc(100%_+_50px)] -left-6 lg:left-auto mt-11 lg:mt-0 lg:max-w-[250px] xl:max-w-[310px] relative lg:absolute right-0 border-l-2 border-[#f9f9f9] bg-white">
    <ProductSelection />
    <ProductType />
    <ProductMessage />
    <ProductPrice />
    <ProductBuy />
    <ProductValoration />
    <ProductWarrantie />
    <ProductNetWorks />
  </article>
);
export default ModuleSelection;
