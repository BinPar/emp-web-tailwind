import FullStar from '../../icons/FullStar';
import Trash from '../../icons/Trash';
import Visa from '../../icons/Visa';
import AddressForm from '../checkOut/AddressForm';
import InputCheck from '../checkOut/InputCheck';
import PersonalData from '../checkOut/PersonalData';
import ProfileData from '../checkOut/ProfileData';
import Select from '../checkOut/Select';
import DivWrapper from '../items/DivWrapper';
import ActionButton from './ActionButton';

const SectionMyData: React.FC = () => (
  <section className="my-10">
    <DivWrapper>
      <PersonalData passBtn />
      <p className="uppercase text-gray-500 text-sm tracking-[1px] font-light pb-2 border-b border-gray-300 mb-5 mt-2">
        MIS TARJETAS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="p-3 border text-primary font-semibold flex items-center justify-between border-primary">
          <div className="flex items-center justify-center">
            <Visa className="w-11 mr-5" />
            <div>
              <span className="mt-1 font-semibold">**** **** **** 3547</span>
              <p className="font-light -mt-2">6 / 2024</p>
            </div>
          </div>
          <div className="flex items-center">
            <button type="button">
              <FullStar className="w-5 fill-primary" />
            </button>
            <button type="button" className="pl-3 ml-2 border-l border-primary">
              <Trash className="w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="pb-2 border-b border-gray-300 mb-5 mt-5 flex justify-between items-center">
        <p className="uppercase text-gray-500 text-sm tracking-[1px] font-light ">DIRECCIONES</p>
        <button
          type="button"
          className="text-secondarygray tracking-[1px] uppercase text-xs hover:brightness-75"
        >
          agregar
        </button>
      </div>
      <div className="border-b border-gray-300 pb-2 mb-5 mt-5 flex justify-between items-center">
        <p className="text-gray-500 text-1xs tracking-[1px] font-light">miCasa</p>
        <ActionButton text="eliminar" />
      </div>
      <AddressForm />
      <div>
        <p className="uppercase text-gray-500 text-sm tracking-[1px] font-light pb-2 border-b border-gray-300 mb-5 mt-5">
          DIRECCIONES PREDETERMINADAS
        </p>
        <div className="flex gap-5 justify-between items-center">
          <Select className="w-1/2" />
          <Select className="w-1/2" />
        </div>
      </div>
      <ProfileData />
      <div className="w-1/2">
        <InputCheck
          id="newsletter"
          className="items-start mb-4"
          label="Deseo recibir comunicaciones de parte de Editorial Médica Panamericana para estar informado de las novedades, ofertas, promociones y descuentos que puedan ser de mi interés."
        />
      </div>
      <div className="flex gap-5 justify-center pb-12">
        <button
          type="button"
          className="border-2 border-primary hover:bg-primary hover:text-white transition-all duration-150 text-primary text-1xs uppercase tracking-[1px] h-10 px-4 block"
        >
          Cancelar
        </button>
        <button
          type="button"
          className="border-2 border-primary bg-primary text-white hover:brightness-75 transition-all duration-150 text-1xs uppercase tracking-[1px] h-10 block px-4"
        >
          guardar cambios
        </button>
      </div>
    </DivWrapper>
  </section>
);
export default SectionMyData;
