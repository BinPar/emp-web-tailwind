import WarrantiesBig from '../../icons/WarrantiesBig';
import WarrantiesList from './WarrantiesList';

const ProductWarranty: React.FC = () => (
  <div className="m-auto w-11/12 flex items-center mt-8">
    <div className="text-gray-400 w-28 flex flex-col items-center pr-4 border-r-2 border-gray-200">
      <WarrantiesBig className="w-14" />
      <p className="text-2xs text-center">GARANTÍA EDITORIAL MÉDICA PANAMERICANA</p>
    </div>
    <WarrantiesList />
  </div>
);
export default ProductWarranty;
