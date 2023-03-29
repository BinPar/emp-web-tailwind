import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';
import InputForms from './InputForms';
import ProfileFirstUl from './ProfileFirstUl';

import ProfileSecondUl from './ProfilesecondUl';
import Select from './Select';

const ProfileSelector: React.FC<WithClassName> = ({ className }) => {
  const [checked, setChecked] = useState(false);
  const [selection, SetSelection] = useState(false);
  const [value, SetValue] = useState('');
  return (
    <div className={twMerge('w-full relative', className)}>
      <button
        type="button"
        className="flex items-center transition-all duration-200 justify-between h-10 px-3 border border-gray-300 font-light relative text-gray-400 last:mb-0 w-full hover:bg-primary hover:text-white hover:border-primary peer group"
        aria-current={checked}
        onClick={(): void => {
          setChecked(!checked);
        }}
      >
        <span>{value === '' ? 'Elige tu perfil *' : value}</span>
        <ArrowDown className="group-aria-current:rotate-180 w-4" />
      </button>

      <div className="mt-5 overflow-hidden flex peer-aria-current:mb-5 max-h-0 peer-aria-current:border peer-aria-current:max-h-64 peer-aria-current:py-3 transition-all duration-300">
        <ProfileFirstUl setValue={SetValue} setSelection={SetSelection} selection={selection} />
        {selection && (
          <ProfileSecondUl setValue={SetValue} setSelection={SetSelection} selection={selection} />
        )}
      </div>

      {value === 'Docente' && (
        <div className="flex gap-5 mb-5">
          <Select className="w-full xs:w-[calc(50%_-_10px)]" />
          <InputForms
            id="departamento"
            type="text"
            label="Departamento"
            className="w-full xs:w-[calc(50%_-_10px)]"
          />
        </div>
      )}
      {value === 'Estudiante' && (
        <div className="flex gap-5 mb-5">
          <Select className="w-full xs:w-[calc(50%_-_10px)]" />
          <Select className="w-full xs:w-[calc(50%_-_10px)]" />
        </div>
      )}
    </div>
  );
};
export default ProfileSelector;
