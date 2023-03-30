import SubHeader from '../items/SubHeader';
import InputForms from './InputForms';

const MoreDetails: React.FC = () => (
  <>
    <SubHeader className="mt-5 flex justify-between">MÁS DETALLES</SubHeader>
    <form>
      <div className="md:flex gap-5">
        <InputForms type="text" id="attention" label="A la atención" className="md:w-2/4" />
        <InputForms type="text" id="deliveryTime" label="Horario de entrega" className="md:w-2/4" />
      </div>
      <button
        type="submit"
        className="bg-greencart text-white text-1xs uppercase tracking-[1px] h-10 block m-auto mt-3 px-6"
      >
        Continuar
      </button>
    </form>
  </>
);
export default MoreDetails;
