interface AddressOptionProps {
  option: string;
  value: string;
  alias: string;
}

const AddressOptionsItem: React.FC<AddressOptionProps> = ({ option, value, alias }) => (
  <div className="group relative w-full md:w-[calc((100%_/_2)_-_10px)] lg:w-[calc((100%_/_3)_-_14px)]">
    <input
      type="radio"
      name="addressOption"
      id={option}
      value={option}
      className="w-full h-full cursor-pointer appearance-none border-4 border-transparent checked:border-primary absolute peer"
    />
    <div className="border border-gray-300 text-gray-400 peer-checked:text-primary group-hover:text-primary text-1xs flex flex-col py-5 items-center group-hover:border-primary">
      <label htmlFor="radio3" className="uppercase font-semibold mt-1">
        {alias}
      </label>
      <p className="font-light mt-1">{value}</p>
    </div>
  </div>
);

export default AddressOptionsItem;
