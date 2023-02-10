const ProductPrice: React.FC = () => (
  <article className="flex text-gray-400 w-full mb-1 py-3 pl-5 bg-[#f9f9f9] relative justify-center">
    <div className="flex items-center gap-1 pt-1">
      <p className="text-gray-400 text-1xs tracking-widest font-light line-through decoration-1">
        1.790
      </p>
      <span className="text-2xs no-underline text-gray-400">€</span>
    </div>
    <div className="flex gap-1 ml-3">
      <p className="text-gray-500 text-xl font-semibold">1.611</p>
      <span className="text-1xs text-gray-500 font-semibold">€</span>
    </div>
  </article>
);
export default ProductPrice;
