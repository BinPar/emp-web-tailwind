import { Dispatch, SetStateAction } from 'react';
import NewInputForms from './NewInputForms';
import NewInputCheck from './NewInputCheck';

const NewLogin: React.FC = () => (
  <div className='max-w-[700px] m-auto'>
    <p className="text-base text-gray-500 font-medium tracking-[.9px] mb-2 line-clamp-2 leading-5 text-center">
      Inicia sesión para acceder a tu cuenta y continuar con el proceso de compra
    </p>
    <form className="w-full m-auto mt-5 max-w-[700px]">
      <div className="md:flex gap-5">
        <NewInputForms type="email" id="email" label="Email *" className="md:w-2/4" />
        <NewInputForms type="password" id="password" label="Password *" className="md:w-2/4" />
      </div>
      <div className="flex justify-between mt-1 flex-col xs:flex-row">
        <NewInputCheck id="remember" label="Recuérdame" />

        <a
          href="#"
          className="font-semibold text-gray-400 text-xs tracking-[1px] mt-3 xs:mt-0 hover:text-primary"
        >
          Olvidé mi contraseña
        </a>
      </div>
      <button
        type="submit"
        className="bg-primary text-white text-1xs font-bold uppercase tracking-[3px] h-10 px-10 rounded-lg block m-auto mt-5"
      >
        Entrar
      </button>
    </form>
  </div>
);

export default NewLogin;
