import SubHeader from '../items/SubHeader';
import ActionButton from '../userArea/ActionButton';
import InputForms from './InputForms';
import Select from './Select';

interface PersonalDataProps {
  passBtn?: boolean;
}
const PersonalData: React.FC<PersonalDataProps> = ({ passBtn }) => (
  <>
    <SubHeader className={`mt-5 ${passBtn ? 'flex justify-between items-center' : ''}`}>
      DATOS PERSONALES
      {passBtn && (
        <ActionButton text='cambiar contraseña'/>
      )}
    </SubHeader>
    <div className="flex flex-wrap gap-x-5 gap-y-0">
      <InputForms
        id="email"
        type="email"
        label="Email *"
        className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
      />
      <InputForms
        id="password"
        type="password"
        label="Password *"
        className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
      />
      <InputForms
        id="passwordRepeat"
        type="password"
        label="Repetir contraseña *"
        className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
      />
      <InputForms
        type="text"
        id="name"
        label="Nombre *"
        className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
      />
      <InputForms
        type="text"
        id="lastName"
        label="Apellidos *"
        className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
      />
      <InputForms
        type="tel"
        id="phone"
        label="Teléfono *"
        className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
      />
      <Select
        label="Tipo de documento"
        className="mb-4 w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
      />
      <InputForms
        type="text"
        id="documentNumber"
        label="Nº de documento *"
        className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
      />
    </div>
  </>
);
export default PersonalData;
