import { Dispatch, SetStateAction } from 'react';
import NewInputForms from '../NewRegister/NewInputForms';

interface CodesFormProps {
  method: Dispatch<SetStateAction<boolean>>;
  value: boolean;
  closeMethod: Dispatch<SetStateAction<boolean>>;
  closeValue: boolean;
}

const CodesForm: React.FC<CodesFormProps> = ({ method, value, closeMethod, closeValue }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    method(!value);
    closeMethod(!closeValue);
  };

  return (
    <div className="mt-5">
      <h4 className="mb-4 after:content-[''] after:h-[1.5px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1 text-sm xs2:text-base text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px]">
        Mis cupones
      </h4>
      <form>
        <NewInputForms type="text" id="code" label="Tu código *" />
        <button
          type="button"
          onClick={handleClick}
          className="bg-primary xs2:w-fit text-white text-1xs font-bold uppercase tracking-[3px] h-10 w-full xs2:px-10 rounded-lg block mt-3"
        >
          Aplicar
        </button>
      </form>
    </div>
  );
};
export default CodesForm;
