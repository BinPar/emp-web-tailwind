import React, { useState } from 'react';

import { WithChildren } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';
import SubHeader from './SubHeader';

interface ItemAcordeonProps {
  title: string;
  id: string;
}
const ItemAcordeon: React.FC<WithChildren<ItemAcordeonProps>> = ({ children, title, id }) => {
  const [closeInfoWrap, setCloseInfoWrap] = useState<boolean>(false);
  return (
    <article id={id}
      className='text-lg font-normal text-gray-500 lg:p-4 lg:pb-0 mb-5 lg:mb-0 w-full'
    >
      <SubHeader className="w-full">
        <button
          className="flex justify-between w-full pr-2 items-center text-xl text-gray-500 font-semibold tracking-[1.2px]"
          type="button"
          onClick={(): void => setCloseInfoWrap(!closeInfoWrap)}
        >
          {title}
          <div
            className={`w-6 mt-3 transition-all duration-200 text-secondary${
              closeInfoWrap ? ' rotate-0' : ' rotate-180'
            }`}
          >
            <ArrowDown />
          </div>
        </button>
      </SubHeader>
      <div className={`overflow-hidden${closeInfoWrap ? ' h-0' : 'h-auto'}`}>{children}</div>
    </article>
  );
};

export default ItemAcordeon;
