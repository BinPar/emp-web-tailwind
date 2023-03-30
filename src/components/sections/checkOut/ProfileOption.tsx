import { Dispatch, SetStateAction } from 'react';
import ArrowRight from '../../icons/ArrowRight';
import Check from '../../icons/Check';

interface ProfileOptionProps {
  setValue: Dispatch<SetStateAction<string>>;
  setSelection: Dispatch<SetStateAction<boolean>>;
  option: string;
  selection: boolean;
  button?: boolean;
}
const ProfileOption: React.FC<ProfileOptionProps> = ({
  setValue,
  option,
  setSelection,
  selection,
  button,
}) => (
  <li className="group mb-4 last:mb-0 relative flex">
    <input
      type="radio"
      name="profile"
      id={option}
      value={option}
      onClick={(): void => setValue(option)}
      
      className="opacity-0 w-6 h-6 absolute peer"
    />
    <div className="w-6 border border-gray-300 text-white peer-checked:text-white peer-checked:bg-primary peer-checked:border-primary peer-hover:bg-gray-50 peer-hover:text-gray-50 peer-checked:peer-hover:bg-primary">
      <Check />
    </div>

    {button ? (
      <button
        type="button"
        onClick={(): void => setSelection(!selection)}
        className="group-hover:text-primary font-light flex items-center justify-between w-full text-gray-400 text-sm tracking-[1px] peer-checked:text-primary pl-4 relative"
      >
        {option}
        <ArrowRight className="w-5" />
      </button>
    ) : (
      <p className="group-hover:text-primary font-light flex items-center justify-between w-full text-gray-400 text-sm tracking-[1px] peer-checked:text-primary pl-4 relative">
        {option}
      </p>
    )}
  </li>
);
export default ProfileOption;
