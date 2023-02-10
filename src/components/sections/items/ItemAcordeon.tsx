import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../../model/react';
import ArrowDown from '../../icons/ArrowDown';
import SubHeader from './SubHeader';
interface ItemAcordeonProps {
  title: string;
}
const ItemAcordeon: React.FC<WithChildren<ItemAcordeonProps>> = ({ children, title }) => {
  const [closeInfoWrap, setCloseInfoWrap] = useState<boolean>(false);
  return (
    <article
      className={`text-lg font-normal text-gray-400 w-full${closeInfoWrap ? ' mb-0' : ' mb-5'}`}
    >
      <SubHeader className="w-full">
        <button
          className="flex justify-between w-full pr-2 items-center"
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
