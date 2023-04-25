import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames';

import DivWrapper from '../items/DivWrapper';

interface InternalNavBarProps {
    method: Dispatch<SetStateAction<string>>
    value: string;
}

const InternalNavBar: React.FC<InternalNavBarProps> = ({ method, value }) => {
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (!isShrunk && (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)) {
          return true;
        }

        if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <div className={classNames(
    'bg-primarylight w-full',
    { 'fixed top-[164px]': isShrunk },
  )}>
    <DivWrapper>
      <ul className="w-full flex justify-around items-center h-16">
        <li>
          <button onClick={(): void => method('home')} className='uppercase text-primary text-2sm tracking-[1px]'
          >home</button>
        </li>
        <li>
          <button onClick={(): void => method('hola')} className='uppercase text-primary text-2sm tracking-[1px]'>mi perfil</button>
        </li>
        <li>
          <a className='uppercase text-primary text-2sm tracking-[1px]'>mis datos</a>
        </li>
        <li>
          <a className='uppercase text-primary text-2sm tracking-[1px]'>mis compras</a>
        </li>
        <li>
          <a className='uppercase text-primary text-2sm tracking-[1px]'>mi formación</a>
        </li>
        <li>
          <a className='uppercase text-primary text-2sm tracking-[1px]'>mis suscripciones</a>
        </li>
        <li>
          <a className='uppercase text-primary text-2sm tracking-[1px]'>mis códigos</a>
        </li>
        <li>
          <a className='uppercase text-primary text-2sm tracking-[1px]'>mis contenidos</a>
        </li>
      </ul>
    </DivWrapper>
  </div>
  );
};

export default InternalNavBar;