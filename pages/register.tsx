import React, { useState } from 'react';

import Head from 'next/head';
import NewLogin from '../src/components/sections/NewRegister/NewLogin';
import RegisterForm from '../src/components/sections/checkOut/RegisterForm';
import NewRegisterForm from '../src/components/sections/NewRegister/NewRegisterForm';
import LongArrow from '../src/components/icons/LongArrow';

const Register: React.FC = () => {
  const [action, SetAction] = useState('login');
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <main className="flex flex-col justify-center items-center h-screen p-6 relative">
        <a href='/newProductPage' className='text-gray-400 flex gap-2 absolute top-6 left-6 xs2:top-24 xs2:left-24 border border-gray-200 rounded-full px-4 pb-[1px] bg-whiteSmoke hover:bg-white hover:shadow-sp1 hover:border-white transition-all duration-300'>
          <LongArrow className='w-6 rotate-180'/>
          volver</a>
        <div>
          <div className="flex gap-5 mb-12 justify-center">
            <button
              onClick={(): void => SetAction('login')}
              aria-current={action === 'login'}
              type="button"
              className="uppercase tracking-[1px] font-semibold text-gray-400 aria-current:text-primary border-b-2 border-transparent aria-current:border-yellowmenu"
            >
              iniciar sesión
            </button>
            <button
              onClick={(): void => SetAction('register')}
              aria-current={action === 'register'}
              type="button"
              className="uppercase tracking-[1px] font-semibold text-gray-400 aria-current:text-primary border-b-2 border-transparent aria-current:border-yellowmenu"
            >
              registrarse
            </button>
          </div>
          {action === 'login' ? <NewLogin /> : <NewRegisterForm/>}
        </div>
      </main>
    </>
  );
};

export default Register;
