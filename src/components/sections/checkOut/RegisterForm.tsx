import Image from 'next/image';
import InputCheck from './InputCheck';
import PersonalData from './PersonalData';
import ProfileData from './ProfileData';

const RegisterForm: React.FC = () => (
  <>
    <p className="uppercase text-gray-500 text-sm tracking-[1px] font-light pb-2 border-b border-gray-300">
      CREA UNA CUENTA NUEVA
    </p>
    <form className="w-full m-auto">
      <PersonalData />
      <ProfileData />
      <div className="flex justify-between">
        <div className="max-w-[300px] max-h-[80px] bg-[#f9f9f9] border border-gray-300 rounded py-1 ">
          <Image alt="recaptcha" width={592} height={146} src="/img/recaptcha.jpg" />
        </div>
        <div className="max-w-[350px]">
          <InputCheck
            id="privacy"
            className="items-start mb-4"
            label="He leído, entendido y acepto el tratamiento de datos personales para esta solicitud y los términos de la política de protección de datos"
          />
          <InputCheck
            id="newsletter"
            className="items-start mb-4"
            label="Deseo recibir comunicaciones de parte de Editorial Médica Panamericana para estar informado de las novedades, ofertas, promociones y descuentos que puedan ser de mi interés."
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary text-white text-1xs uppercase tracking-[1px] h-10 px-6 block m-auto mt-14"
      >
        Continuar
      </button>
    </form>
  </>
);
export default RegisterForm;
