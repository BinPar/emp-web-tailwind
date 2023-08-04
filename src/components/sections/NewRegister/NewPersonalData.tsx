import SubHeader from '../items/SubHeader';
import ActionButton from '../userArea/ActionButton';
import NewInputForms from './NewInputForms';
import NewSelect from './NewSelect';

interface NewPersonalDataProps {
  passBtn?: boolean;
}
const NewPersonalData: React.FC<NewPersonalDataProps> = ({ passBtn }) => (
  <>
    <h4 className='mt-5 mb-7 text-xl text-gray-500 font-semibold tracking-[1.2px] after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      Datos Profesionales
    </h4>
    <div className="xs2:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
      <NewInputForms type="text" id="name" label="Nombre *" className="w-full" />
      <NewInputForms type="text" id="lastName" label="Apellidos *" className="w-full" />
      <NewInputForms id="email" type="email" label="Email *" className="w-full" />
      <NewInputForms type="tel" id="phone" label="Teléfono *" className="w-full" />
      <NewInputForms id="password" type="password" label="Password *" className="w-full" />
      <NewInputForms
        id="passwordRepeat"
        type="password"
        label="Repetir contraseña *"
        className="w-full"
      />

      <NewSelect label="Tipo de documento" className="mb-4 w-full" />
      <NewInputForms type="text" id="documentNumber" label="Nº de documento *" className="w-full" />
    </div>
  </>
);
export default NewPersonalData;
