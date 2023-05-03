import { Dispatch, SetStateAction } from 'react';

interface SelectOptionsProps {
  setValue: Dispatch<SetStateAction<string>>;
  option: string;
}
const SelectOption: React.FC<SelectOptionsProps> = ({ setValue, option }) => {
  return (
    <li className="hover:bg-gray-50">
      <input
        type="radio"
        name="document"
        id={option}
        value={option}
        className="peer appearance-none absolute"
        onClick={(): void => setValue(option)}
      />

      <label
        htmlFor={option}
        className="px-3 py-2 w-full block font-light text-gray-400 uppercase text-xs tracking-[1px] peer-checked:text-primary relative z-10"
      >
        {option}
      </label>
    </li>
  );
};
export default SelectOption;
