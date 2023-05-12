import InputCheck from '../checkOut/InputCheck';
import Select from '../checkOut/Select';
import ButtonPromir from './ButtonPromir';
import FormSelectPromir from './FormSelectPromir';
import InputCheckPromir from './InputCheckPromir';
import InputPromir from './InputPromir';

const PromirDemoForm: React.FC = () => (
  <div className="bg-promirDark p-10 w-full xl:w-1/3 flex items-center justify-center">
    <div>
      <div className="mb-5">
        <h3 className="text-white text-center text-2sm tracking-[1px] uppercase pb-3">
          ¿quieres probar promir?
        </h3>
        <span className="block text-center text-white text-2.5xs font-light tracking-[1px]">
          Prueba PROMIR durante 7 días con acceso a los entrenamientos y temarios completos.
        </span>
      </div>
      <form>
        <div className="flex gap-4 mb-4">
          <InputPromir type="text" id="name" label="Nombre*" className="w-2/4" />
          <InputPromir type="text" id="lastName" label="Apellidos*" className="w-2/4" />
        </div>
        <div className="grid gap-x-4 grid-cols-2 xl:grid-cols-1">
          <InputPromir type="mail" id="email" label="Correo Electrónico*" className="mb-4" />
          <FormSelectPromir
            className="mb-4"
            option1="Selecciona tu curso*"
            option2="Soy de 1º"
            option3="Soy de 2º"
            option4="Soy de 3º"
            option5="Soy de 4º"
            option6="Soy de 5º"
            option7="Soy de 6º"
            option8="Soy graduado"
            option9="Soy especialista"
          />
          <FormSelectPromir
            className="mb-4"
            option1="Selecciona tu universidad*"
            option2="Universidad Alfonso X el Sabio"
            option3="Univeersidad Autónoma de madrid"
            option4="Universidad CEU Cardenal Herrera"
            option5="Universidad CEU San Pablo"
          />
          <InputPromir type="tel" id="phone" label="Teléfono*" className="mb-4" />
          <InputCheckPromir
            className="mb-4"
            label="He leído y acepto las políticas de protección de datos y las condiciones de uso"
            id="UseConditions"
          />
          <InputCheckPromir
            label="Deseo recibir comunicaciones de parte de Editorial Médica Panamericana para estar informado de las novedades, ofertas, promociones y descuentos que puedan ser de mi interés."
            id="Adds"
            className="mb-4"
          />
        </div>
        <ButtonPromir
          typeButton="submit"
          className="bg-greencart text-white border-transparent hover:bg-darkGreenCart"
        >
          solicitar prueba gratis
        </ButtonPromir>
      </form>
    </div>
  </div>
);
export default PromirDemoForm;
