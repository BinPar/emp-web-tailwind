import CartLight from '../../icons/CartLight';

interface ProductSelectionProps {
  title: string;
}
const ProductSelection: React.FC<ProductSelectionProps> = ({title}) => (
  <div className="flex text-gray-400 w-full border-b border-[#ebebeb] py-5 pl-5 bg-lightgray relative">
    <span className="hidden lg:inline w-0 h-0 border-t-[15px] border-r-[20px] border-b-[15px] border-t-transparent border-b-transparent border-r-lightgray absolute -left-5" />
    <div className="w-6">
      <CartLight />
    </div>
    <p className="ml-3">{title}</p>
  </div>
);
export default ProductSelection;
