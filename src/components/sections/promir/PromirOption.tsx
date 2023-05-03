import { Dispatch, SetStateAction } from 'react';

interface PromirOptionsProps {
  setValue: Dispatch<SetStateAction<string>>;
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
  option: string;
}
const PromirOption: React.FC<PromirOptionsProps> = ({ setValue, setChecked, checked, option }) => {
  return (
    <li className="hover:bg-gray-100 p-2">
      <input
        type="radio"
        name="document"
        id={option}
        value={option}
        className="peer appearance-none absolute"
        onClick={(): void => {
          setValue(option);
          setChecked && setChecked(!checked);
        }}
      />

      <label
        htmlFor={option}
        className="px-3 py-2 w-full block text-2sm font-medium tracking-[.5px] text-secondarygray peer-checked:text-primary relative z-10"
      >
        {option}
      </label>
    </li>
  );
};
export default PromirOption;
