import { Dispatch, SetStateAction } from 'react';
import BtnSwitchForm from './BtnSwitchForm';

interface SwitchForms {
  setSwitchForm: Dispatch<SetStateAction<boolean>>;
  switchForm: boolean;
}

const SwitchForms: React.FC<SwitchForms> = ({setSwitchForm, switchForm}) => (
  <div className="flex gap-8 justify-center mb-10">
    <BtnSwitchForm
      setSwitchForm={setSwitchForm}
      switchForm={switchForm}
      title="Iniciar Sesión"
      className="text-primary pointer-events-none aria-current:pointer-events-auto border-secondary aria-current:text-gray-300 aria-current:hover:text-gray-400 aria-current:border-transparent"
    />
    <BtnSwitchForm
      setSwitchForm={setSwitchForm}
      switchForm={switchForm}
      title="Registrarse"
      className="aria-current:text-primary pointer-events-auto aria-current:pointer-events-none aria-current:border-secondary border-transparent text-gray-300 hover:text-gray-400"
    />
  </div>
);
export default SwitchForms;
