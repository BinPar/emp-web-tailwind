import ButtonPromir from './ButtonPromir';
import FormSelectPromir from './FormSelectPromir';
import InputCheckPromir from './InputCheckPromir';
import InputPromir from './InputPromir';
import TextAreaPromir from './TextAreaPromir';

const ContactFormPromir: React.FC = () => (
  <div className="bg-promirDark flex items-center text-center p-10  w-full lg:w-2/4">
    <div>
      <div className="mb-5">
        <h3 className="text-white text-center text-2sm tracking-[1px] uppercase pb-3">
          ¿tienes dudas?
        </h3>
        <span className="block text-center text-white text-sm font-light tracking-[1px]">
          Contacta con nosotros y nos pondremos en contacto contigo.
        </span>
      </div>
      <form>
        <div className="flex flex-wrap xs:flex-nowrap gap-4 mb-4">
          <InputPromir type="text" id="name" label="Nombre*" className="w-full xs:w-2/4" />
          <InputPromir type="text" id="lastName" label="Apellidos*" className="w-full xs:w-2/4" />
        </div>
        <div className="flex flex-wrap xs:flex-nowrap gap-4 mb-4">
          <InputPromir
            type="mail"
            id="mail"
            label="correo electrónico*"
            className="w-full xs:w-2/4"
          />
          <InputPromir
            type="tel"
            id="phone"
            label="Número de teléfono*"
            className="w-full xs:w-2/4"
          />
        </div>
        <FormSelectPromir
          className="mb-4"
          option1="Selecciona tu universidad*"
          option2="Universidad Alfonso X el Sabio"
          option3="Univeersidad Autónoma de madrid"
          option4="Universidad CEU Cardenal Herrera"
          option5="Universidad CEU San Pablo"
        />
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
          option1="Selecciona el tipo de curso Promir*"
          option2="Grado"
          option3="Sexto"
          option4="Internacional"
          option5="Proremir"
          option6="Intensivo"
          option7="Recta Final"
        />
        <TextAreaPromir placeHolder="Consulta" />
        <InputCheckPromir
          className="mb-4 mt-4"
          label="He leído y acepto las políticas de protección de datos y las condiciones de uso"
          id="UseConditions"
        />
        <InputCheckPromir
          label="Deseo recibir comunicaciones de parte de Editorial Médica Panamericana para estar informado de las novedades, ofertas, promociones y descuentos que puedan ser de mi interés."
          id="Adds"
          className="mb-4"
        />
        <ButtonPromir
          typeButton="submit"
          className="w-full xs:w-auto bg-greencart text-white border-transparent hover:bg-darkGreenCart"
        >
          enviar
        </ButtonPromir>
      </form>
    </div>
  </div>
);
export default ContactFormPromir;
