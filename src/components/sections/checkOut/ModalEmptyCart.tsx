import { Dispatch, SetStateAction } from 'react';
import Close from '../../icons/Close';

interface ModalEmptyCartProps {
  method: Dispatch<SetStateAction<string>>;
  ask: string;
}

const ModalEmptyCart: React.FC<ModalEmptyCartProps> = ({ method, ask }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    className="w-full h-[100vh] flex items-center justify-center absolute top-0"
    role="button"
    tabIndex={0}
    onClick={(): void => method('close')}
  >
    <div className="bg-white border-4 border-primary p-5">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={(): void => method('close')}
          className="w-8 text-gray-500 hover:text-primary"
        >
          <Close />
        </button>
      </div>
      <p className="font-light text-gray-400 mt-3 tracking-[1px]">{ask}</p>
      <div className="flex gap-8 justify-center my-10">
        <button
          type="button"
          onClick={(): void => method('close')}
          className="hover:bg-primary border-2 hover:text-white transition-all duration-200 text-primary border-primary px-4 uppercase tracking-[1px] h-10 text-sm"
        >
          cancelar
        </button>
        <button
          type="button"
          className="border-2 text-white bg-primary border-primary px-4 uppercase tracking-[1px] h-10 text-sm"
        >
          Aceptar
        </button>
      </div>
    </div>
  </div>
);

export default ModalEmptyCart;
