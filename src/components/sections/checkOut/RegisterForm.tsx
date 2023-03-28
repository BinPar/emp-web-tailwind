
import InputCheck from './InputCheck';
import PersonalData from './PersonalData';

const RegisterForm: React.FC = () => (
  <>
    <p className="uppercase text-gray-500 text-sm tracking-[1px] font-light pb-2 border-b border-gray-300">
      ACCEDE A TU CUENTA
    </p>
    <form className="w-full m-auto">
      <PersonalData />
      <div className='max-w-[350px]'>
      <InputCheck id='privacy' className='items-start mb-4' label='He leído, entendido y acepto el tratamiento de datos personales para esta solicitud y los términos de la política de protección de datos' />
      <InputCheck id='newsletter' className='items-start mb-4' label='Deseo recibir comunicaciones de parte de Editorial Médica Panamericana para estar informado de las novedades, ofertas, promociones y descuentos que puedan ser de mi interés.' />
      </div>
    </form>
  </>
);
export default RegisterForm;
