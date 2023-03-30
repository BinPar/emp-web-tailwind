import { Dispatch, SetStateAction } from 'react';
import ProfileOption from './ProfileOption';

interface ProfileFirstUlProps {
  setValue: Dispatch<SetStateAction<string>>;
  setSelection: Dispatch<SetStateAction<boolean>>;
  selection: boolean;
}
const ProfileFirstUl: React.FC<ProfileFirstUlProps> = ({ setValue, setSelection, selection }) => (
  <ul className="w-full overflow-auto relative bg-white px-3 py-1">
    <ProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Estudiante"
      button
    />
    <ProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Docente"
      button
    />
    <ProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Profesional"
    />
    <ProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Público General"
    />
  </ul>
);
export default ProfileFirstUl;
