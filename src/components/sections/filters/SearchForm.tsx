interface SearchFormProps {
  className?: string;
}
const SearchForm: React.FC<SearchFormProps> = ({className}) => (
  <form className={`max-h-7 w-full pb-1 ${className || ''}`}>
    <input
      type="search"
      id="search"
      placeholder="Buscar..."
      className="bg-transparent w-full focus-visible:outline-none placeholder:tracking-[1px] placeholder:font-light text-gray-400"
    />
  </form>
);
export default SearchForm;
