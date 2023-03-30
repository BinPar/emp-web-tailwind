import InputCheck from './InputCheck';
import InputForms from './InputForms';

const LoginForm: React.FC = () => (
  <>
    <p className="uppercase text-gray-500 text-sm tracking-[1px] font-light pb-2 border-b border-gray-300">
      ACCEDE A TU CUENTA
    </p>
    <form className="w-full m-auto mt-16 ">
      <div className="md:flex gap-5">
        <InputForms type="email" id="email" label="Email *" className="md:w-2/4" />
        <InputForms type="password" id="password" label="Password *" className="md:w-2/4" />
      </div>
      <div className="flex justify-between mt-8 flex-col xs:flex-row">
        <InputCheck id='remember' label="recuérdame" />

        <a
          href="#"
          className="uppercase text-1xs text-primary tracking-[1.5px] font-semibold mt-3 xs:mt-0"
        >
          olvidé mi contraseña
        </a>
      </div>
      <button
        type="submit"
        className="bg-primary text-white text-1xs uppercase tracking-[1px] h-10 w-24 block m-auto mt-14"
      >
        Entrar
      </button>
    </form>
  </>
);

export default LoginForm;
