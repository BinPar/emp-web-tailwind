import Close from '../../../icons/Close';
import NewInputForms from '../../NewRegister/NewInputForms';
import NewSelect from '../../NewRegister/NewSelect';

interface CheckoutPopUpProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}
const PersonalInfoPopUp: React.FC<CheckoutPopUpProps> = ({ method, value }) => (
  <div
    aria-current={value === 'personalInfo'}
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
        Editar datos Personales
      </h4>
      <form>
        <div className="xs2:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
          <NewInputForms type="text" id="name" label="Nombre *" className="w-full" />
          <NewInputForms type="text" id="lastName" label="Apellidos *" className="w-full" />
          <NewInputForms id="email" type="email" label="Email *" className="w-full" />
          <NewInputForms type="tel" id="phone" label="Teléfono *" className="w-full" />
          <NewSelect label="Tipo de documento" className="mb-4 w-full" />
          <NewInputForms
            type="text"
            id="documentNumber"
            label="Nº de documento *"
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-3 mt-5 xs2:mt-0">
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
export default PersonalInfoPopUp;
