import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';
import CloseCircled from '../../icons/CloseCircled';
import InputForms from './InputForms';
import ProfileFirstUl from './ProfileFirstUl';

import ProfileSecondUl from './ProfilesecondUl';
import Select from './Select';

const ProfileSelector: React.FC<WithClassName> = ({ className }) => {
  const [checked, SetChecked] = useState(false);
  const [selection, SetSelection] = useState(false);
  const [value, SetValue] = useState('');
  return (
    <div className={twMerge('w-full relative', className)}>
      <button
        type="button"
        className="flex border border-gray-300 items-center transition-all duration-200 justify-between h-10 px-3  font-light relative text-gray-400 last:mb-0 w-full hover:bg-primary hover:text-white hover:border-primary peer group"
        aria-current={checked}
        onClick={(): void => {
          SetChecked(!checked);
        }}
      >
        <span>{value === '' ? 'Elige tu perfil *' : value}</span>
        {value === '' && <ArrowDown className="group-aria-current:rotate-180 w-4 transition-all duration-150" />}
        
      </button>
      {value !== '' && (
        <button
          type="button"
          className="w-4 absolute top-3 right-3 text-gray-400"
          onClick={(): void => {
            SetValue(''), SetChecked(!checked);
          }}
        >
          <CloseCircled />
        </button>
      )}

      <div className="mt-5 overflow-hidden flex peer-aria-current:mb-5 max-h-0 border border-transparent peer-aria-current:border-gray-300 peer-aria-current:max-h-64 peer-aria-current:py-3 transition-all duration-300">
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
