import Image from 'next/image';
import ProfileData from '../checkOut/ProfileData';
import NewInputCheck from './NewInputCheck';
import NewPersonalData from './NewPersonalData';
import SubHeader from '../items/SubHeader';
import NewProfileSelector from './NewProfileSelector';

const RegisterForm: React.FC = () => (
  <>
    <p className="text-base text-gray-500 font-medium tracking-[.9px] mb-2 line-clamp-2 leading-5 text-center">
     Regístrate para continuar con el proceso de compra y disfrutar de todas nuestras ventajas
    </p>
    <form className="w-full m-auto max-w-5xl">
      <NewPersonalData />
      <h4 className='mt-5 mb-7 text-xl text-gray-500 font-semibold tracking-[1.2px] after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      Datos Profesionales
    </h4>
      <NewProfileSelector />
      <div className="flex justify-between">
        <div className="max-w-[550px]">
          <NewInputCheck
            id="privacy"
            className="items-start mb-4"
            label="He leído, entendido y acepto el tratamiento de datos personales para esta solicitud y los términos de la política de protección de datos"
          />
          <NewInputCheck
            id="newsletter"
            className="items-start mb-4"
            label="Deseo recibir comunicaciones de parte de Editorial Médica Panamericana para estar informado de las novedades, ofertas, promociones y descuentos que puedan ser de mi interés."
          />
        </div>
        <div className="max-w-[300px] max-h-[80px] bg-lightgray border border-gray-300 rounded py-1 ">
          <Image alt="recaptcha" width={592} height={146} src="/img/recaptcha.jpg" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary text-white text-1xs font-bold uppercase tracking-[3px] h-10 px-10 rounded-lg block m-auto mt-5"
      >
        Continuar
      </button>
    </form>
  </>
);
export default RegisterForm;
