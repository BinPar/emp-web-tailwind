import Close from '../../../icons/Close';
import NewInputcheck from '../../NewRegister/NewInputCheck';
import NewInputForms from '../../NewRegister/NewInputForms';

interface NewCardProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}
const NewCard: React.FC<NewCardProps> = ({ method, value }) => (
  <div
    aria-current={value === 'newCard'}
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
        Añadir nueva tarjeta
      </h4>
      <form>
        <div className="mt-5 xs2:mt-0 lg:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
          <NewInputForms type="text" id="street" label="Nº de tarjeta *" className="w-full" />
          <div className="mt-5 xs2:mt-0 xs2:grid grid-cols-[1fr_1fr] gap-x-5 gap-y-0">
            <NewInputForms type="text" id="validez" label="Validez *" className="w-full" />
            <NewInputForms type="text" id="cvc" label="CVC *" className="w-full" />
          </div>
        </div>
        <p className="font-semibold text-gray-300 text-xs tracking-[1px] mt-3 xs2:mt-0">
          Stripe almacenará los datos de su tarjeta de forma segura para que pueda utilizarla en
          futuras compras. Nosotros no almacenamos ningún dato de su tarjeta.
        </p>
        <NewInputcheck label="Guardar como tarjeta principal" id="address" className="mb-10 mt-5" />
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
export default NewCard;
