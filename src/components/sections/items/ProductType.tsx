import Checked from '../../icons/Checked';

const ProductType: React.FC = () => (
  <div className="flex text-gray-400 w-full mb-1 py-5 pl-5 bg-[#f9f9f9] relative">
    <form>
      <div className="flex">
        <Checked className="w-4" />
        <input
          type="radio"
          id="expertos"
          className="opacity-0"
          name="radio"
          value="expertos"
          checked
        />
        <label className="ml-0" htmlFor="expertos">
          Expertos
        </label>
      </div>
    </form>
  </div>
);
export default ProductType;
