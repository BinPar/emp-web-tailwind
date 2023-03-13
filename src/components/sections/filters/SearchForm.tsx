const SearchForm: React.FC = () => (
  <form className="max-h-7 w-full pb-1">
    <input
      type="search"
      id="search"
      placeholder="Buscar..."
      className="w-full focus-visible:outline-none placeholder:tracking-[1px] placeholder:font-light text-gray-400"
    />
  </form>
);
export default SearchForm;
