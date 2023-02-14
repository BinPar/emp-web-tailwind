import CartLight from '../../icons/CartLight';

const ProductSelection: React.FC = () => (
  <div className="flex text-gray-400 w-full border-b border-[#ebebeb] py-5 pl-5 bg-[#f9f9f9] relative">
    <span className="w-0 h-0 border-t-[15px] border-r-[20px] border-b-[15px] border-t-transparent border-b-transparent border-r-[#f9f9f9] absolute -left-5"/>
    <div className="w-6">
      <CartLight />
    </div>
    <p className="ml-3">Tu selección</p>
  </div>
);
export default ProductSelection;
