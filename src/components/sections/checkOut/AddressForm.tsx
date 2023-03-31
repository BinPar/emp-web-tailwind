import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import InputForms from './InputForms';
import Select from './Select';

const AddressForm: React.FC<WithClassName> = ({className}) => (
  <div className={twMerge('flex flex-col md:flex-row gap-8', className)}>
    <div className="w-full border border-gray-400 h-[250px] md:h-[432px] bg-[url(/img/map.jpg)] bg-cover bg-center">
    </div>
    <form className="w-full">
      <div className="flex gap-5">
        <InputForms className="w-2/4" type="text" id="nameCompany" label="Nombre" />
        <InputForms className="w-2/4" type="text" id="CIFCompany" label="CIF" />
      </div>
      <InputForms className="w-full" type="text" id="emailCompany" label="Email de la empresa" />
      <InputForms className="w-full" type="text" id="searchAddress" placeHolder='Busca tu dirección...'/>
      <InputForms className="w-full" type="text" id="aliasAddress" label="Alias de esta dirección *" />
      <InputForms className="w-full" type="text" id="street" label="Calle / Vía *" />
      <div className="md:flex gap-5 mb-4 md:mb-0">
        <InputForms className="w-full md:w-2/4" type="number" id="streetNumber" label="Número *" />
        <InputForms className="w-full md:w-2/4" type="text" id="extraAddressInfo" label="Portal/Piso/Letra" />
      </div>
      <div className="md:flex gap-5 mb-4 md:mb-0">
        <InputForms className="w-full md:w-2/4" type="number" id="postalCode" label="Código postal *" />
        <InputForms className="w-full md:w-2/4" type="text" id="locality" label="localidad *" />
      </div>
      <div className="md:flex gap-5">
        <InputForms className="w-full md:w-2/4 md:mb-0" type="text" id="province" label="Provincia *" />
        <Select className="w-full md:w-2/4 md:mb-0"/>
      </div>
    </form>
  </div>
);
export default AddressForm;
