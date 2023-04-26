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
    'bg-primarylight w-full transition-all duration-150 delay-75',
    { 'fixed -translate-y-[92px] z-20': isShrunk },
  )}>
    <DivWrapper>
      <ul className="w-full flex justify-around items-center h-16">
        <li>
          <button onClick={(): void => method('home')} className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'home' && 'font-bold'}`}
          >home</button>
        </li>
        <li>
          <button onClick={(): void => method('MyProfile')} className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'MyProfile' && 'font-bold'}`}>mi perfil</button>
        </li>
        <li>
        <button onClick={(): void => method('MyData')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'MyData' && 'font-bold'}`}>mis datos</button>
        </li>
        <li>
        <button onClick={(): void => method('MyPurchase')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'MyPurchase' && 'font-bold'}`}>mis compras</button>
        </li>
        <li>
        <button onClick={(): void => method('MyCourse')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'MyCourse' && 'font-bold'}`}>mi formación</button>
        </li>
        <li>
        <button onClick={(): void => method('MySubscription')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'MySubscription' && 'font-bold'}`}>mis suscripciones</button>
        </li>
        <li>
        <button onClick={(): void => method('MyCodes')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'MyCodes' && 'font-bold'}`}>mis códigos</button>
        </li>
        <li>
        <button onClick={(): void => method('profile')}  className={`uppercase text-primary text-2sm tracking-[1px] ${value === 'profile' && 'font-bold'}`}>mis contenidos</button>
        </li>
      </ul>
    </DivWrapper>
  </div>
  );
};

export default InternalNavBar;