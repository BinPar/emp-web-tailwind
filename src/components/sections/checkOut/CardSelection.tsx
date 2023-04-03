import { useState } from 'react';
import Visa from '../../icons/Visa';
import FormOptionsItem from './FormOptionsItem';
import InputCheck from './InputCheck';
import InputForms from './InputForms';

const CardSelection: React.FC = () => {
  const [addCard, SetAddCard] = useState(false);
  return (
    <div>
      <p className="uppercase text-gray-500 text-sm tracking-[1px] font-light pb-2 border-b border-gray-300">
        MIS TARJETAS
      </p>
      <form className="flex flex-wrap gap-5 mb-5 mt-5">
        <FormOptionsItem
          type="creditCard"
          option="creditCard"
          value="**** **** **** 3547"
          alias="6 / 2024"
          className="lg:w-[calc((100%_/_2)_-_10px)]"
        >
          <Visa className="w-11 mr-5" />
        </FormOptionsItem>
        <button
          type="button"
          aria-current={addCard}
          className="w-full md:w-[calc((100%_/_2)_-_10px)] border border-gray-300 hover:border-primary h-[89px] text-1xs uppercase font-semibold text-gray-400 aria-current:hidden"
          onClick={(): void => SetAddCard(!addCard)}
        >
          AÑADIR TARJETA
        </button>
        {addCard && (
          <div className="w-full p-4 border border-gray-300">
            <div className="mb-5 xs:mb-0 md:flex gap-5">
              <InputForms
                className="w-full md:w-[calc((100%_/_2)_-_10px)]"
                type="text"
                id="cardNumber"
                label="Nº de Tarjeta"
              />
              <div className="xs:flex gap-5 w-full md:w-[calc((100%_/_2)_-_10px)]">
                <InputForms
                  className="w-full xs:w-[calc((100%_/_2)_-_10px)]"
                  type="text"
                  id="cardExpiri"
                  label="Fecha de vencimiento"
                />
                <InputForms
                  className="w-full xs:w-[calc((100%_/_2)_-_10px)]"
                  type="number"
                  id="cvc"
                  label="Código CVC"
                />
              </div>
            </div>
            <InputCheck label='Guardar esta tarjeta para próximas compras' className='mb-8' labelClassName='normal-case' id='saveCard'/>
            <div className='md:flex gap-5 justify-center'>
              <button
                type="button"
                className="w-full mb-5 md:mb-0 min-w-[153px] hover:bg-primary text-primary border-2 border-primary hover:text-white text-1xs uppercase tracking-[1px] h-10 px-6 block"
                onClick={(): void => SetAddCard(!addCard)}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-full bg-primary text-white text-1xs uppercase tracking-[1px] h-10 px-6 block"
              >
                Usar Tarjeta
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CardSelection;
