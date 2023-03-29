import { Dispatch, SetStateAction } from 'react';
import ProfileOption from './ProfileOption';

interface ProfileSecondUlProps {
  setValue: Dispatch<SetStateAction<string>>;
  setSelection: Dispatch<SetStateAction<boolean>>;
  selection: boolean;
}
const ProfileSecondUl: React.FC<ProfileSecondUlProps> = ({ setSelection, setValue, selection }) => (
  <ul className="w-full px-3 py-1 border-l border-gray-300 overflow-auto relative bg-white">
    <ProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Biología"
    />
    <ProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Bioquímica"
    />
    <ProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Educación"
    />
    <ProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Enfermería"
    />
  </ul>
);
export default ProfileSecondUl;
