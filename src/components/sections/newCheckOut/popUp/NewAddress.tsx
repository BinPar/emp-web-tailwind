import Close from '../../../icons/Close';
import NewInputcheck from '../../NewRegister/NewInputCheck';
import NewInputForms from '../../NewRegister/NewInputForms';
import NewSelect from '../../NewRegister/NewSelect';

interface NewAddressProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const NewAddress: React.FC<NewAddressProps> = ({ method, value }) => (
  <div
    aria-current={value === 'newAddress' || value === 'newBillingAddress'}
    className="cursor-pointer h-0 w-0 aria-current:w-screen aria-current:h-screen aria-current:transition-none transition-all duration-[0ms] delay-300 fixed top-0 overflow-hidden z-50 bg-black/10 backdrop-blur-[2px] group"
    onClick={(): void => method('')}
  >
    <div className="cursor-default xs2:max-w-3xl h-full xs2:h-auto w-full xs2:w-5/6 bg-white xs2:border-[1.5px] xs2:rounded-xl drop-shadow-lg border-gray-200 absolute left-1/2 top-1/3 opacity-0 group-aria-current:opacity-100 group-aria-current:top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 pb-10 pt-10 xs2:pt-20 transition-[top,_opacity] duration-200 delay-100">
      <button
        type="button"
        className="hidden xs2:block absolute top-4 left-5 text-gray-500 border border-gray-200 rounded-full bg-whiteSmoke hover:shadow-sp1 hover:bg-white hover:border-transparent transition-all duration-300 group/btn"
        onClick={(): void => method('')}
      >
        <Close className="w-8 h-8 group-hover/btn:text-primary transition-all duration-300 scale-110 relative top-[.5px] left-[.5px]" />
      </button>
      <h4 className='mb-7 text-xl text-gray-500 font-semibold tracking-[1.2px] after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
        {value === 'newAddress' && 'Añadir nueva dirección'}
        {value === 'newBillingAddress' && 'Añadir nueva dirección de facturacion'}
      </h4>
      <form>
        <div className="xs2:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
          <NewInputForms type="text" id="name" label="Nombre *" className="w-full" />
          <NewInputForms type="text" id="cif" label="CIF *" className="w-full" />

          <NewInputForms id="email" type="email" label="Email *" className="w-full" />
          <NewInputForms type="text" id="alias" label="alias de la dirección" className="w-full" />
        </div>
        <div className="mt-5 xs2:mt-0 lg:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
          <NewInputForms type="text" id="street" label="Calle / Vía *" className="w-full" />
          <div className="mt-5 xs2:mt-0 xs2:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
            <NewInputForms type="text" id="number" label="Numero *" className="w-full" />
            <NewInputForms type="text" id="flat" label="Piso *" className="w-full" />
          </div>
        </div>
        <div className="lg:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
          <div className="mt-5 xs2:mt-0 xs2:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
            <NewInputForms type="text" id="street" label="Código postal *" className="w-full" />
            <NewInputForms type="text" id="number" label="Localidad *" className="w-full" />
          </div>
          <div className="mt-5 xs2:mt-0 xs2:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
            <NewInputForms type="text" id="street" label="Provincia *" className="w-full" />
            <NewInputForms type="text" id="street" label="País *" className="w-full" />
          </div>
        </div>
        <NewInputcheck
          label="Guardar como dirección principal"
          id="address"
          className="mb-10 mt-5"
        />
        <div className="grid grid-cols-[1fr_1fr] gap-3">
          <button
            type="submit"
            className="bg-primary xs2:w-fit text-white text-1xs font-bold uppercase tracking-[3px] h-10 w-full xs2:px-10 rounded-lg block mt-3"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={(): void => method('')}
            className="xs2:hidden border-2 text-primary border-primary text-1xs font-bold uppercase tracking-[3px] h-10 w-full xs2:w-fit xs2:px-10 rounded-lg block mt-3"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
);
export default NewAddress;
