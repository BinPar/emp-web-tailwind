import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames';

import DivWrapper from '../items/DivWrapper';

interface PromirInternalNavProps {
    method: Dispatch<SetStateAction<string>>
    value: string;
}

const PromirInternalNav: React.FC<PromirInternalNavProps> = ({ method, value }) => {
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
    'bg-primarylight w-full transition-all duration-[.225s]',
    { 'fixed -translate-y-[92px] z-20': isShrunk },
  )}>
    <DivWrapper>
      <ul className="w-full flex justify-around items-center h-16">
        <li>
          <button onClick={(): void => method('home')} className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'home' || value === '' && 'font-bold'}`}
          >home</button>
        </li>
        <li>
          <button onClick={(): void => method('whatIs')} className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'whatIs' && 'font-bold'}`}>¿qué es Promir?</button>
        </li>
        <li>
        <button onClick={(): void => method('methodology')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'methodology' && 'font-bold'}`}>metodología</button>
        </li>
        <li>
        <button onClick={(): void => method('courses')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'courses' && 'font-bold'}`}>cursos y precios</button>
        </li>
        <li>
        <button onClick={(): void => method('tutoring')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'tutoring' && 'font-bold'}`}>tutorías</button>
        </li>
        <li>
        <button onClick={(): void => method('promir')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'promir' && 'font-bold'}`}>acceso a Promir</button>
        </li>
        <li>
        <button onClick={(): void => method('blog')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'blog' && 'font-bold'}`}>blog</button>
        </li>
        <li>
        <button onClick={(): void => method('contact')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'contact' && 'font-bold'}`}>contacto</button>
        </li>
      </ul>
    </DivWrapper>
  </div>
  );
};

export default PromirInternalNav;