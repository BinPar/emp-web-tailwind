import { Dispatch, SetStateAction } from 'react';
import NewProfileOption from './NewProfileOption';


interface NewProfileFirstUlProps {
  setValue: Dispatch<SetStateAction<string>>;
  setSelection: Dispatch<SetStateAction<boolean>>;
  selection: boolean;
}
const NewProfileFirstUl: React.FC<NewProfileFirstUlProps> = ({ setValue, setSelection, selection }) => (
  <ul className="w-full overflow-auto relative bg-white px-3 py-1">
    <NewProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Estudiante"
      button
    />
    <NewProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Docente"
      button
    />
    <NewProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Profesional"
    />
    <NewProfileOption
      setSelection={setSelection}
      selection={selection}
      setValue={setValue}
      option="Público General"
    />
  </ul>
);
export default NewProfileFirstUl;
